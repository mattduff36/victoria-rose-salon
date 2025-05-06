import { google } from 'googleapis';

// Initialize the Google Sheets API
const sheets = google.sheets('v4');
const drive = google.drive('v3');

// Create a JWT client
const auth = new google.auth.JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  scopes: [
    'https://www.googleapis.com/auth/spreadsheets.readonly',
    'https://www.googleapis.com/auth/drive.readonly',
  ],
});

// Function to fetch services from Google Sheets
export async function getServices() {
  try {
    // First, let's get the sheet names to verify the sheet exists
    const spreadsheet = await sheets.spreadsheets.get({
      auth,
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
      fields: 'sheets.properties.title',
    });

    const sheetNames = spreadsheet.data.sheets?.map(sheet => sheet.properties?.title) || [];
    console.log('Available sheets:', sheetNames);

    // Now get the data
    const response = await sheets.spreadsheets.values.get({
      auth,
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
      range: 'Services', // Just the sheet name, let Google handle the range
    });

    const rows = response.data.values;
    if (!rows || rows.length === 0) {
      console.log('No data found in sheet');
      return [];
    }

    // Skip the header row
    const dataRows = rows.slice(1);

    return dataRows.map((row) => ({
      category: row[0],
      name: row[1],
      description: row[2],
      price: row[3],
      duration: row[4],
      subcategory: row[5],
      freshaId: row[6],
    }));
  } catch (error: any) {
    console.error('Error fetching services:', error);
    if (error.response) {
      console.error('Error details:', error.response.data);
    }
    return [];
  }
}

// Function to fetch team members from Google Drive
export async function getTeamMembers() {
  try {
    const response = await drive.files.list({
      auth,
      q: `'${process.env.GOOGLE_DRIVE_FOLDER_ID}' in parents and mimeType contains 'image/'`,
      fields: 'files(id, name)',
    });

    const files = response.data.files;
    if (!files || files.length === 0) {
      return [];
    }

    // Get temporary URLs for each file
    const teamMembers = await Promise.all(files.map(async (file) => {
      if (!file.id) {
        console.error('File ID is missing for file:', file.name);
        return null;
      }

      // Generate a temporary URL that expires in 1 hour
      const fileResponse = await drive.files.get({
        auth,
        fileId: file.id,
        fields: 'webContentLink',
      });

      // Get the direct download URL
      const downloadUrl = fileResponse.data.webContentLink;
      
      // Create a temporary URL that works with Next.js Image
      const imageUrl = downloadUrl
        ?.replace('&export=download', '')
        ?.replace('&export=view', '')
        ?.replace('https://drive.google.com/file/d/', 'https://drive.google.com/uc?export=view&id=')
        ?.replace('/view?usp=drivesdk', '');

      return {
        id: file.id,
        name: file.name?.replace(/\.[^/.]+$/, ''), // Remove file extension
        imageUrl: imageUrl || `https://drive.google.com/uc?export=view&id=${file.id}`,
      };
    }));

    return teamMembers.filter((member): member is NonNullable<typeof member> => member !== null);
  } catch (error: any) {
    console.error('Error fetching team members:', error);
    if (error.response) {
      console.error('Error details:', error.response.data);
    }
    return [];
  }
} 