import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import {
  ADMIN_COOKIE,
  isSameOrigin,
  verifySessionToken,
} from '@/lib/admin-session';

export async function requireAdminSession(): Promise<boolean> {
  const token = cookies().get(ADMIN_COOKIE)?.value;
  return verifySessionToken(token);
}

export async function requireAdminRequest(
  request: Request,
  options: { mutate?: boolean } = {},
): Promise<NextResponse | null> {
  if (options.mutate && request.method !== 'GET' && request.method !== 'HEAD' && !isSameOrigin(request)) {
    return NextResponse.json({ error: 'Invalid request origin' }, { status: 403 });
  }

  const allowed = await requireAdminSession();
  if (!allowed) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  return null;
}
