'use client';

import { Plus, Trash } from '@phosphor-icons/react';
import { AdminNotice, PageIntro, SaveBar, TextAreaField, TextField } from '@/components/admin/fields';
import { useAdminContent } from '@/components/admin/use-admin-content';
import { createContentId, type ReviewItem } from '@/lib/content-types';

function emptyReview(): ReviewItem {
  return {
    id: createContentId('review'),
    name: '',
    rating: 5,
    dateLabel: '',
    text: '',
    source: 'Google',
  };
}

export default function AdminReviewsPage() {
  const { content, setContent, status, error, save } = useAdminContent();

  if (status === 'loading' || !content) {
    return <AdminNotice title="Loading reviews" body={error || 'Fetching saved testimonials.'} />;
  }

  function updateReview(id: string, patch: Partial<ReviewItem>) {
    setContent({
      ...content!,
      reviews: content!.reviews.map((review) => (review.id === id ? { ...review, ...patch } : review)),
    });
  }

  return (
    <div>
      <PageIntro title="Reviews">
        These quotes appear on the public reviews page. Keep them short enough to read at a glance.
      </PageIntro>
      <button
        type="button"
        onClick={() => setContent({ ...content, reviews: [...content.reviews, emptyReview()] })}
        className="mb-6 inline-flex items-center gap-2 rounded-lg bg-[#31734d] px-3 py-2 text-sm font-semibold text-white hover:bg-[#245538]"
      >
        <Plus size={16} />
        Add review
      </button>
      <div className="space-y-4">
        {content.reviews.map((review) => (
          <article key={review.id} className="rounded-xl border border-[#d5d0c6] bg-[#fffcf7] p-5">
            <div className="grid gap-3 md:grid-cols-2">
              <TextField label="Name" value={review.name} onChange={(event) => updateReview(review.id, { name: event.target.value })} />
              <TextField label="Source" value={review.source} onChange={(event) => updateReview(review.id, { source: event.target.value })} />
              <TextField
                label="Rating"
                type="number"
                min={1}
                max={5}
                value={review.rating}
                onChange={(event) => updateReview(review.id, { rating: Number(event.target.value) })}
              />
              <TextField label="Date label" value={review.dateLabel} onChange={(event) => updateReview(review.id, { dateLabel: event.target.value })} />
              <div className="md:col-span-2">
                <TextAreaField label="Review" value={review.text} onChange={(event) => updateReview(review.id, { text: event.target.value })} />
              </div>
            </div>
            <button
              type="button"
              onClick={() => setContent({ ...content, reviews: content.reviews.filter((item) => item.id !== review.id) })}
              className="mt-3 inline-flex items-center gap-2 text-sm text-[#9b2c2c]"
            >
              <Trash size={16} />
              Remove
            </button>
          </article>
        ))}
      </div>
      <SaveBar status={status} error={error} onSave={() => void save()} />
    </div>
  );
}
