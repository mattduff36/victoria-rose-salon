import type { SiteDetails } from '@/lib/content-types';
import { toInternationalPhone } from '@/lib/content-format';
import { SITE_URL } from '@/lib/site';

export default function StructuredData({ site }: { site: SiteDetails }) {
  const openDays = site.hours.filter((entry) => !entry.closed);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HairSalon',
    name: 'Victoria Rose Hair and Beauty Salon',
    image: `${SITE_URL}/Logo.jpeg`,
    '@id': SITE_URL,
    url: SITE_URL,
    telephone: toInternationalPhone(site.phone),
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.addressLines[0] || '',
      addressLocality: site.addressLines[1] || 'Mansfield Woodhouse',
      addressRegion: 'Nottinghamshire',
      postalCode: site.addressLines[site.addressLines.length - 1] || '',
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 53.1647,
      longitude: -1.1939,
    },
    openingHoursSpecification: openDays.map((entry) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: entry.label,
      opens: entry.open,
      closes: entry.close,
    })),
    priceRange: '££',
    description:
      'Professional hair and beauty services in Mansfield Woodhouse, Nottinghamshire. Offering a wide range of treatments including haircuts, styling, coloring, and beauty services.',
    areaServed: {
      '@type': 'City',
      name: 'Mansfield Woodhouse',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
