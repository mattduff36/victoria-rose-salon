'use client';

import { UploadSimple } from '@phosphor-icons/react';
import { useState } from 'react';

export default function ImageUpload({
  label,
  value,
  onUploaded,
  folder = 'media',
}: {
  label: string;
  value?: string;
  folder?: 'media' | 'team';
  onUploaded: (payload: { url: string; publicId: string }) => void;
}) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  async function onChange(file: File | undefined) {
    if (!file) return;
    setBusy(true);
    setError('');
    const form = new FormData();
    form.append('file', file);
    form.append('folder', folder);
    try {
      const response = await fetch('/api/admin/upload', { method: 'POST', body: form });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Upload failed');
      onUploaded({ url: data.url, publicId: data.publicId });
    } catch (uploadError) {
      setError(uploadError instanceof Error ? uploadError.message : 'Upload failed');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div>
      <p className="mb-1.5 text-[13px] font-medium text-[#1c241f]">{label}</p>
      <div className="flex items-center gap-4">
        <div className="h-20 w-20 overflow-hidden rounded-lg border border-[#d5d0c6] bg-[#ece7dc]">
          {value ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={value} alt="" className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full items-center justify-center text-[#5c6b63]">
              <UploadSimple size={22} />
            </div>
          )}
        </div>
        <label className="inline-flex cursor-pointer items-center rounded-lg border border-[#d5d0c6] bg-[#fffcf7] px-3 py-2 text-sm font-medium text-[#1c241f] hover:border-[#31734d]">
          {busy ? 'Uploading…' : 'Choose image'}
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            className="sr-only"
            disabled={busy}
            onChange={(event) => void onChange(event.target.files?.[0])}
          />
        </label>
      </div>
      {error ? <p className="mt-2 text-sm text-[#9b2c2c]">{error}</p> : null}
    </div>
  );
}
