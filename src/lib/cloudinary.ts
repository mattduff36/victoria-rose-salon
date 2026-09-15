import { v2 as cloudinary, type UploadApiResponse } from 'cloudinary';

export const CONTENT_PUBLIC_ID = 'victoria-rose/content.json';
export const TEAM_FOLDER = 'victoria-rose/team';
export const MEDIA_FOLDER = 'victoria-rose/media';

function configuredCloudinary() {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });
  return cloudinary;
}

export function getCloudinary() {
  return configuredCloudinary();
}

export function getCloudinaryCloudName(): string {
  return process.env.CLOUDINARY_CLOUD_NAME || '';
}

export function getContentJsonUrl(): string {
  const cloudName = getCloudinaryCloudName();
  return `https://res.cloudinary.com/${cloudName}/raw/upload/${CONTENT_PUBLIC_ID}`;
}

export async function uploadImageBuffer(
  buffer: Buffer,
  options: { folder: string; publicId?: string; filename?: string },
): Promise<UploadApiResponse> {
  const client = getCloudinary();
  return new Promise((resolve, reject) => {
    client.uploader
      .upload_stream(
        {
          folder: options.folder,
          public_id: options.publicId,
          resource_type: 'image',
          overwrite: Boolean(options.publicId),
          invalidate: true,
          use_filename: Boolean(options.filename),
          unique_filename: !options.publicId,
        },
        (error, result) => {
          if (error || !result) {
            reject(error || new Error('Cloudinary image upload failed'));
            return;
          }
          resolve(result);
        },
      )
      .end(buffer);
  });
}

export async function uploadRawJson(json: string): Promise<UploadApiResponse> {
  const client = getCloudinary();
  const buffer = Buffer.from(json, 'utf8');
  return new Promise((resolve, reject) => {
    client.uploader
      .upload_stream(
        {
          public_id: CONTENT_PUBLIC_ID,
          resource_type: 'raw',
          overwrite: true,
          invalidate: true,
          unique_filename: false,
        },
        (error, result) => {
          if (error || !result) {
            reject(error || new Error('Cloudinary JSON upload failed'));
            return;
          }
          resolve(result);
        },
      )
      .end(buffer);
  });
}

export async function deleteCloudinaryAsset(
  publicId: string,
  resourceType: 'image' | 'raw' = 'image',
): Promise<{ result: string }> {
  const client = getCloudinary();
  const result = await client.uploader.destroy(publicId, {
    resource_type: resourceType,
    invalidate: true,
  });
  return { result: result.result };
}
