import { getServices } from '@/lib/google-api';
import { NextResponse } from 'next/server';

// Revalidate the cache every hour
export const revalidate = 3600;

export async function GET() {
  try {
    const services = await getServices();
    return NextResponse.json(services, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Error in services API route:', error);
    return NextResponse.json(
      { error: 'Failed to fetch services' },
      { status: 500 }
    );
  }
} 