import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { getServices, groupServicesBySubcategory } from "@/utils/services";
import ExpandableServiceSection from "@/components/ExpandableServiceSection";

export default async function HairServices() {
  const allServices = await getServices();
  const servicesBySubcategory = groupServicesBySubcategory(allServices);
  const hairServices = servicesBySubcategory.hair || {};

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
            src="/hair_interior.jpg"
            alt="Hair Services at Victoria Rose Salon"
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
            <h1 className="text-6xl md:text-8xl font-medium tracking-wide mb-4">Hair Services</h1>
            <p className="text-xl md:text-2xl font-light tracking-wider mb-8">Expert Styling for Every Look</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-[#E1F6FF]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Hair Services</h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-700">
              From classic cuts to creative coloring, our expert stylists deliver exceptional results.
            </p>
          </AnimatedSection>
          
          <div className="space-y-4">
            {Object.entries(hairServices).map(([subcategory, services], index) => (
              <ExpandableServiceSection
                key={subcategory}
                subcategory={subcategory}
                services={services}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 