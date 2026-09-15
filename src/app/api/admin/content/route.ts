import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';
import { requireAdminRequest } from '@/lib/admin-guard';
import { uploadRawJson } from '@/lib/cloudinary';
import { getFreshSiteContent } from '@/lib/content';
import { validateSiteContent } from '@/lib/content-types';

export const runtime = 'nodejs';

export async function GET(request: Request) {
  const denied = await requireAdminRequest(request);
  if (denied) return denied;

  try {
    const content = await getFreshSiteContent();
    return NextResponse.json(content);
  } catch (error) {
    console.error('Admin content read failed', error);
    return NextResponse.json({ error: 'Unable to load content' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  const denied = await requireAdminRequest(request, { mutate: true });
  if (denied) return denied;

  try {
    const payload = await request.json();
    const content = validateSiteContent({
      ...payload,
      version: 1,
      updatedAt: new Date().toISOString(),
    });
    await uploadRawJson(JSON.stringify(content));
    revalidatePath('/', 'layout');
    revalidatePath('/contact');
    revalidatePath('/our-team');
    revalidatePath('/hair');
    revalidatePath('/beauty');
    revalidatePath('/reviews');
    revalidatePath('/about-us');
    revalidatePath('/booking-policies');
    revalidatePath('/privacy');
    revalidatePath('/appointments');
    return NextResponse.json(content);
  } catch (error) {
    console.error('Admin content save failed', error);
    const message = error instanceof Error ? error.message : 'Unable to save content';
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
