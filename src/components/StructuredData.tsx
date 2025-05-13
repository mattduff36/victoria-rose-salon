export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "name": "Victoria Rose Salon",
    "image": "https://victoria-rose-salon.vercel.app/hero-bg.jpeg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "25 Dunsil Road",
      "addressLocality": "Mansfield Woodhouse",
      "addressRegion": "Nottinghamshire",
      "postalCode": "NG19 7GD",
      "addressCountry": "UK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "53.1675146",
      "longitude": "-1.2062833"
    },
    "url": "https://victoria-rose-salon.vercel.app",
    "telephone": "01623 624119",
    "priceRange": "££",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Wednesday"],
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Thursday", "Friday"],
        "opens": "09:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:30",
        "closes": "16:00"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 