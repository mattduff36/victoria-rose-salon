'use client';

import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

export function FieldLabel({ htmlFor, children }: { htmlFor?: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="block text-[13px] font-medium text-[#1c241f] mb-1.5">
      {children}
    </label>
  );
}

export function TextField({
  label,
  ...props
}: { label: string } & InputHTMLAttributes<HTMLInputElement>) {
  const id = props.id || props.name;
  return (
    <div>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <input
        id={id}
        {...props}
        className={`w-full rounded-lg border border-[#d5d0c6] bg-[#fffcf7] px-3 py-2.5 text-[#1c241f] outline-none transition focus:border-[#31734d] focus:ring-2 focus:ring-[#31734d]/20 ${props.className || ''}`}
      />
    </div>
  );
}

export function TextAreaField({
  label,
  ...props
}: { label: string } & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const id = props.id || props.name;
  return (
    <div>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <textarea
        id={id}
        {...props}
        className={`w-full min-h-[120px] rounded-lg border border-[#d5d0c6] bg-[#fffcf7] px-3 py-2.5 text-[#1c241f] outline-none transition focus:border-[#31734d] focus:ring-2 focus:ring-[#31734d]/20 ${props.className || ''}`}
      />
    </div>
  );
}

export function CheckboxField({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label className="inline-flex items-center gap-2 text-sm text-[#1c241f]">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="h-4 w-4 rounded border-[#d5d0c6] text-[#31734d] focus:ring-[#31734d]"
      />
      {label}
    </label>
  );
}

export function SaveBar({
  status,
  error,
  onSave,
  disabled,
}: {
  status: string;
  error?: string;
  onSave: () => void;
  disabled?: boolean;
}) {
  const label =
    status === 'saving' ? 'Saving…' : status === 'saved' ? 'Saved' : 'Save changes';

  return (
    <div className="sticky bottom-0 -mx-4 mt-8 border-t border-[#d5d0c6] bg-[#f3efe6]/95 px-4 py-3 backdrop-blur sm:-mx-8 sm:px-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[#5c6b63]" role="status">
          {error ? error : status === 'saved' ? 'Published to the live website.' : 'Changes go live as soon as you save.'}
        </p>
        <button
          type="button"
          onClick={onSave}
          disabled={disabled || status === 'saving' || status === 'loading'}
          className="inline-flex items-center justify-center rounded-lg bg-[#31734d] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#245538] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {label}
        </button>
      </div>
    </div>
  );
}

export function AdminNotice({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-xl border border-[#d5d0c6] bg-[#fffcf7] px-5 py-8 text-center">
      <h2 className="text-lg font-semibold text-[#1c241f]">{title}</h2>
      <p className="mt-2 text-sm text-[#5c6b63]">{body}</p>
    </div>
  );
}

export function PageIntro({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <header className="mb-8">
      <h1 className="text-2xl font-semibold tracking-tight text-[#1c241f]">{title}</h1>
      <p className="mt-2 max-w-[65ch] text-sm leading-6 text-[#5c6b63]">{children}</p>
    </header>
  );
}
