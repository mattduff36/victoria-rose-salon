import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import fetch from 'node-fetch';

const writeFile = promisify(fs.writeFile);
const mkdir = promisify(fs.mkdir);

// Initialize the Google Drive API
const drive = google.drive('v3');

// Create a JWT client
const auth = new google.auth.JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],
});

// Function to download an image from Google Drive
async function downloadImage(fileId: string, fileName: string): Promise<string> {
  const filePath = path.join(process.cwd(), 'public', 'team', fileName);
  
  try {
    const response = await drive.files.get(
      { fileId, auth, alt: 'media' },
      { responseType: 'stream' }
    );

    const dest = fs.createWriteStream(filePath);
    response.data.pipe(dest);

    return new Promise((resolve, reject) => {
      dest.on('finish', () => resolve(`/team/${fileName}`));
      dest.on('error', reject);
    });
  } catch (error) {
    console.error(`Error downloading image ${fileName}:`, error);
    throw error;
  }
}

// Function to sync team images
export async function syncTeamImages() {
  try {
    // Create team directory if it doesn't exist
    const teamDir = path.join(process.cwd(), 'public', 'team');
    if (!fs.existsSync(teamDir)) {
      await mkdir(teamDir, { recursive: true });
    }

    // Get list of files from Google Drive
    const response = await drive.files.list({
      auth,
      q: `'${process.env.GOOGLE_DRIVE_FOLDER_ID}' in parents and mimeType contains 'image/'`,
      fields: 'files(id, name)',
    });

    const files = response.data.files;
    if (!files || files.length === 0) {
      return [];
    }

    // Download each image and get local paths
    const teamMembers = await Promise.all(
      files.map(async (file) => {
        const fileName = file.name || `team-member-${file.id}.jpg`;
        const localPath = await downloadImage(file.id!, fileName);
        
        return {
          id: file.id,
          name: file.name?.replace(/\.[^/.]+$/, ''), // Remove file extension
          imageUrl: localPath,
        };
      })
    );

    return teamMembers;
  } catch (error) {
    console.error('Error syncing team images:', error);
    return [];
  }
} 