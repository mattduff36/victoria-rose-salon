'use client';

import { AdminNotice, PageIntro, SaveBar, TextAreaField, TextField } from '@/components/admin/fields';
import { useAdminContent } from '@/components/admin/use-admin-content';

export default function AdminAboutCopyPage() {
  const { content, setContent, status, error, save } = useAdminContent();

  if (status === 'loading' || !content) {
    return <AdminNotice title="Loading about copy" body={error || 'Fetching the about page text.'} />;
  }

  const about = content.pages.about;
  const hair = content.pages.hair;
  const beauty = content.pages.beauty;
  const contact = content.pages.contact;

  function patchAbout(next: Partial<typeof about>) {
    setContent({ ...content!, pages: { ...content!.pages, about: { ...about, ...next } } });
  }

  return (
    <div>
      <PageIntro title="About and service intros">
        Story, studio, values, plus the short introductions on Hair, Beauty, and Contact.
      </PageIntro>
      <div className="grid gap-4">
        <TextField label="About hero title" value={about.heroTitle} onChange={(event) => patchAbout({ heroTitle: event.target.value })} />
        <TextField label="About hero subtitle" value={about.heroSubtitle} onChange={(event) => patchAbout({ heroSubtitle: event.target.value })} />
        <TextField label="Story heading" value={about.storyHeading} onChange={(event) => patchAbout({ storyHeading: event.target.value })} />
        <TextAreaField label="Story" value={about.storyParagraphs.join('\n\n')} onChange={(event) => patchAbout({ storyParagraphs: event.target.value.split(/\n\n+/) })} />
        <TextField label="Studio heading" value={about.studioHeading} onChange={(event) => patchAbout({ studioHeading: event.target.value })} />
        <TextAreaField label="Studio" value={about.studioParagraphs.join('\n\n')} onChange={(event) => patchAbout({ studioParagraphs: event.target.value.split(/\n\n+/) })} />
        <TextField label="Suite heading" value={about.suiteHeading} onChange={(event) => patchAbout({ suiteHeading: event.target.value })} />
        <TextAreaField label="Suite" value={about.suiteParagraphs.join('\n\n')} onChange={(event) => patchAbout({ suiteParagraphs: event.target.value.split(/\n\n+/) })} />
        <TextField label="Values heading" value={about.valuesHeading} onChange={(event) => patchAbout({ valuesHeading: event.target.value })} />
        <TextAreaField label="Values intro" value={about.valuesIntro} onChange={(event) => patchAbout({ valuesIntro: event.target.value })} />
        {about.values.map((value, index) => (
          <div key={`${value.title}-${index}`} className="grid gap-3 rounded-xl border border-[#d5d0c6] bg-[#fffcf7] p-4 md:grid-cols-2">
            <TextField
              label="Value title"
              value={value.title}
              onChange={(event) => {
                const values = about.values.map((item, itemIndex) => (itemIndex === index ? { ...item, title: event.target.value } : item));
                patchAbout({ values });
              }}
            />
            <TextAreaField
              label="Value description"
              value={value.description}
              onChange={(event) => {
                const values = about.values.map((item, itemIndex) => (itemIndex === index ? { ...item, description: event.target.value } : item));
                patchAbout({ values });
              }}
            />
          </div>
        ))}
        <TextField label="About CTA heading" value={about.ctaHeading} onChange={(event) => patchAbout({ ctaHeading: event.target.value })} />
        <TextAreaField label="About CTA text" value={about.ctaBody} onChange={(event) => patchAbout({ ctaBody: event.target.value })} />
        <TextField
          label="Hair page subtitle"
          value={hair.heroSubtitle}
          onChange={(event) => setContent({ ...content, pages: { ...content.pages, hair: { ...hair, heroSubtitle: event.target.value } } })}
        />
        <TextAreaField
          label="Hair page intro"
          value={hair.sectionIntro}
          onChange={(event) => setContent({ ...content, pages: { ...content.pages, hair: { ...hair, sectionIntro: event.target.value } } })}
        />
        <TextField
          label="Beauty page subtitle"
          value={beauty.heroSubtitle}
          onChange={(event) => setContent({ ...content, pages: { ...content.pages, beauty: { ...beauty, heroSubtitle: event.target.value } } })}
        />
        <TextAreaField
          label="Beauty page intro"
          value={beauty.sectionIntro}
          onChange={(event) => setContent({ ...content, pages: { ...content.pages, beauty: { ...beauty, sectionIntro: event.target.value } } })}
        />
        <TextField
          label="Contact hero subtitle"
          value={contact.heroSubtitle}
          onChange={(event) => setContent({ ...content, pages: { ...content.pages, contact: { ...contact, heroSubtitle: event.target.value } } })}
        />
        <TextAreaField
          label="Contact booking text"
          value={contact.bookingBody}
          onChange={(event) => setContent({ ...content, pages: { ...content.pages, contact: { ...contact, bookingBody: event.target.value } } })}
        />
      </div>
      <SaveBar status={status} error={error} onSave={() => void save()} />
    </div>
  );
}
