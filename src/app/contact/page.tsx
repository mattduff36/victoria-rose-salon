'use client';

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Victoria Rose Salon | Book Your Appointment",
  description: "Get in touch with Victoria Rose Salon in Mansfield. Book your hair or beauty appointment, find our location, or contact us for any inquiries. We're here to help!",
  keywords: "Victoria Rose Salon contact, hair salon Mansfield booking, beauty salon Mansfield appointment, salon location, contact details",
  openGraph: {
    title: "Contact Victoria Rose Salon | Book Your Appointment",
    description: "Get in touch with Victoria Rose Salon in Mansfield. Book your hair or beauty appointment, find our location, or contact us for any inquiries. We're here to help!",
    images: [
      {
        url: "/exterior.jpg",
        width: 1200,
        height: 630,
        alt: "Victoria Rose Salon Exterior"
      }
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Victoria Rose Salon | Book Your Appointment",
    description: "Get in touch with Victoria Rose Salon in Mansfield. Book your hair or beauty appointment, find our location, or contact us for any inquiries. We're here to help!",
    images: ["/exterior.jpg"],
  },
  alternates: {
    canonical: "https://victoria-rose-salon.vercel.app/contact",
  },
};

export default function Contact() {
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
            src="/exterior.jpg"
            alt="Victoria Rose Salon Exterior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </AnimatedSection>
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <AnimatedSection 
            className="text-center text-white px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="text-6xl md:text-8xl font-medium tracking-wide mb-4">Contact Us</h1>
            <p className="text-xl md:text-2xl font-light tracking-wider mb-8">Get in Touch with Victoria Rose</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 bg-[#E1F6FF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Details */}
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
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
                <p className="text-lg mb-8">
                  We'd love to hear from you. Contact us for appointments, inquiries, or any questions you may have.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">Address</h3>
                  <p>25 Dunsil Road</p>
                  <p>Mansfield Woodhouse</p>
                  <p>Nottinghamshire, NG19 7GD</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Phone</h3>
                  <p>01623 624119</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Opening Hours</h3>
                  <ul className="space-y-1">
                    <li>Monday: Closed</li>
                    <li>Tuesday: 09:00 – 17:00</li>
                    <li>Wednesday: 09:00 – 17:00</li>
                    <li>Thursday: 09:00 – 19:00</li>
                    <li>Friday: 09:00 – 19:00</li>
                    <li>Saturday: 08:30 – 16:00</li>
                    <li>Sunday: Closed</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Follow Us</h3>
                  <Link
                    href="https://www.facebook.com/victoriarosehairsalon/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#31734D] hover:text-[#285f3f] font-medium"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                    Victoria Rose Hair Salon
                  </Link>
                </div>
              </div>

              <div className="pt-4">
                <Link 
                  href="https://www.fresha.com/a/victoria-rose-hair-and-beauty-salon-mansfield-woodhouse-25-dunsil-road-zehqr10n/all-offer?menu=true&pId=68802&rwg_token=AAiGsoYtsIq8DsbkAukp1_UAjvtdR2-CFw8OIjZLtDOnE93dSv-XanUBi8lMHl-tMd5f0uM_lrRUUFzO_xlJbcvmp30akDRuDQ%3D%3D&gei=-qkKaPTmN5m6hbIP3v-xoAg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#31734D] hover:bg-[#285f3f] text-white font-bold py-3 px-8 rounded-full transition-colors inline-block"
                >
                  Book an Appointment
                </Link>
              </div>
            </AnimatedSection>

            {/* Map Section */}
            <AnimatedSection
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 12
              }}
              className="bg-white p-8 rounded-lg shadow-lg h-full"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Find Us</h3>
              <p className="text-gray-700 mb-6">
                Located in the heart of Mansfield Woodhouse
              </p>
              <div className="h-[calc(100%-8rem)] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2389.4346791657736!2d-1.2062833!3d53.1675146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487995e4b3cd2c8b%3A0x8f3b3a1b6b7b3b3b!2s25%20Dunsil%20Rd%2C%20Mansfield%20Woodhouse%2C%20Mansfield%20NG19%207GD!5e0!3m2!1sen!2suk!4v1629788000000!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
} 