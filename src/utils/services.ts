import { getServices as getGoogleSheetServices } from '@/lib/google-api';
import { promises as fs } from 'fs';
import path from 'path';

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

export async function getServices(): Promise<Service[]> {
  const services = await getGoogleSheetServices();
  
  return services.map(service => ({
    name: service.name,
    description: service.description,
    price: service.price,
    duration: service.duration,
    category: service.category.toLowerCase(),
    subcategory: service.subcategory,
    freshaId: service.freshaId,
    bookable: service.bookableRaw ? service.bookableRaw.toLowerCase() !== 'no' : true
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