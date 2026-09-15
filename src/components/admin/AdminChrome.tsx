'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  ChatCircleText,
  FileText,
  House,
  List,
  Scissors,
  ShieldCheck,
  SignOut,
  Storefront,
  UsersThree,
  X,
} from '@phosphor-icons/react';
import { useState } from 'react';

const NAV = [
  { href: '/admin', label: 'Overview', icon: House },
  { href: '/admin/team', label: 'Team', icon: UsersThree },
  { href: '/admin/services', label: 'Services', icon: Scissors },
  { href: '/admin/reviews', label: 'Reviews', icon: ChatCircleText },
  { href: '/admin/salon', label: 'Salon details', icon: Storefront },
  { href: '/admin/pages/home', label: 'Home copy', icon: FileText },
  { href: '/admin/pages/about', label: 'About copy', icon: FileText },
  { href: '/admin/pages/policies', label: 'Booking policies', icon: FileText },
  { href: '/admin/pages/privacy', label: 'Privacy', icon: ShieldCheck },
];

function isActive(pathname: string, href: string) {
  const current = pathname.endsWith('/') && pathname.length > 1 ? pathname.slice(0, -1) : pathname;
  return current === href;
}

export default function AdminChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  }

  return (
    <div className="admin-app min-h-[100dvh] bg-[#f3efe6] text-[#1c241f]">
      <div className="lg:hidden sticky top-0 z-30 flex items-center justify-between border-b border-[#d5d0c6] bg-[#1b2a22] px-4 py-3 text-white">
        <p className="text-sm font-semibold tracking-wide">Victoria Rose Admin</p>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-md p-1.5 hover:bg-white/10"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={22} /> : <List size={22} />}
        </button>
      </div>

      <div className="lg:grid lg:grid-cols-[240px_minmax(0,1fr)]">
        <aside
          className={`${open ? 'block' : 'hidden'} lg:block bg-[#1b2a22] text-[#e8efe9] lg:min-h-[100dvh] lg:sticky lg:top-0`}
        >
          <div className="px-5 py-6 hidden lg:block">
            <p className="text-sm font-semibold tracking-[0.18em] uppercase text-[#c5d4cb]">Victoria Rose</p>
            <p className="mt-1 text-lg font-medium">Salon admin</p>
          </div>
          <nav className="px-3 pb-6 space-y-1">
            {NAV.map((item) => {
              const Icon = item.icon;
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition ${
                    active ? 'bg-[#31734d] text-white' : 'hover:bg-white/10'
                  }`}
                >
                  <Icon size={18} weight={active ? 'fill' : 'regular'} />
                  {item.label}
                </Link>
              );
            })}
            <button
              type="button"
              onClick={() => void logout()}
              className="mt-4 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-[#c5d4cb] hover:bg-white/10 hover:text-white"
            >
              <SignOut size={18} />
              Sign out
            </button>
          </nav>
        </aside>
        <div className="px-4 py-6 sm:px-8 sm:py-8">{children}</div>
      </div>
    </div>
  );
}
