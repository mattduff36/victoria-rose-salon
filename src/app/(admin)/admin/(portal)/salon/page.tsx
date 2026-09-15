'use client';

import ImageUpload from '@/components/admin/ImageUpload';
import { AdminNotice, CheckboxField, PageIntro, SaveBar, TextAreaField, TextField } from '@/components/admin/fields';
import { useAdminContent } from '@/components/admin/use-admin-content';

export default function AdminSalonPage() {
  const { content, setContent, status, error, save } = useAdminContent();

  if (status === 'loading' || !content) {
    return <AdminNotice title="Loading salon details" body={error || 'Fetching address and hours.'} />;
  }

  const { site, media } = content;

  return (
    <div>
      <PageIntro title="Salon details">
        Address, phone, and opening hours are shared by Contact, the footer, and search listing data.
      </PageIntro>
      <div className="space-y-6">
        <section className="rounded-xl border border-[#d5d0c6] bg-[#fffcf7] p-5">
          <h2 className="mb-4 text-lg font-semibold">Contact</h2>
          <div className="grid gap-3 md:grid-cols-2">
            <TextField label="Salon name" value={site.name} onChange={(event) => setContent({ ...content, site: { ...site, name: event.target.value } })} />
            <TextField label="Phone" value={site.phone} onChange={(event) => setContent({ ...content, site: { ...site, phone: event.target.value } })} />
            <TextField label="Phone link" value={site.phoneHref} onChange={(event) => setContent({ ...content, site: { ...site, phoneHref: event.target.value } })} />
            <TextField label="Email" value={site.email || ''} onChange={(event) => setContent({ ...content, site: { ...site, email: event.target.value || undefined } })} />
            <div className="md:col-span-2">
              <TextAreaField
                label="Address (one line per row)"
                value={site.addressLines.join('\n')}
                onChange={(event) => setContent({ ...content, site: { ...site, addressLines: event.target.value.split('\n') } })}
              />
            </div>
            <div className="md:col-span-2">
              <TextAreaField
                label="Google Maps embed URL"
                value={site.mapEmbedUrl}
                onChange={(event) => setContent({ ...content, site: { ...site, mapEmbedUrl: event.target.value } })}
              />
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-[#d5d0c6] bg-[#fffcf7] p-5">
          <h2 className="mb-4 text-lg font-semibold">Opening hours</h2>
          <div className="space-y-3">
            {site.hours.map((entry, index) => (
              <div key={entry.day} className="grid gap-3 rounded-lg border border-[#ece7dc] p-3 md:grid-cols-[140px_1fr_1fr_auto]">
                <TextField
                  label="Day"
                  value={entry.label}
                  onChange={(event) => {
                    const hours = site.hours.map((item, itemIndex) => (itemIndex === index ? { ...item, label: event.target.value } : item));
                    setContent({ ...content, site: { ...site, hours } });
                  }}
                />
                <TextField
                  label="Opens"
                  value={entry.open}
                  disabled={entry.closed}
                  onChange={(event) => {
                    const hours = site.hours.map((item, itemIndex) => (itemIndex === index ? { ...item, open: event.target.value } : item));
                    setContent({ ...content, site: { ...site, hours } });
                  }}
                />
                <TextField
                  label="Closes"
                  value={entry.close}
                  disabled={entry.closed}
                  onChange={(event) => {
                    const hours = site.hours.map((item, itemIndex) => (itemIndex === index ? { ...item, close: event.target.value } : item));
                    setContent({ ...content, site: { ...site, hours } });
                  }}
                />
                <div className="flex items-end pb-2">
                  <CheckboxField
                    label="Closed"
                    checked={entry.closed}
                    onChange={(checked) => {
                      const hours = site.hours.map((item, itemIndex) => (itemIndex === index ? { ...item, closed: checked } : item));
                      setContent({ ...content, site: { ...site, hours } });
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-[#d5d0c6] bg-[#fffcf7] p-5">
          <h2 className="mb-4 text-lg font-semibold">Site images</h2>
          <p className="mb-4 text-sm text-[#5c6b63]">Leave these as the current files, or replace them with a new upload.</p>
          <div className="grid gap-5 md:grid-cols-2">
            {(
              [
                ['hero', 'Hero'],
                ['about', 'About'],
                ['hairInterior', 'Hair interior'],
                ['beautyInterior', 'Beauty interior'],
                ['exterior', 'Exterior'],
                ['logo', 'Logo'],
              ] as const
            ).map(([key, label]) => (
              <ImageUpload
                key={key}
                label={label}
                folder="media"
                value={media[key]}
                onUploaded={({ url }) => setContent({ ...content, media: { ...media, [key]: url } })}
              />
            ))}
          </div>
        </section>
      </div>
      <SaveBar status={status} error={error} onSave={() => void save()} />
    </div>
  );
}
