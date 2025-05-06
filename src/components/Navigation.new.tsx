'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="relative w-32 h-12" onClick={closeMenu}>
                <Image
                  src="/Logo.jpeg"
                  alt="Victoria Rose Salon Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </Link>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
              <Link href="/" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[#31734D]" onClick={closeMenu}>
                Home
              </Link>
              <Link href="/hair" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[#31734D]" onClick={closeMenu}>
                Hair
              </Link>
              <Link href="/beauty" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[#31734D]" onClick={closeMenu}>
                Beauty
              </Link>
              <Link href="/reviews" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[#31734D]" onClick={closeMenu}>
                Reviews
              </Link>
              <Link href="/about-us" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[#31734D]" onClick={closeMenu}>
                About Us
              </Link>
              <Link href="/our-team" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[#31734D]" onClick={closeMenu}>
                Our Team
              </Link>
              <Link href="/contact" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[#31734D]" onClick={closeMenu}>
                Contact
              </Link>
              <Link href="/booking-policies" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[#31734D]" onClick={closeMenu}>
                Policies
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link 
              href="https://www.fresha.com/a/victoria-rose-hair-and-beauty-salon-mansfield-woodhouse-25-dunsil-road-zehqr10n/all-offer?menu=true&pId=68802&rwg_token=AAiGsoYtsIq8DsbkAukp1_UAjvtdR2-CFw8OIjZLtDOnE93dSv-XanUBi8lMHl-tMd5f0uM_lrRUUFzO_xlJbcvmp30akDRuDQ%3D%3D&gei=-qkKaPTmN5m6hbIP3v-xoAg" 
              className="bg-[#31734D] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#285f3f]"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Book Now
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#31734D]"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden bg-white`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link href="/" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-[#31734D]" onClick={closeMenu}>
            Home
          </Link>
          <Link href="/hair" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-[#31734D]" onClick={closeMenu}>
            Hair
          </Link>
          <Link href="/beauty" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-[#31734D]" onClick={closeMenu}>
            Beauty
          </Link>
          <Link href="/reviews" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-[#31734D]" onClick={closeMenu}>
            Reviews
          </Link>
          <Link href="/about-us" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-[#31734D]" onClick={closeMenu}>
            About Us
          </Link>
          <Link href="/our-team" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-[#31734D]" onClick={closeMenu}>
            Our Team
          </Link>
          <Link href="/contact" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-[#31734D]" onClick={closeMenu}>
            Contact
          </Link>
          <Link href="/booking-policies" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-[#31734D]" onClick={closeMenu}>
            Policies
          </Link>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-4">
              <Link 
                href="https://www.fresha.com/a/victoria-rose-hair-and-beauty-salon-mansfield-woodhouse-25-dunsil-road-zehqr10n/all-offer?menu=true&pId=68802&rwg_token=AAiGsoYtsIq8DsbkAukp1_UAjvtdR2-CFw8OIjZLtDOnE93dSv-XanUBi8lMHl-tMd5f0uM_lrRUUFzO_xlJbcvmp30akDRuDQ%3D%3D&gei=-qkKaPTmN5m6hbIP3v-xoAg" 
                className="block w-full text-center bg-[#31734D] text-white px-4 py-2 rounded-md text-base font-medium hover:bg-[#285f3f]"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 