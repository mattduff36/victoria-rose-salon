import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import type { Metadata } from "next";
import { getSiteContent } from "@/lib/content";
import { mediaSrc } from "@/lib/content-format";

export const metadata: Metadata = {
  title: "Victoria Rose Salon | Hair & Beauty in Mansfield Woodhouse, Nottinghamshire",
  description: "Experience exceptional hair and beauty services at Victoria Rose Salon in Mansfield Woodhouse, Nottinghamshire. Expert stylists, premium treatments, and a welcoming atmosphere. Book your appointment today!",
  keywords: "hair salon Mansfield Woodhouse, beauty salon Nottinghamshire, hair styling Mansfield, beauty treatments Nottinghamshire, professional stylists Victoria Rose Salon",
  openGraph: {
    title: "Victoria Rose Salon | Hair & Beauty in Mansfield Woodhouse, Nottinghamshire",
    description: "Experience exceptional hair and beauty services at Victoria Rose Salon in Mansfield Woodhouse, Nottinghamshire. Expert stylists, premium treatments, and a welcoming atmosphere.",
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
    title: "Victoria Rose Salon | Hair & Beauty in Mansfield Woodhouse, Nottinghamshire",
    description: "Experience exceptional hair and beauty services at Victoria Rose Salon in Mansfield Woodhouse, Nottinghamshire. Expert stylists, premium treatments, and a welcoming atmosphere.",
    images: ["/hero-bg.jpeg"],
  },
  alternates: {
    canonical: "/",
  },
};

// Add revalidation configuration
export default async function Home() {
  const { pages, media } = await getSiteContent();
  const home = pages.home;

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src={mediaSrc(media.hero, "/hero-bg.jpeg")}
          alt="Victoria Rose Hair and Beauty Salon interior in Mansfield Woodhouse, showcasing our modern styling stations and welcoming atmosphere"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-7xl md:text-9xl tracking-wide mb-4">
            {home.heroTitle}
          </h1>
          <h2 className="text-3xl md:text-5xl mb-4">
            {home.heroSubtitle}
          </h2>
          <p className="text-base md:text-lg font-normal">
            {home.heroLocation}
          </p>
        </div>
      </div>

      {/* Services Preview Section */}
      <section id="our-services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {home.servicesHeading}
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: home.hairCardTitle,
                description: home.hairCardDescription,
                link: "/hair"
              },
              {
                title: home.beautyCardTitle,
                description: home.beautyCardDescription,
                link: "/beauty"
              }
            ].map((service, index) => (
              <AnimatedSection
                key={service.title}
                className="bg-[#7B67A1] text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:bg-[#6a5989]"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.3,
                  type: "spring",
                  stiffness: 100,
                  damping: 12
                }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                href={service.link}
              >
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="mb-4 text-white/90">{service.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="bg-[#357889] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">{home.welcomeHeading}</h2>
              {home.welcomeParagraphs.map((paragraph, index) => (
                <p key={paragraph} className={`text-lg ${index === home.welcomeParagraphs.length - 1 ? 'mb-8' : 'mb-6'}`}>
                  {paragraph}
                </p>
              ))}
              <AnimatedSection
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/about-us"
                  className="bg-white text-[#357889] hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors inline-block"
                >
                  {home.welcomeCta}
                </Link>
              </AnimatedSection>
            </AnimatedSection>
            <AnimatedSection 
              className="relative h-[400px]"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 12,
                delay: 0.3
              }}
            >
              <Image
                src={mediaSrc(media.beautyInterior, "/beauty_interior.jpg")}
                alt="Victoria Rose Salon's beauty treatment area in Mansfield Woodhouse, featuring our state-of-the-art equipment and relaxing environment"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {home.ctaHeading}
          </AnimatedSection>
          <AnimatedSection
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {home.ctaBody}
          </AnimatedSection>
          <AnimatedSection
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <AnimatedSection
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="#our-services"
                className="bg-[#31734D] hover:bg-[#285f3f] text-white font-bold py-3 px-8 rounded-full transition-colors inline-block"
              >
                {home.ctaPrimary}
              </Link>
            </AnimatedSection>
            <AnimatedSection
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/contact" 
                className="border-2 border-[#31734D] text-[#31734D] hover:bg-[#31734D]/10 font-bold py-3 px-8 rounded-full transition-colors inline-block"
              >
                {home.ctaSecondary}
              </Link>
            </AnimatedSection>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}