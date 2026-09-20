import Image from "next/image";
import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import { getSiteContent, sortTeam } from "@/lib/content";

export const metadata: Metadata = {
  alternates: {
    canonical: "/our-team/",
  },
};

export default async function OurTeam() {
  const content = await getSiteContent();
  const sortedTeamMembers = sortTeam(content.team);

  return (
    <div>
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <AnimatedSection
          className="absolute inset-0 z-0"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src={content.media.hero || "/hero-bg.jpeg"}
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

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedTeamMembers.map((member, index) => (
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
                    src={member.imageUrl || "/default-team.jpg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-[#31734D] font-medium">{member.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
