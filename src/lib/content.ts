import 'server-only';
import { cache } from 'react';
import { readFile } from 'fs/promises';
import path from 'path';
import { CONTENT_PUBLIC_ID, getCloudinary, getContentJsonUrl } from '@/lib/cloudinary';
import {
  type ServiceItem,
  type SiteContent,
  validateSiteContent,
} from '@/lib/content-types';

const seedPath = path.join(process.cwd(), 'data', 'content.seed.json');

export async function readSeedContent(): Promise<SiteContent> {
  const raw = await readFile(seedPath, 'utf8');
  return validateSiteContent(JSON.parse(raw));
}

async function fetchCloudinaryContent(): Promise<SiteContent> {
  const url = `${getContentJsonUrl()}?t=${Date.now()}`;
  const response = await fetch(url, {
    cache: 'no-store',
    headers: { Accept: 'application/json' },
  });
  if (!response.ok) {
    throw new Error(`Cloudinary content HTTP ${response.status}`);
  }
  return validateSiteContent(await response.json());
}

async function fetchCloudinaryContentByApi(): Promise<SiteContent> {
  const resource = await getCloudinary().api.resource(CONTENT_PUBLIC_ID, {
    resource_type: 'raw',
  });
  const response = await fetch(`${resource.secure_url}?v=${resource.version}`, {
    cache: 'no-store',
    headers: { Accept: 'application/json' },
  });
  if (!response.ok) {
    throw new Error(`Cloudinary content HTTP ${response.status}`);
  }
  return validateSiteContent(await response.json());
}

export const getSiteContent = cache(async (): Promise<SiteContent> => {
  try {
    return await fetchCloudinaryContentByApi();
  } catch (error) {
    try {
      return await fetchCloudinaryContent();
    } catch (fallbackError) {
      console.error('Using seed content; Cloudinary read failed', error, fallbackError);
      return readSeedContent();
    }
  }
});

export async function getFreshSiteContent(): Promise<SiteContent> {
  try {
    return await fetchCloudinaryContentByApi();
  } catch {
    try {
      return await fetchCloudinaryContent();
    } catch {
      return readSeedContent();
    }
  }
}

export function sortTeam(team: SiteContent['team']): SiteContent['team'] {
  return [...team].sort((left, right) => {
    if (left.isOwner !== right.isOwner) return left.isOwner ? -1 : 1;
    if (left.sortOrder !== right.sortOrder) return left.sortOrder - right.sortOrder;
    return left.name.localeCompare(right.name);
  });
}

export function groupServicesBySubcategory(services: ServiceItem[]) {
  return services.reduce((grouped, service) => {
    const category = service.category || 'other';
    const subcategory = service.subcategory || 'Other';
    if (!grouped[category]) grouped[category] = {};
    if (!grouped[category][subcategory]) grouped[category][subcategory] = [];
    grouped[category][subcategory].push(service);
    return grouped;
  }, {} as Record<string, Record<string, ServiceItem[]>>);
}

export { formatHoursLine, mediaSrc, toInternationalPhone } from '@/lib/content-format';
