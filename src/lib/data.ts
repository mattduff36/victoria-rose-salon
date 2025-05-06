import { cache } from 'react';

// Get the base URL, preferring Vercel's URL in production
const getBaseUrl = () => {
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
};

// Cache the fetch requests
export const getServices = cache(async () => {
  const res = await fetch(`${getBaseUrl()}/api/services`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch services');
  }
  return res.json();
});

export const getTeamMembers = cache(async () => {
  const res = await fetch(`${getBaseUrl()}/api/team`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch team members');
  }
  return res.json();
}); 