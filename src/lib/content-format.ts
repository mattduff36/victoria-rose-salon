import type { OpeningHours } from '@/lib/content-types';

export function formatHoursLine(entry: OpeningHours): string {
  if (entry.closed) return `${entry.label}: Closed`;
  return `${entry.label}: ${entry.open} – ${entry.close}`;
}

export function toInternationalPhone(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  if (digits.startsWith('44')) return `+${digits}`;
  if (digits.startsWith('0')) return `+44${digits.slice(1)}`;
  return phone;
}

export function mediaSrc(value: string | undefined, fallback: string): string {
  return value && value.trim() ? value : fallback;
}
