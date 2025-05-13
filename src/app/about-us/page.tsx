import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Victoria Rose Salon | Our Story & Values",
  description: "Discover the story behind Victoria Rose Salon in Mansfield. Learn about our commitment to excellence, professional team, and dedication to providing exceptional hair and beauty services.",
  keywords: "Victoria Rose Salon about, hair salon Mansfield history, beauty salon Mansfield story, salon values, professional team",
  openGraph: {
    title: "About Victoria Rose Salon | Our Story & Values",
    description: "Discover the story behind Victoria Rose Salon in Mansfield. Learn about our commitment to excellence, professional team, and dedication to providing exceptional hair and beauty services.",
    images: [
      {
        url: "/hero-bg.jpeg",
        width: 1200,
        height: 630,
        alt: "Victoria Rose Salon Team"
      }
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Victoria Rose Salon | Our Story & Values",
    description: "Discover the story behind Victoria Rose Salon in Mansfield. Learn about our commitment to excellence, professional team, and dedication to providing exceptional hair and beauty services.",
    images: ["/hero-bg.jpeg"],
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
            alt="Victoria Rose Salon Interior"
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
          <h1 className="text-6xl md:text-8xl font-medium tracking-wide mb-4">About Us</h1>
          <p className="text-xl md:text-2xl font-light tracking-wider mb-8">Your Premier Hair and Beauty Destination</p>
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
                Victoria Rose Salon was founded with a vision to create a space where clients could experience 
                exceptional hair and beauty services in a welcoming, professional environment.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                Located in the heart of Mansfield Woodhouse, our salon has become a trusted destination 
                for those seeking premium hair and beauty treatments delivered by experienced professionals.
              </p>
              <p className="text-lg text-gray-700">
                We pride ourselves on staying at the forefront of industry trends and techniques, 
                ensuring our clients receive the most current and effective treatments available.
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
                alt="Victoria Rose Salon Exterior"
                fill
                className="object-cover rounded-lg"
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
                alt="Hair Services"
                fill
                className="object-cover rounded-lg"
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
                Step into our modern hair studio, where creativity meets expertise. Our spacious and well-equipped 
                area is designed to provide the perfect environment for all your hair care needs.
              </p>
              <p className="text-lg text-white/90">
                From cutting-edge styling to classic looks, our hair professionals are dedicated to bringing 
                your vision to life in a comfortable and inspiring space.
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
                Discover our tranquil beauty suite, a sanctuary designed for relaxation and rejuvenation. 
                Our dedicated beauty area offers a peaceful retreat for all your beauty treatments.
              </p>
              <p className="text-lg text-gray-700">
                Whether you're here for a facial, massage, or any of our beauty services, our serene 
                environment ensures a truly pampering experience.
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
                alt="Beauty Services"
                fill
                className="object-cover rounded-lg"
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
                href="https://www.fresha.com/a/victoria-rose-hair-and-beauty-salon-mansfield-woodhouse-25-dunsil-road-zehqr10n/all-offer?menu=true&pId=68802&rwg_token=AAiGsoYtsIq8DsbkAukp1_UAjvtdR2-CFw8OIjZLtDOnE93dSv-XanUBi8lMHl-tMd5f0uM_lrRUUFzO_xlJbcvmp30akDRuDQ%3D%3D&gei=-qkKaPTmN5m6hbIP3v-xoAg"
                target="_blank"
                rel="noopener noreferrer"
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