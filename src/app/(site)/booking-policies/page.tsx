import Image from "next/image";
import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import { getSiteContent } from "@/lib/content";
import { mediaSrc } from "@/lib/content-format";

export const metadata: Metadata = {
  alternates: {
    canonical: "/booking-policies/",
  },
};

export default async function BookingPolicies() {
  const content = await getSiteContent();
  const copy = content.pages.policies;

  return (
    <div className="min-h-screen">
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <AnimatedSection
          className="absolute inset-0 z-0"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src={mediaSrc(content.media.hero, "/hero-bg.jpeg")}
            alt="Victoria Rose Salon Booking Information"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </AnimatedSection>
        <AnimatedSection
          className="relative z-10 text-center text-white px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-6xl md:text-8xl font-medium tracking-wide mb-4">{copy.heroTitle}</h1>
          <p className="text-xl md:text-2xl font-light tracking-wider mb-8">{copy.heroSubtitle}</p>
        </AnimatedSection>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {copy.sections.map((section, index) => (
              <AnimatedSection
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-[#31734D]">{section.heading}</h2>
                <div className="space-y-4 text-gray-700">
                  {section.body.split(/\n\n+/).map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets && section.bullets.length > 0 ? (
                    <ul className="list-disc pl-6 space-y-1">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
