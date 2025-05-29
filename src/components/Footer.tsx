'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4">Victoria Rose Salon</h3>
            <p>25 Dunsil Road, Mansfield Woodhouse,<br />Nottinghamshire, NG19 7GD</p>
            <p className="mt-2">01623 624119</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
            <ul className="space-y-2">
              <li>Monday: Closed</li>
              <li>Tuesday: 09:00 – 17:00</li>
              <li>Wednesday: 09:00 – 17:00</li>
              <li>Thursday: 09:00 – 19:00</li>
              <li>Friday: 09:00 – 19:00</li>
              <li>Saturday: 08:30 – 16:00</li>
              <li>Sunday: Closed</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="hover:text-[#31734D] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/hair" className="hover:text-[#31734D] transition-colors">
                  Hair Services
                </Link>
              </li>
              <li>
                <Link href="/beauty" className="hover:text-[#31734D] transition-colors">
                  Beauty Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#31734D] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/booking-policies" className="hover:text-[#31734D] transition-colors">
                  Booking & Policies
                </Link>
              </li>
              <li>
                <Link
                  href="/#our-services"
                  className="hover:text-[#31734D] transition-colors"
                >
                  Book Online
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>
        <motion.div
          className="mt-8 pt-8 border-t border-gray-800 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="mb-2">Website developed by <Link href="https://mpdee.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-[#31734D] transition-colors">mpdee.co.uk</Link> © 2025. All rights reserved.</p>
          <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
            Privacy Policy
          </Link>
        </motion.div>
      </div>
    </footer>
  );
} 