import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import type { Metadata } from "next";

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

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <AnimatedSection 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src="/hero-bg.jpeg"
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl md:text-2xl">Get in touch with Victoria Rose</p>
        </AnimatedSection>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Address</h3>
                  <p className="text-gray-600">
                    25 Dunsil Road<br />
                    Mansfield Woodhouse<br />
                    Nottinghamshire<br />
                    NG19 7GD
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Phone</h3>
                  <p className="text-gray-600">
                    <a href="tel:01623624119" className="hover:text-black transition-colors">
                      01623 624119
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
                  <div className="text-gray-600">
                    <p>Tuesday - Wednesday: 9:00 AM - 5:00 PM</p>
                    <p>Thursday - Friday: 9:00 AM - 7:00 PM</p>
                    <p>Saturday: 8:30 AM - 4:00 PM</p>
                    <p>Sunday - Monday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Book Your Appointment</h2>
              <p className="text-gray-600 mb-6">
                Ready to experience the Victoria Rose difference? Book your appointment online or give us a call.
              </p>
              <AnimatedSection
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="https://www.fresha.com/a/victoria-rose-hair-and-beauty-salon-mansfield-woodhouse-25-dunsil-road-zehqr10n/all-offer?menu=true&pId=68802&rwg_token=AAiGsoYtsIq8DsbkAukp1_UAjvtdR2-CFw8OIjZLtDOnE93dSv-XanUBi8lMHl-tMd5f0uM_lrRUUFzO_xlJbcvmp30akDRuDQ%3D%3D&gei=-qkKaPTmN5m6hbIP3v-xoAg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#31734D] hover:bg-[#285f3f] text-white font-bold py-3 px-8 rounded-full transition-colors inline-block"
                >
                  Book Online
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Find Us</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2394.1234567890123!2d-1.2062833!3d53.1675146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDEwJzAzLjAiTiAxwrAxMicyMi42Ilc!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
} 