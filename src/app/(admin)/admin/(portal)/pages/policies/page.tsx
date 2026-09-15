'use client';

import { Plus, Trash } from '@phosphor-icons/react';
import { AdminNotice, PageIntro, SaveBar, TextAreaField, TextField } from '@/components/admin/fields';
import { useAdminContent } from '@/components/admin/use-admin-content';
import { createContentId } from '@/lib/content-types';

export default function AdminPoliciesPage() {
  const { content, setContent, status, error, save } = useAdminContent();

  if (status === 'loading' || !content) {
    return <AdminNotice title="Loading policies" body={error || 'Fetching booking policy sections.'} />;
  }

  const policies = content.pages.policies;

  function updateSection(id: string, patch: { heading?: string; body?: string; bullets?: string[] }) {
    setContent({
      ...content!,
      pages: {
        ...content!.pages,
        policies: {
          ...policies,
          sections: policies.sections.map((section) => (section.id === id ? { ...section, ...patch } : section)),
        },
      },
    });
  }

  return (
    <div>
      <PageIntro title="Booking policies">Each section becomes a heading and body on the public policies page.</PageIntro>
      <div className="grid gap-4">
        <TextField
          label="Hero title"
          value={policies.heroTitle}
          onChange={(event) => setContent({ ...content, pages: { ...content.pages, policies: { ...policies, heroTitle: event.target.value } } })}
        />
        <TextField
          label="Hero subtitle"
          value={policies.heroSubtitle}
          onChange={(event) => setContent({ ...content, pages: { ...content.pages, policies: { ...policies, heroSubtitle: event.target.value } } })}
        />
        {policies.sections.map((section) => (
          <article key={section.id} className="rounded-xl border border-[#d5d0c6] bg-[#fffcf7] p-5">
            <TextField label="Heading" value={section.heading} onChange={(event) => updateSection(section.id, { heading: event.target.value })} />
            <div className="mt-3">
              <TextAreaField label="Body" value={section.body} onChange={(event) => updateSection(section.id, { body: event.target.value })} />
            </div>
            <div className="mt-3">
              <TextAreaField
                label="Bullets (one per line)"
                value={(section.bullets || []).join('\n')}
                onChange={(event) => updateSection(section.id, { bullets: event.target.value.split('\n').filter(Boolean) })}
              />
            </div>
            <button
              type="button"
              className="mt-3 inline-flex items-center gap-2 text-sm text-[#9b2c2c]"
              onClick={() =>
                setContent({
                  ...content,
                  pages: {
                    ...content.pages,
                    policies: { ...policies, sections: policies.sections.filter((item) => item.id !== section.id) },
                  },
                })
              }
            >
              <Trash size={16} />
              Remove section
            </button>
          </article>
        ))}
        <button
          type="button"
          onClick={() =>
            setContent({
              ...content,
              pages: {
                ...content.pages,
                policies: {
                  ...policies,
                  sections: [...policies.sections, { id: createContentId('policy'), heading: '', body: '' }],
                },
              },
            })
          }
          className="inline-flex items-center gap-2 self-start rounded-lg bg-[#31734d] px-3 py-2 text-sm font-semibold text-white hover:bg-[#245538]"
        >
          <Plus size={16} />
          Add section
        </button>
      </div>
      <SaveBar status={status} error={error} onSave={() => void save()} />
    </div>
  );
}
