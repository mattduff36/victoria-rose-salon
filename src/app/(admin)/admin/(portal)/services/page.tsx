'use client';

import { Plus, Trash } from '@phosphor-icons/react';
import { useMemo, useState } from 'react';
import { AdminNotice, CheckboxField, PageIntro, SaveBar, TextAreaField, TextField } from '@/components/admin/fields';
import { useAdminContent } from '@/components/admin/use-admin-content';
import { createContentId, type ServiceItem } from '@/lib/content-types';

function emptyService(index: number): ServiceItem {
  return {
    id: createContentId('service'),
    name: '',
    description: '',
    price: '',
    duration: '',
    category: 'hair',
    subcategory: '',
    bookable: true,
    sortOrder: index,
  };
}

export default function AdminServicesPage() {
  const { content, setContent, status, error, save } = useAdminContent();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!content) return [];
    const needle = query.trim().toLowerCase();
    return content.services
      .filter((service) => (category === 'all' ? true : service.category === category))
      .filter((service) => {
        if (!needle) return true;
        return [service.name, service.subcategory, service.description].join(' ').toLowerCase().includes(needle);
      })
      .sort((a, b) => a.sortOrder - b.sortOrder);
  }, [content, query, category]);

  if (status === 'loading' || !content) {
    return <AdminNotice title="Loading services" body={error || 'Fetching the price list.'} />;
  }

  function updateService(id: string, patch: Partial<ServiceItem>) {
    setContent({
      ...content!,
      services: content!.services.map((service) => (service.id === id ? { ...service, ...patch } : service)),
    });
  }

  return (
    <div>
      <PageIntro title="Services">
        Search and edit the hair and beauty list. Fresha IDs stay on the service so online booking keeps working.
      </PageIntro>
      <div className="mb-5 flex flex-col gap-3 sm:flex-row">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search services"
          className="w-full rounded-lg border border-[#d5d0c6] bg-[#fffcf7] px-3 py-2.5 outline-none focus:border-[#31734d] focus:ring-2 focus:ring-[#31734d]/20 sm:max-w-xs"
        />
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="rounded-lg border border-[#d5d0c6] bg-[#fffcf7] px-3 py-2.5 outline-none focus:border-[#31734d]"
        >
          <option value="all">All categories</option>
          <option value="hair">Hair</option>
          <option value="beauty">Beauty</option>
        </select>
        <button
          type="button"
          onClick={() => {
            const next = emptyService(content.services.length);
            setContent({ ...content, services: [...content.services, next] });
            setOpenId(next.id);
          }}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#31734d] px-3 py-2 text-sm font-semibold text-white hover:bg-[#245538]"
        >
          <Plus size={16} />
          Add service
        </button>
      </div>
      <div className="overflow-hidden rounded-xl border border-[#d5d0c6] bg-[#fffcf7]">
        {filtered.map((service) => (
          <div key={service.id} className="border-b border-[#ece7dc] last:border-b-0">
            <button
              type="button"
              onClick={() => setOpenId((current) => (current === service.id ? null : service.id))}
              className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left hover:bg-[#f3efe6]"
            >
              <span>
                <span className="block font-medium">{service.name || 'Untitled service'}</span>
                <span className="text-sm text-[#5c6b63]">
                  {service.category} / {service.subcategory || 'Uncategorised'} · {service.price || 'No price'}
                </span>
              </span>
              <span className="text-xs uppercase tracking-wide text-[#5c6b63]">{openId === service.id ? 'Close' : 'Edit'}</span>
            </button>
            {openId === service.id ? (
              <div className="grid gap-3 border-t border-[#ece7dc] bg-white/60 px-4 py-4 md:grid-cols-2">
                <TextField label="Name" value={service.name} onChange={(event) => updateService(service.id, { name: event.target.value })} />
                <TextField label="Subcategory" value={service.subcategory} onChange={(event) => updateService(service.id, { subcategory: event.target.value })} />
                <TextField label="Category" value={service.category} onChange={(event) => updateService(service.id, { category: event.target.value })} />
                <TextField label="Price" value={service.price} onChange={(event) => updateService(service.id, { price: event.target.value })} />
                <TextField label="Duration (minutes)" value={service.duration} onChange={(event) => updateService(service.id, { duration: event.target.value })} />
                <TextField label="Fresha ID" value={service.freshaId || ''} onChange={(event) => updateService(service.id, { freshaId: event.target.value || undefined })} />
                <div className="md:col-span-2">
                  <TextAreaField label="Description" value={service.description} onChange={(event) => updateService(service.id, { description: event.target.value })} />
                </div>
                <CheckboxField label="Bookable online" checked={service.bookable} onChange={(checked) => updateService(service.id, { bookable: checked })} />
                <button
                  type="button"
                  onClick={() => setContent({ ...content, services: content.services.filter((item) => item.id !== service.id) })}
                  className="inline-flex items-center gap-2 justify-self-start text-sm text-[#9b2c2c]"
                >
                  <Trash size={16} />
                  Remove service
                </button>
              </div>
            ) : null}
          </div>
        ))}
        {filtered.length === 0 ? (
          <p className="px-4 py-8 text-center text-sm text-[#5c6b63]">No services match this search.</p>
        ) : null}
      </div>
      <SaveBar status={status} error={error} onSave={() => void save()} />
    </div>
  );
}
