import { getSiteContent, groupServicesBySubcategory } from '@/lib/content';
import type { ServiceItem } from '@/lib/content-types';

export type Service = ServiceItem;

export async function getServices(): Promise<Service[]> {
  const content = await getSiteContent();
  return [...content.services].sort((left, right) => left.sortOrder - right.sortOrder);
}

export { groupServicesBySubcategory };
