'use client';

import { AdminNotice, PageIntro, SaveBar, TextAreaField, TextField } from '@/components/admin/fields';
import { useAdminContent } from '@/components/admin/use-admin-content';

export default function AdminHomeCopyPage() {
  const { content, setContent, status, error, save } = useAdminContent();

  if (status === 'loading' || !content) {
    return <AdminNotice title="Loading home copy" body={error || 'Fetching the homepage text.'} />;
  }

  const home = content.pages.home;

  function patch(next: Partial<typeof home>) {
    setContent({
      ...content!,
      pages: { ...content!.pages, home: { ...home, ...next } },
    });
  }

  return (
    <div>
      <PageIntro title="Home copy">Edit the homepage headlines and welcome text. Layout stays the same.</PageIntro>
      <div className="grid gap-4">
        <TextField label="Hero title" value={home.heroTitle} onChange={(event) => patch({ heroTitle: event.target.value })} />
        <TextField label="Hero subtitle" value={home.heroSubtitle} onChange={(event) => patch({ heroSubtitle: event.target.value })} />
        <TextField label="Hero location" value={home.heroLocation} onChange={(event) => patch({ heroLocation: event.target.value })} />
        <TextField label="Services heading" value={home.servicesHeading} onChange={(event) => patch({ servicesHeading: event.target.value })} />
        <TextField label="Hair card title" value={home.hairCardTitle} onChange={(event) => patch({ hairCardTitle: event.target.value })} />
        <TextAreaField label="Hair card description" value={home.hairCardDescription} onChange={(event) => patch({ hairCardDescription: event.target.value })} />
        <TextField label="Beauty card title" value={home.beautyCardTitle} onChange={(event) => patch({ beautyCardTitle: event.target.value })} />
        <TextAreaField label="Beauty card description" value={home.beautyCardDescription} onChange={(event) => patch({ beautyCardDescription: event.target.value })} />
        <TextField label="Welcome heading" value={home.welcomeHeading} onChange={(event) => patch({ welcomeHeading: event.target.value })} />
        <TextAreaField
          label="Welcome paragraphs (blank line between)"
          value={home.welcomeParagraphs.join('\n\n')}
          onChange={(event) => patch({ welcomeParagraphs: event.target.value.split(/\n\n+/) })}
        />
        <TextField label="Welcome button" value={home.welcomeCta} onChange={(event) => patch({ welcomeCta: event.target.value })} />
        <TextField label="Bottom heading" value={home.ctaHeading} onChange={(event) => patch({ ctaHeading: event.target.value })} />
        <TextField label="Bottom text" value={home.ctaBody} onChange={(event) => patch({ ctaBody: event.target.value })} />
        <TextField label="Primary button" value={home.ctaPrimary} onChange={(event) => patch({ ctaPrimary: event.target.value })} />
        <TextField label="Secondary button" value={home.ctaSecondary} onChange={(event) => patch({ ctaSecondary: event.target.value })} />
      </div>
      <SaveBar status={status} error={error} onSave={() => void save()} />
    </div>
  );
}
