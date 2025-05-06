'use client';

import { Service } from "@/utils/services";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

interface ExpandableServiceSectionProps {
  subcategory: string;
  services: Service[];
  index: number;
}

// Color mapping for different subcategories using purple colors
const subcategoryColors: Record<string, string> = {
  'Haircuts': 'bg-[#7B67A1]', // Primary purple
  'Colouring': 'bg-[#7B67A1]', // Same purple
  'Styling': 'bg-[#7B67A1]', // Same purple
  'Nails': 'bg-[#7B67A1]', // Same purple
  'Skin Care': 'bg-[#7B67A1]', // Same purple
  'Hair Removal': 'bg-[#7B67A1]', // Same purple
  'Eyelashes': 'bg-[#7B67A1]', // Same purple
};

export default function ExpandableServiceSection({ subcategory, services, index }: ExpandableServiceSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getBookingLink = (freshaId: string | undefined) => {
    const defaultLink = 'https://www.fresha.com/a/victoria-rose-hair-and-beauty-salon-mansfield-woodhouse-25-dunsil-road-zehqr10n/all-offer?menu=true&pId=68802&rwg_token=AAiGsoYtsIq8DsbkAukp1_UAjvtdR2-CFw8OIjZLtDOnE93dSv-XanUBi8lMHl-tMd5f0uM_lrRUUFzO_xlJbcvmp30akDRuDQ%3D%3D&gei=-qkKaPTmN5m6hbIP3v-xoAg';
    
    try {
      if (!freshaId) return defaultLink;
      
      // Construct the base URL
      const baseUrl = 'https://www.fresha.com/a/victoria-rose-hair-and-beauty-salon-mansfield-woodhouse-25-dunsil-road-zehqr10n/booking/staff';
      
      // Create URL parameters
      const params = new URLSearchParams({
        allOffer: 'true',
        menu: 'true',
        pId: '68802',
        offerItems: `sv:${freshaId}`
      });
      
      // Combine base URL with parameters
      const serviceLink = `${baseUrl}?${params.toString()}`;
      
      return serviceLink;
    } catch (error) {
      console.error('Error generating booking link:', error);
      return defaultLink;
    }
  };

  // Skip rendering if it's the "Expert Hair Care" or "Premium beauty care" section
  if (subcategory.toLowerCase() === 'expert hair care' || subcategory.toLowerCase() === 'premium beauty care') {
    return null;
  }

  return (
    <div>
      <AnimatedSection
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <button
            className={`w-full px-6 py-4 flex justify-between items-center transition-colors ${subcategoryColors[subcategory] || 'bg-[#7B67A1]'} text-white hover:bg-[#6a5989]`}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <h3 className="text-2xl font-semibold">{subcategory}</h3>
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className={`${isExpanded ? 'block' : 'hidden'}`}>
            <div className="px-6 py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                  <a
                    key={service.name}
                    href={getBookingLink(service.freshaId)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block ${subcategoryColors[subcategory] || 'bg-[#7B67A1]'} bg-opacity-10 rounded-lg p-6 hover:shadow-md transition-all hover:scale-[1.02] cursor-pointer border-2 border-transparent hover:border-[#7B67A1]`}
                  >
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h4>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-[#7B67A1] font-medium">£{service.price}</span>
                      <span className="text-gray-500">{service.duration} mins</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
} 