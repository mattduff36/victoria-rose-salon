import { NextResponse } from 'next/server';
import { requireAdminRequest } from '@/lib/admin-guard';
import { deleteCloudinaryAsset } from '@/lib/cloudinary';

export const runtime = 'nodejs';

export async function DELETE(request: Request) {
  const denied = await requireAdminRequest(request, { mutate: true });
  if (denied) return denied;

  try {
    const body = (await request.json()) as { publicId?: string };
    const publicId = String(body.publicId || '').trim();
    if (!publicId.startsWith('victoria-rose/')) {
      return NextResponse.json({ error: 'Invalid image id' }, { status: 400 });
    }
    const result = await deleteCloudinaryAsset(publicId, 'image');
    return NextResponse.json(result);
  } catch (error) {
    console.error('Admin image delete failed', error);
    return NextResponse.json({ error: 'Unable to delete image' }, { status: 500 });
  }
}
