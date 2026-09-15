import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { getServices, groupServicesBySubcategory } from "@/utils/services";
import ExpandableServiceSection from "@/components/ExpandableServiceSection";
import { getSiteContent } from "@/lib/content";
import { mediaSrc } from "@/lib/content-format";

export default async function BeautyServices() {
  const [allServices, content] = await Promise.all([getServices(), getSiteContent()]);
  const servicesBySubcategory = groupServicesBySubcategory(allServices);
  const beautyServices = servicesBySubcategory.beauty || {};
  const copy = content.pages.beauty;

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
            src={mediaSrc(content.media.beautyInterior, "/beauty_interior.jpg")}
            alt="Beauty Services at Victoria Rose Salon"
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
            <h1 className="text-6xl md:text-8xl font-medium tracking-wide mb-4">{copy.heroTitle}</h1>
            <p className="text-xl md:text-2xl font-light tracking-wider mb-8">{copy.heroSubtitle}</p>
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
            <h2 className="text-4xl font-bold mb-6 text-gray-900">{copy.sectionHeading}</h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-700">
              {copy.sectionIntro}
            </p>
          </AnimatedSection>
          
          <div className="space-y-4">
            {Object.entries(beautyServices).map(([subcategory, services], index) => (
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