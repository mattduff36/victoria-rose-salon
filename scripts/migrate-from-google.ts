import { createWriteStream, existsSync, mkdirSync, promises as fs } from 'fs';
import path from 'path';
import { google } from 'googleapis';
import { nanoid } from 'nanoid';
import { parseServicesWorkbook } from '../src/utils/parse-services-xlsx';
import { defaultMedia, defaultPages, defaultReviews, defaultSite } from '../src/lib/content-defaults';
import { uploadImageBuffer, uploadRawJson } from '../src/lib/cloudinary';
import type { SiteContent, TeamMember } from '../src/lib/content-types';

function loadEnvLocal() {
  const envPath = path.join(process.cwd(), '.env.local');
  if (!existsSync(envPath)) return;
  const text = require('fs').readFileSync(envPath, 'utf8') as string;
  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const eq = line.indexOf('=');
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    let value = line.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
}

function parseTeamFilename(fileName: string): { name: string; role: string } {
  const withoutExt = fileName.replace(/\.[^/.]+$/, '').trim();
  const [name, ...roleParts] = withoutExt.split(' - ');
  return {
    name: (name || withoutExt).trim(),
    role: roleParts.join(' - ').trim(),
  };
}

async function downloadDriveFile(
  drive: ReturnType<typeof google.drive>,
  auth: InstanceType<typeof google.auth.JWT>,
  fileId: string,
  destPath: string,
) {
  const response = await drive.files.get({ fileId, auth, alt: 'media' }, { responseType: 'stream' });
  await new Promise<void>((resolve, reject) => {
    const dest = createWriteStream(destPath);
    response.data.pipe(dest);
    dest.on('finish', () => resolve());
    dest.on('error', reject);
  });
}

async function collectLocalTeamFiles(teamDir: string): Promise<string[]> {
  if (!existsSync(teamDir)) return [];
  const entries = await fs.readdir(teamDir);
  return entries.filter((name) => /\.(jpe?g|png|webp|gif)$/i.test(name));
}

async function uploadTeamImage(filePath: string, fileName: string) {
  const buffer = await fs.readFile(filePath);
  const parsed = parseTeamFilename(fileName);
  const publicId = parsed.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  return uploadImageBuffer(buffer, {
    folder: 'victoria-rose/team',
    publicId,
    filename: fileName,
  });
}

async function main() {
  loadEnvLocal();

  const teamDir = path.join(process.cwd(), 'public', 'team');
  mkdirSync(teamDir, { recursive: true });

  const driveFiles: { id: string; name: string }[] = [];
  try {
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    });
    const drive = google.drive('v3');
    const listed = await drive.files.list({
      auth,
      q: `'${process.env.GOOGLE_DRIVE_FOLDER_ID}' in parents and mimeType contains 'image/'`,
      fields: 'files(id, name)',
    });
    for (const file of listed.data.files || []) {
      if (!file.id || !file.name) continue;
      driveFiles.push({ id: file.id, name: file.name });
      const dest = path.join(teamDir, file.name);
      await downloadDriveFile(drive, auth, file.id, dest);
      console.log(`Downloaded Drive file: ${file.name}`);
    }
  } catch (error) {
    console.warn('Drive download skipped or failed. Using local public/team files.');
    console.warn(error instanceof Error ? error.message : error);
  }

  const localFiles = await collectLocalTeamFiles(teamDir);
  if (localFiles.length === 0) {
    throw new Error('No team images found in Drive or public/team');
  }

  const team: TeamMember[] = [];
  for (const [index, fileName] of localFiles.entries()) {
    const filePath = path.join(teamDir, fileName);
    const parsed = parseTeamFilename(fileName);
    let imageUrl = `/team/${encodeURI(fileName)}`;
    let imagePublicId: string | undefined;
    try {
      const uploaded = await uploadTeamImage(filePath, fileName);
      imageUrl = uploaded.secure_url;
      imagePublicId = uploaded.public_id;
      console.log(`Uploaded ${fileName} -> ${uploaded.public_id}`);
    } catch (error) {
      console.warn(`Cloudinary upload failed for ${fileName}, keeping local path.`);
      console.warn(error instanceof Error ? error.message : error);
    }
    team.push({
      id: nanoid(),
      name: parsed.name,
      role: parsed.role,
      imageUrl,
      imagePublicId,
      sortOrder: index,
      isOwner: parsed.role.toLowerCase().includes('owner'),
    });
  }

  const services = parseServicesWorkbook().map((service, index) => ({
    id: nanoid(),
    ...service,
    sortOrder: index,
  }));

  const content: SiteContent = {
    version: 1,
    updatedAt: new Date().toISOString(),
    site: defaultSite,
    media: defaultMedia,
    team,
    services,
    reviews: defaultReviews,
    pages: defaultPages,
  };

  const dataDir = path.join(process.cwd(), 'data');
  mkdirSync(dataDir, { recursive: true });
  const seedPath = path.join(dataDir, 'content.seed.json');
  await fs.writeFile(seedPath, JSON.stringify(content, null, 2), 'utf8');
  console.log(`Wrote ${seedPath} (${team.length} team, ${services.length} services)`);

  try {
    const uploaded = await uploadRawJson(JSON.stringify(content));
    console.log(`Uploaded live content JSON: ${uploaded.secure_url}`);
  } catch (error) {
    console.warn('Cloudinary JSON upload failed. Seed file is still written.');
    console.warn(error instanceof Error ? error.message : error);
  }

  console.log(`Drive files seen: ${driveFiles.length}. Local team files: ${localFiles.length}.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
