'use client';

import Link from 'next/link';
import { AdminNotice, PageIntro } from '@/components/admin/fields';
import { useAdminContent } from '@/components/admin/use-admin-content';

export default function AdminOverviewPage() {
  const { content, status, error } = useAdminContent();

  if (status === 'loading' || !content) {
    return <AdminNotice title="Loading salon content" body={error || 'Fetching the latest saved document.'} />;
  }

  const cards = [
    { href: '/admin/team', label: 'Team members', value: content.team.length },
    { href: '/admin/services', label: 'Services', value: content.services.length },
    { href: '/admin/reviews', label: 'Reviews', value: content.reviews.length },
  ];

  return (
    <div>
      <PageIntro title="Overview">
        This is the salon back office. Edit staff, prices, reviews, hours, and page copy. Saved changes appear on the public site without a redeploy.
      </PageIntro>
      <p className="mb-6 text-sm text-[#5c6b63]">
        Last saved {new Date(content.updatedAt).toLocaleString('en-GB')}
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="rounded-xl border border-[#d5d0c6] bg-[#fffcf7] px-5 py-6 transition hover:border-[#31734d]"
          >
            <p className="text-3xl font-semibold text-[#1c241f]">{card.value}</p>
            <p className="mt-2 text-sm text-[#5c6b63]">{card.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
