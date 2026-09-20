import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import type { Metadata } from "next";
import { getSiteContent } from "@/lib/content";
import { mediaSrc } from "@/lib/content-format";

export const metadata: Metadata = {
  title: "About Victoria Rose Hair & Beauty Salon | Mansfield Woodhouse, Nottinghamshire",
  description: "Discover Victoria Rose Hair & Beauty Salon in Mansfield Woodhouse, Nottinghamshire. Learn about our commitment to excellence, professional team, and dedication to providing exceptional hair and beauty services.",
  keywords: "Victoria Rose Salon about, hair salon Mansfield Woodhouse history, beauty salon Nottinghamshire story, salon values, professional team Mansfield",
  openGraph: {
    title: "About Victoria Rose Hair & Beauty Salon | Mansfield Woodhouse, Nottinghamshire",
    description: "Discover Victoria Rose Hair & Beauty Salon in Mansfield Woodhouse, Nottinghamshire. Learn about our commitment to excellence, professional team, and dedication to providing exceptional hair and beauty services.",
    images: [
      {
        url: "/Logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Victoria Rose Hair & Beauty Salon - Mansfield Woodhouse, Nottinghamshire"
      }
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Victoria Rose Hair & Beauty Salon | Mansfield Woodhouse, Nottinghamshire",
    description: "Discover Victoria Rose Hair & Beauty Salon in Mansfield Woodhouse, Nottinghamshire. Learn about our commitment to excellence, professional team, and dedication to providing exceptional hair and beauty services.",
    images: ["/Logo.jpeg"],
  },
  alternates: {
    canonical: "/about-us/",
  },
};

export default async function AboutUs() {
  const content = await getSiteContent();
  const about = content.pages.about;
  const media = content.media;

  return (
    <div className="min-h-screen">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <AnimatedSection
          className="absolute inset-0 z-0"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src={mediaSrc(media.about, "/about-us.jpg")}
            alt="Victoria Rose Hair and Beauty Salon interior in Mansfield Woodhouse, Nottinghamshire, showcasing our modern styling stations and welcoming atmosphere"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px"
            quality={90}
          />
          <div className="absolute inset-0 bg-black/40" />
        </AnimatedSection>
        <AnimatedSection
          className="relative z-10 text-center text-white px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-6xl md:text-8xl font-medium tracking-wide mb-4">{about.heroTitle}</h1>
          <p className="text-xl md:text-2xl font-light tracking-wider mb-8">{about.heroSubtitle}</p>
        </AnimatedSection>
      </section>

      <section className="py-20 px-4 bg-[#E1F6FF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 12 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900">{about.storyHeading}</h2>
              {about.storyParagraphs.map((paragraph, index) => (
                <p key={paragraph} className={`text-lg text-gray-700 ${index === about.storyParagraphs.length - 1 ? '' : 'mb-6'}`}>
                  {paragraph}
                </p>
              ))}
            </AnimatedSection>
            <AnimatedSection
              className="relative h-[400px]"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 12, delay: 0.3 }}
            >
              <Image
                src={mediaSrc(media.exterior, "/exterior.jpg")}
                alt="Victoria Rose Hair and Beauty Salon exterior in Mansfield Woodhouse, Nottinghamshire, featuring our welcoming storefront"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px"
                quality={90}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#357889]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection
              className="relative h-[400px] order-2 md:order-1"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 12, delay: 0.3 }}
            >
              <Image
                src={mediaSrc(media.hairInterior, "/hair_interior.jpg")}
                alt="Victoria Rose Hair and Beauty Salon's hair studio in Mansfield Woodhouse, Nottinghamshire, featuring our modern styling stations"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px"
                quality={90}
              />
            </AnimatedSection>
            <AnimatedSection
              className="order-1 md:order-2"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 12 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-white">{about.studioHeading}</h2>
              {about.studioParagraphs.map((paragraph, index) => (
                <p key={paragraph} className={`text-lg text-white/90 ${index === about.studioParagraphs.length - 1 ? '' : 'mb-6'}`}>
                  {paragraph}
                </p>
              ))}
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#E1F6FF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 12 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900">{about.suiteHeading}</h2>
              {about.suiteParagraphs.map((paragraph, index) => (
                <p key={paragraph} className={`text-lg text-gray-700 ${index === about.suiteParagraphs.length - 1 ? '' : 'mb-6'}`}>
                  {paragraph}
                </p>
              ))}
            </AnimatedSection>
            <AnimatedSection
              className="relative h-[400px]"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 12, delay: 0.3 }}
            >
              <Image
                src={mediaSrc(media.beautyInterior, "/beauty_interior.jpg")}
                alt="Victoria Rose Hair and Beauty Salon's beauty suite in Mansfield Woodhouse, Nottinghamshire, featuring our state-of-the-art treatment rooms"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px"
                quality={90}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="bg-[#357889] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">{about.valuesHeading}</h2>
            <p className="text-xl max-w-3xl mx-auto">{about.valuesIntro}</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {about.values.map((value, index) => (
              <AnimatedSection
                key={value.title}
                className="bg-[#7B67A1] p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.3, type: "spring", stiffness: 100, damping: 12 }}
              >
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-white/90">{value.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#E1F6FF]">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">{about.ctaHeading}</h2>
            <p className="text-xl mb-8 text-gray-700">{about.ctaBody}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#our-services"
                className="bg-[#31734D] hover:bg-[#285f3f] text-white font-bold py-3 px-8 rounded-full transition-colors"
              >
                Book Your Appointment
              </Link>
              <Link
                href="/contact"
                className="border-2 border-[#31734D] text-[#31734D] hover:bg-[#31734D]/10 font-bold py-3 px-8 rounded-full transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
