import fs from 'fs';
import path from 'path';
import * as XLSX from 'xlsx';

export interface Service {
  name: string;
  description: string;
  price: string;
  duration: string;
  category: string;
  subcategory: string;
  freshaId?: string;
  bookable?: boolean;
}

interface ServiceSheetRow {
  Category: string;
  Name: string;
  Description: string;
  Price: string | number;
  Duration: string | number;
  Subcategory: string;
  freshaId: string | number;
  Bookable: string;
  'Direct link'?: string;
}

const servicesWorkbookPath = path.join(process.cwd(), 'public', 'Services_copy_2026.xlsx');

function formatPrice(rawPrice: string | number): string {
  if (typeof rawPrice === 'number') return `£${rawPrice.toFixed(2)}`;

  const cleanedPrice = String(rawPrice || '').trim().replace(/�/g, '£');
  if (!cleanedPrice) return '';
  if (cleanedPrice.startsWith('£')) return cleanedPrice;

  const numericPrice = Number(cleanedPrice);
  if (!Number.isNaN(numericPrice)) return `£${numericPrice.toFixed(2)}`;

  return cleanedPrice;
}

function formatDuration(rawDuration: string | number): string {
  if (typeof rawDuration === 'number') return `${Math.round(rawDuration)}`;

  const cleanedDuration = String(rawDuration || '').trim();
  if (!cleanedDuration) return '';

  const numericDuration = Number(cleanedDuration);
  if (!Number.isNaN(numericDuration)) return `${Math.round(numericDuration)}`;

  return cleanedDuration;
}

function getFreshaId(row: ServiceSheetRow): string | undefined {
  const directLink = String(row['Direct link'] || '').trim();
  if (directLink) {
    try {
      const url = new URL(directLink);
      const rawOfferItem = url.searchParams.get('oiid');
      const decodedOfferItem = rawOfferItem ? decodeURIComponent(rawOfferItem) : '';
      const matchedId = decodedOfferItem.match(/sv:(\d+)/)?.[1];
      if (matchedId) return matchedId;
    } catch {
      // Ignore malformed URLs and continue with freshaId cell value.
    }
  }

  const rawFreshaId = String(row.freshaId || '').trim();
  if (!rawFreshaId) return undefined;

  const numericFreshaId = Number(rawFreshaId);
  if (!Number.isNaN(numericFreshaId)) return `${Math.trunc(numericFreshaId)}`;

  const matchedDigits = rawFreshaId.match(/\d+/)?.[0];
  return matchedDigits || rawFreshaId;
}

function isBookable(rawBookable: string): boolean {
  const normalizedBookable = String(rawBookable || '').trim().toLowerCase();
  if (!normalizedBookable) return true;
  return normalizedBookable !== 'no';
}

export async function getServices(): Promise<Service[]> {
  const workbookContents = fs.readFileSync(servicesWorkbookPath);
  const workbook = XLSX.read(workbookContents, { type: 'buffer' });
  const servicesSheet = workbook.Sheets.Services || workbook.Sheets[workbook.SheetNames[0]];
  if (!servicesSheet) return [];

  const rows = XLSX.utils.sheet_to_json<ServiceSheetRow>(servicesSheet, { defval: '' });

  return rows
    .filter((row) => row.Category && row.Name)
    .map((row) => ({
      name: String(row.Name || '').trim(),
      description: String(row.Description || '').trim(),
      price: formatPrice(row.Price),
      duration: formatDuration(row.Duration),
      category: String(row.Category || '').trim().toLowerCase(),
      subcategory: String(row.Subcategory || '').trim() || 'Other',
      freshaId: getFreshaId(row),
      bookable: isBookable(row.Bookable),
    }));
}

export function groupServicesBySubcategory(services: Service[]) {
  const grouped = services.reduce((acc, service) => {
    const category = service.category;
    const subcategory = service.subcategory || 'Other';
    
    if (!acc[category]) {
      acc[category] = {};
    }
    if (!acc[category][subcategory]) {
      acc[category][subcategory] = [];
    }
    
    acc[category][subcategory].push(service);
    return acc;
  }, {} as Record<string, Record<string, Service[]>>);
  
  return grouped;
} 