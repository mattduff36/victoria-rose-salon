import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import type { Metadata } from "next";
import { getSiteContent } from "@/lib/content";
import { formatHoursLine, mediaSrc } from "@/lib/content-format";

export const metadata: Metadata = {
  title: "Contact Victoria Rose Salon | Mansfield Woodhouse",
  description: "Get in touch with Victoria Rose Salon in Mansfield Woodhouse. Book your hair or beauty appointment, find our location, or contact us for any inquiries. We're here to help!",
  keywords: "Victoria Rose Salon contact, hair salon Mansfield Woodhouse booking, beauty salon Mansfield Woodhouse appointment, salon location Mansfield Woodhouse, contact details",
  openGraph: {
    title: "Contact Victoria Rose Salon | Mansfield Woodhouse",
    description: "Get in touch with Victoria Rose Salon in Mansfield Woodhouse. Book your hair or beauty appointment, find our location, or contact us for any inquiries.",
    images: [
      {
        url: "/hero-bg.jpeg",
        width: 1200,
        height: 630,
        alt: "Victoria Rose Salon Interior"
      }
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Victoria Rose Salon | Mansfield Woodhouse",
    description: "Get in touch with Victoria Rose Salon in Mansfield Woodhouse. Book your hair or beauty appointment, find our location, or contact us for any inquiries.",
    images: ["/hero-bg.jpeg"],
  },
  alternates: {
    canonical: "https://victoria-rose-salon.vercel.app/contact",
  },
};

export default async function Contact() {
  const content = await getSiteContent();
  const { site, pages, media } = content;
  const copy = pages.contact;

  return (
    <div>
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <AnimatedSection
          className="absolute inset-0 z-0"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src={mediaSrc(media.hero, "/hero-bg.jpeg")}
            alt="Victoria Rose Salon Interior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </AnimatedSection>
        <AnimatedSection
          className="relative z-10 text-center text-white px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{copy.heroTitle}</h1>
          <p className="text-xl md:text-2xl">{copy.heroSubtitle}</p>
        </AnimatedSection>
      </section>

      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">{copy.infoHeading}</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Address</h3>
                  <p className="text-gray-600">
                    {site.addressLines.map((line) => (
                      <span key={line}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Phone</h3>
                  <p className="text-gray-600">
                    <a href={site.phoneHref} className="hover:text-black transition-colors">
                      {site.phone}
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
                  <div className="text-gray-600">
                    {site.hours.map((entry) => (
                      <p key={entry.day}>{formatHoursLine(entry)}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">{copy.bookingHeading}</h2>
              <p className="text-gray-600 mb-6">{copy.bookingBody}</p>
              <AnimatedSection whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/#our-services"
                  className="bg-[#31734D] hover:bg-[#285f3f] text-white font-bold py-3 px-8 rounded-full transition-colors inline-block"
                >
                  Book Online
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{copy.mapHeading}</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={site.mapEmbedUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
