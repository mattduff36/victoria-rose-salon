'use client';

import { FormEvent, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError('');
    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Sign in failed');
      }
      const from = searchParams.get('from');
      router.push(from && from.startsWith('/admin') ? from : '/admin');
      router.refresh();
    } catch (loginError) {
      setError(loginError instanceof Error ? loginError.message : 'Sign in failed');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="min-h-[100dvh] bg-[#f3efe6] text-[#1c241f] lg:grid lg:grid-cols-2">
      <section className="relative hidden overflow-hidden bg-[#1b2a22] px-12 py-16 text-[#e8efe9] lg:flex lg:flex-col lg:justify-between">
        <p className="text-sm font-semibold tracking-[0.22em] uppercase text-[#c5d4cb]">Victoria Rose</p>
        <div>
          <h1 className="max-w-sm text-4xl font-semibold leading-tight">Salon content, kept in one quiet place.</h1>
          <p className="mt-5 max-w-sm text-base leading-7 text-[#c5d4cb]">
            Update the team, price list, reviews, and page copy without touching Google Drive.
          </p>
        </div>
        <p className="text-sm text-[#9db3a6]">Mansfield Woodhouse</p>
      </section>

      <section className="flex items-center justify-center px-4 py-16">
        <form onSubmit={onSubmit} className="w-full max-w-sm rounded-2xl border border-[#d5d0c6] bg-[#fffcf7] p-8 shadow-[0_12px_40px_rgba(28,36,31,0.08)]">
          <h2 className="text-2xl font-semibold">Sign in</h2>
          <p className="mt-2 text-sm text-[#5c6b63]">Use the admin username and password from your hosting settings.</p>
          <div className="mt-6 space-y-4">
            <div>
              <label htmlFor="username" className="mb-1.5 block text-[13px] font-medium">Username</label>
              <input
                id="username"
                name="username"
                autoComplete="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                className="w-full rounded-lg border border-[#d5d0c6] bg-white px-3 py-2.5 outline-none focus:border-[#31734d] focus:ring-2 focus:ring-[#31734d]/20"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="mb-1.5 block text-[13px] font-medium">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full rounded-lg border border-[#d5d0c6] bg-white px-3 py-2.5 outline-none focus:border-[#31734d] focus:ring-2 focus:ring-[#31734d]/20"
                required
              />
            </div>
          </div>
          {error ? <p className="mt-4 text-sm text-[#9b2c2c]">{error}</p> : null}
          <button
            type="submit"
            disabled={busy}
            className="mt-6 w-full rounded-lg bg-[#31734d] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#245538] disabled:opacity-50"
          >
            {busy ? 'Signing in…' : 'Sign in'}
          </button>
        </form>
      </section>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={<div className="min-h-[100dvh] bg-[#f3efe6]" />}>
      <LoginForm />
    </Suspense>
  );
}
