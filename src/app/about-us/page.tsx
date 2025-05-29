import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import type { Metadata } from "next";

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
    canonical: "https://victoria-rose-salon.vercel.app/about-us",
  },
};

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <AnimatedSection 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src="/about-us.jpg"
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
          <h1 className="text-6xl md:text-8xl font-medium tracking-wide mb-4">About Us</h1>
          <p className="text-xl md:text-2xl font-light tracking-wider mb-8">Your Premier Hair and Beauty Destination in Mansfield Woodhouse</p>
        </AnimatedSection>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 bg-[#E1F6FF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 12
              }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
              <p className="text-lg mb-6 text-gray-700">
                Victoria Rose Hair & Beauty Salon was founded with a vision to create a space where clients could experience 
                exceptional hair and beauty services in a welcoming, professional environment.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                Located in the heart of Mansfield Woodhouse, Nottinghamshire, our salon has become a trusted destination 
                for those seeking premium hair and beauty treatments delivered by experienced professionals.
              </p>
              <p className="text-lg text-gray-700">
                We pride ourselves on staying at the forefront of industry trends and techniques, 
                ensuring our clients receive the most current and effective treatments available in the Mansfield area.
              </p>
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
                src="/exterior.jpg"
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

      {/* Hair Interior Section */}
      <section className="py-20 px-4 bg-[#357889]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection 
              className="relative h-[400px] order-2 md:order-1"
              initial={{ opacity: 0, x: -100 }}
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
                src="/hair_interior.jpg"
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
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 12
              }}
            >
              <h2 className="text-4xl font-bold mb-6 text-white">Our Hair Studio</h2>
              <p className="text-lg mb-6 text-white/90">
                Step into our modern hair studio in Mansfield Woodhouse, where creativity meets expertise. Our spacious and well-equipped 
                area is designed to provide the perfect environment for all your hair care needs.
              </p>
              <p className="text-lg text-white/90">
                From cutting-edge styling to classic looks, our hair professionals are dedicated to bringing 
                your vision to life in a comfortable and inspiring space in the heart of Nottinghamshire.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Beauty Interior Section */}
      <section className="py-20 px-4 bg-[#E1F6FF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 12
              }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Beauty Suite</h2>
              <p className="text-lg mb-6 text-gray-700">
                Discover our tranquil beauty suite in Mansfield Woodhouse, a sanctuary designed for relaxation and rejuvenation. 
                Our dedicated beauty area offers a peaceful retreat for all your beauty treatments.
              </p>
              <p className="text-lg text-gray-700">
                Whether you're here for a facial, massage, or any of our beauty services, our serene 
                environment ensures a truly pampering experience in the heart of Nottinghamshire.
              </p>
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
                src="/beauty_interior.jpg"
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

      {/* Our Values Section */}
      <section className="bg-[#357889] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl max-w-3xl mx-auto">
              At Victoria Rose Salon, we're committed to excellence in everything we do.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "We strive for excellence in every service we provide, ensuring each client leaves feeling beautiful and confident."
              },
              {
                title: "Professionalism",
                description: "Our team of experienced professionals is dedicated to delivering the highest standard of service in a welcoming environment."
              },
              {
                title: "Innovation",
                description: "We continuously update our skills and techniques to offer the latest trends and treatments in hair and beauty."
              }
            ].map((value, index) => (
              <AnimatedSection
                key={value.title}
                className="bg-[#7B67A1] p-6 rounded-lg shadow-lg"
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
              >
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-white/90">{value.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#E1F6FF]">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Ready to Experience Victoria Rose?</h2>
            <p className="text-xl mb-8 text-gray-700">
              Book your appointment today and discover why we're Mansfield's premier hair and beauty destination.
            </p>
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