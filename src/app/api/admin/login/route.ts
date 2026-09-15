import { NextResponse } from 'next/server';
import {
  cookieSerialize,
  createSessionToken,
  credentialsMatch,
} from '@/lib/admin-session';

export const runtime = 'nodejs';

const attempts = new Map<string, { count: number; blockedUntil: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS = 8;
const DELAY_MS = 400;

function clientKey(request: Request): string {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'local';
}

function getAttempt(key: string) {
  const existing = attempts.get(key);
  if (!existing || existing.blockedUntil < Date.now() - WINDOW_MS) {
    return { count: 0, blockedUntil: 0 };
  }
  return existing;
}

async function wait(ms: number) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

export async function POST(request: Request) {
  const key = clientKey(request);
  const current = getAttempt(key);
  if (current.blockedUntil > Date.now()) {
    return NextResponse.json({ error: 'Too many attempts. Try again shortly.' }, { status: 429 });
  }

  await wait(DELAY_MS);

  let username = '';
  let password = '';
  try {
    const body = (await request.json()) as { username?: string; password?: string };
    username = String(body.username || '');
    password = String(body.password || '');
  } catch {
    return NextResponse.json({ error: 'Invalid login payload' }, { status: 400 });
  }

  const matched = await credentialsMatch(username, password);
  if (!matched) {
    const nextCount = current.count + 1;
    attempts.set(key, {
      count: nextCount,
      blockedUntil: nextCount >= MAX_ATTEMPTS ? Date.now() + WINDOW_MS : 0,
    });
    return NextResponse.json({ error: 'Incorrect username or password' }, { status: 401 });
  }

  attempts.delete(key);
  const token = await createSessionToken();
  const response = NextResponse.json({ ok: true });
  response.headers.set('Set-Cookie', cookieSerialize(token));
  return response;
}
