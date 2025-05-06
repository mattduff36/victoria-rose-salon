import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { syncTeamImages } from "@/utils/team-sync";

export default async function OurTeam() {
  const teamMembers = await syncTeamImages();

  // Sort team members - owners first, then by title
  const sortedTeamMembers = teamMembers.sort((a, b) => {
    const aName = a.name || '';
    const bName = b.name || '';
    const aIsOwner = aName.toLowerCase().includes('owner');
    const bIsOwner = bName.toLowerCase().includes('owner');
    
    if (aIsOwner === bIsOwner) {
      return aName.localeCompare(bName);
    }
    
    return aIsOwner ? -1 : 1;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <AnimatedSection 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src="/hero-bg.jpeg"
            alt="Victoria Rose Salon Team"
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
          <h1 className="text-6xl md:text-8xl tracking-wide mb-4">Our Team</h1>
          <p className="text-xl md:text-2xl font-light tracking-wider mb-8">Our Expert Professionals</p>
        </AnimatedSection>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedTeamMembers.map((member, index) => {
              // Extract title from name (format: "Name - Title")
              const memberName = member.name || '';
              const [name, ...titleParts] = memberName.split(' - ');
              const title = titleParts.join(' - ');

              return (
                <AnimatedSection
                  key={member.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative h-80">
                    <Image
                      src={member.imageUrl}
                      alt={memberName}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{name}</h3>
                    <p className="text-[#31734D] font-medium">{title}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
} 