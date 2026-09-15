'use client';

import { Plus, Trash } from '@phosphor-icons/react';
import { AdminNotice, PageIntro, SaveBar, TextAreaField, TextField } from '@/components/admin/fields';
import { useAdminContent } from '@/components/admin/use-admin-content';
import { createContentId } from '@/lib/content-types';

export default function AdminPrivacyPage() {
  const { content, setContent, status, error, save } = useAdminContent();

  if (status === 'loading' || !content) {
    return <AdminNotice title="Loading privacy notice" body={error || 'Fetching privacy sections.'} />;
  }

  const privacy = content.pages.privacy;

  function updateSection(id: string, patch: { heading?: string; body?: string; bullets?: string[] }) {
    setContent({
      ...content!,
      pages: {
        ...content!.pages,
        privacy: {
          ...privacy,
          sections: privacy.sections.map((section) => (section.id === id ? { ...section, ...patch } : section)),
        },
      },
    });
  }

  return (
    <div>
      <PageIntro title="Privacy notice">Edit the legal copy in sections so it stays readable.</PageIntro>
      <div className="grid gap-4">
        <TextField
          label="Title"
          value={privacy.title}
          onChange={(event) => setContent({ ...content, pages: { ...content.pages, privacy: { ...privacy, title: event.target.value } } })}
        />
        <TextAreaField
          label="Intro"
          value={privacy.intro}
          onChange={(event) => setContent({ ...content, pages: { ...content.pages, privacy: { ...privacy, intro: event.target.value } } })}
        />
        <TextAreaField
          label="Opening paragraph"
          value={privacy.body}
          onChange={(event) => setContent({ ...content, pages: { ...content.pages, privacy: { ...privacy, body: event.target.value } } })}
        />
        {privacy.sections.map((section) => (
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
                    privacy: { ...privacy, sections: privacy.sections.filter((item) => item.id !== section.id) },
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
                privacy: {
                  ...privacy,
                  sections: [...privacy.sections, { id: createContentId('privacy'), heading: '', body: '' }],
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
