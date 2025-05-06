'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <Image
                  src="/Logo.jpeg"
                  alt="Victoria Rose Salon"
                  width={150}
                  height={50}
                  className="h-12 w-auto"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[#B76E79] text-sm font-medium">
                Home
              </Link>
              <Link href="/hair" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[#B76E79] text-sm font-medium">
                Hair Services
              </Link>
              <Link href="/beauty" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[#B76E79] text-sm font-medium">
                Beauty Services
              </Link>
              <Link href="/reviews" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[#B76E79] text-sm font-medium">
                Reviews
              </Link>
              <div className="relative">
                <button
                  onClick={() => setIsMoreOpen(!isMoreOpen)}
                  className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[#B76E79] text-sm font-medium h-full"
                >
                  More...
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isMoreOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link
                      href="/about-us"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsMoreOpen(false)}
                    >
                      About Us
                    </Link>
                    <Link
                      href="/our-team"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsMoreOpen(false)}
                    >
                      Our Team
                    </Link>
                    <Link
                      href="/contact"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsMoreOpen(false)}
                    >
                      Contact
                    </Link>
                    <Link
                      href="/booking-policies"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsMoreOpen(false)}
                    >
                      Policies
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link
              href="https://www.fresha.com/a/victoria-rose-hair-and-beauty-salon-mansfield-woodhouse-25-dunsil-road-zehqr10n/all-offer?menu=true&pId=68802&rwg_token=AAiGsoYtsIq8DsbkAukp1_UAjvtdR2-CFw8OIjZLtDOnE93dSv-XanUBi8lMHl-tMd5f0uM_lrRUUFzO_xlJbcvmp30akDRuDQ%3D%3D&gei=-qkKaPTmN5m6hbIP3v-xoAg"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#31734D] hover:bg-[#285f3f] text-white px-4 py-2 rounded-full text-base font-medium transition-colors"
            >
              Book Online
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#31734D]"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden bg-white`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link
            href="/"
            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-[#31734D] hover:text-gray-800"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/hair"
            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-[#31734D] hover:text-gray-800"
            onClick={() => setIsMenuOpen(false)}
          >
            Hair Services
          </Link>
          <Link
            href="/beauty"
            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-[#31734D] hover:text-gray-800"
            onClick={() => setIsMenuOpen(false)}
          >
            Beauty Services
          </Link>
          <Link
            href="/reviews"
            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-[#31734D] hover:text-gray-800"
            onClick={() => setIsMenuOpen(false)}
          >
            Reviews
          </Link>
          <Link
            href="/about-us"
            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-[#31734D] hover:text-gray-800"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/our-team"
            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-[#31734D] hover:text-gray-800"
            onClick={() => setIsMenuOpen(false)}
          >
            Our Team
          </Link>
          <Link
            href="/contact"
            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-[#31734D] hover:text-gray-800"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/booking-policies"
            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-[#31734D] hover:text-gray-800"
            onClick={() => setIsMenuOpen(false)}
          >
            Policies
          </Link>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-4">
              <Link
                href="https://www.fresha.com/a/victoria-rose-hair-and-beauty-salon-mansfield-woodhouse-25-dunsil-road-zehqr10n/all-offer?menu=true&pId=68802&rwg_token=AAiGsoYtsIq8DsbkAukp1_UAjvtdR2-CFw8OIjZLtDOnE93dSv-XanUBi8lMHl-tMd5f0uM_lrRUUFzO_xlJbcvmp30akDRuDQ%3D%3D&gei=-qkKaPTmN5m6hbIP3v-xoAg"
                className="block w-full text-center bg-[#31734D] hover:bg-[#285f3f] text-white px-4 py-2 rounded-md text-base font-medium"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Online
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 