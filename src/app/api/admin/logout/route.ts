import { NextResponse } from 'next/server';
import { cookieClear } from '@/lib/admin-session';

export const runtime = 'nodejs';

export async function POST() {
  const response = NextResponse.json({ ok: true });
  response.headers.set('Set-Cookie', cookieClear());
  return response;
}
