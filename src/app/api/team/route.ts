import { getTeamMembers } from '@/lib/google-api';
import { NextResponse } from 'next/server';

// Revalidate the cache every hour
export const revalidate = 3600;

export async function GET() {
  try {
    const teamMembers = await getTeamMembers();
    return NextResponse.json(teamMembers, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Error in team API route:', error);
    return NextResponse.json(
      { error: 'Failed to fetch team members' },
      { status: 500 }
    );
  }
} 