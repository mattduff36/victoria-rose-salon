import { NextResponse } from 'next/server';
import { requireAdminRequest } from '@/lib/admin-guard';
import { MEDIA_FOLDER, TEAM_FOLDER, uploadImageBuffer } from '@/lib/cloudinary';

export const runtime = 'nodejs';

const MAX_BYTES = 8 * 1024 * 1024;
const ALLOWED_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif']);

export async function POST(request: Request) {
  const denied = await requireAdminRequest(request, { mutate: true });
  if (denied) return denied;

  const form = await request.formData();
  const file = form.get('file');
  const folderKey = String(form.get('folder') || 'media');

  if (!(file instanceof File)) {
    return NextResponse.json({ error: 'No image file provided' }, { status: 400 });
  }
  if (!ALLOWED_TYPES.has(file.type)) {
    return NextResponse.json({ error: 'Only JPEG, PNG, WebP, or GIF images are allowed' }, { status: 400 });
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: 'Image must be 8MB or smaller' }, { status: 400 });
  }

  const folder = folderKey === 'team' ? TEAM_FOLDER : MEDIA_FOLDER;
  const buffer = Buffer.from(await file.arrayBuffer());

  try {
    const uploaded = await uploadImageBuffer(buffer, {
      folder,
      filename: file.name,
    });
    return NextResponse.json({
      url: uploaded.secure_url,
      publicId: uploaded.public_id,
    });
  } catch (error) {
    console.error('Admin upload failed', error);
    return NextResponse.json({ error: 'Image upload failed' }, { status: 500 });
  }
}
