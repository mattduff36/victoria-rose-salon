'use client';

import { useEffect } from 'react';

export default function StructuredData() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'HairSalon',
      name: 'Victoria Rose Hair and Beauty Salon',
      image: 'https://victoria-rose-salon.vercel.app/Logo.jpeg',
      '@id': 'https://victoria-rose-salon.vercel.app',
      url: 'https://victoria-rose-salon.vercel.app',
      telephone: '+441623627777',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1-3 Church Street',
        addressLocality: 'Mansfield Woodhouse',
        addressRegion: 'Nottinghamshire',
        postalCode: 'NG19 8AH',
        addressCountry: 'GB'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 53.1647,
        longitude: -1.1939
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '17:30'
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '09:00',
          closes: '16:00'
        }
      ],
      priceRange: '££',
      description: 'Professional hair and beauty services in Mansfield Woodhouse, Nottinghamshire. Offering a wide range of treatments including haircuts, styling, coloring, and beauty services.',
      areaServed: {
        '@type': 'City',
        name: 'Mansfield Woodhouse'
      }
    };

    // Remove any existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const script = document.querySelector('script[type="application/ld+json"]');
      if (script) {
        script.remove();
      }
    };
  }, []);

  return null;
} 