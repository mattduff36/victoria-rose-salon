import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <AnimatedSection 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src="/about.jpeg"
            alt="About Victoria Rose Salon"
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
          <h1 className="text-6xl md:text-8xl font-medium tracking-wide mb-4">About Us</h1>
          <p className="text-xl md:text-2xl font-light tracking-wider mb-8">Our Story</p>
        </AnimatedSection>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
            >
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Victoria Rose Salon was established in 2010 with a vision to create a welcoming space where clients can receive exceptional hair and beauty services. Our founder, Victoria, has over 20 years of experience in the industry and a passion for helping people look and feel their best.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We believe that every client deserves personalized attention and high-quality services. Our team of skilled professionals is dedicated to staying up-to-date with the latest trends and techniques in hair and beauty care.
              </p>
              <p className="text-lg text-gray-700">
                Located in the heart of Mansfield Woodhouse, our salon has become a trusted destination for those seeking professional hair and beauty services in a relaxed and friendly environment.
              </p>
            </AnimatedSection>

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
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <Image
                src="/interior.jpeg"
                alt="Victoria Rose Salon Interior"
                fill
                className="object-cover"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Our Team</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Meet our talented team of professionals
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Victoria",
                role: "Salon Owner & Senior Stylist",
                image: "/victoria.jpg",
                description: "With over 20 years of experience, Victoria specializes in colour and cutting techniques."
              },
              {
                name: "Carrie Healey",
                role: "Salon Owner and Beautician",
                description: "Carrie is our expert in advanced beauty treatments and salon management."
              },
              {
                name: "Georgia",
                role: "Senior Stylist",
                image: "/georgia.jpg",
                description: "Georgia excels in creative colouring and precision cutting techniques."
              }
            ].map((teamMember, index) => (
              <AnimatedSection
                key={teamMember.name}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8,
                  delay: index * 0.1
                }}
              >
                <div className="relative h-64">
                  <Image
                    src={teamMember.image || '/default-team.jpg'}
                    alt={teamMember.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{teamMember.name}</h3>
                  <p className="text-[#31734D] font-bold mb-2">{teamMember.role}</p>
                  <p className="text-gray-600">{teamMember.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl max-w-3xl mx-auto">
              What we stand for
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality",
                description: "We use only the highest quality products and stay current with the latest techniques and trends."
              },
              {
                title: "Customer Service",
                description: "Your satisfaction is our priority. We listen to your needs and provide personalized service."
              },
              {
                title: "Professionalism",
                description: "Our team maintains the highest standards of professionalism and hygiene."
              }
            ].map((value, index) => (
              <AnimatedSection
                key={value.title}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8,
                  delay: index * 0.1
                }}
              >
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Experience Our Services?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Book your appointment online today
            </p>
            <Link 
              href="https://www.fresha.com/a/victoria-rose-hair-and-beauty-salon-mansfield-woodhouse-25-dunsil-road-zehqr10n/all-offer?menu=true&pId=68802&rwg_token=AAiGsoYtsIq8DsbkAukp1_UAjvtdR2-CFw8OIjZLtDOnE93dSv-XanUBi8lMHl-tMd5f0uM_lrRUUFzO_xlJbcvmp30akDRuDQ%3D%3D&gei=-qkKaPTmN5m6hbIP3v-xoAg"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#31734D] hover:bg-[#285f3f] text-white font-bold py-3 px-8 rounded-full transition-colors inline-block"
            >
              Book an Appointment
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
} 