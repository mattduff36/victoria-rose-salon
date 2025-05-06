import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export default function BookingPolicies() {
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
            src="/hero-bg.jpeg"
            alt="Victoria Rose Salon Booking Information"
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
          <h1 className="text-6xl md:text-8xl font-medium tracking-wide mb-4">Booking & Policies</h1>
          <p className="text-xl md:text-2xl font-light tracking-wider mb-8">Important Information for Your Visit</p>
        </AnimatedSection>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* Appointments Section */}
            <AnimatedSection
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-[#31734D]">Appointments</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Appointments are not always necessary, however booking is advised for evenings and weekends. 
                  You can book either by calling into the salon, phoning 01623 624119 or messaging us through our Facebook page.
                </p>
                <p>
                  You can also book nail treatments and some beauty treatments online via our booking system Fresha.
                </p>
                <p>
                  When booking your appointment, we will ask for your phone number and email address. 
                  This allows us to send you automated reminders prior to your appointment.
                </p>
              </div>
            </AnimatedSection>

            {/* Cancellation Policy Section */}
            <AnimatedSection
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-[#31734D]">Cancellation Policy</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We appreciate that sometimes you may need to cancel or reschedule your appointment and kindly request that you provide at least 48 hour's notice.
                </p>
                <p>
                  Cancellations of less than 48hrs are required to pay 50% of the treatment value. 
                  Missed appointments, or last minute (less than 24hrs) cancellations will be charged at 100% of the reserved treatment price. 
                  This is payable before booking your next appointment. 
                  You will also be asked to pay a 100% non-refundable booking fee to secure your next appointment.
                </p>
                <p>
                  By booking an appointment with us, you agree to these terms and conditions.
                </p>
                <p>
                  We thank you for your cooperation and continued support.
                </p>
              </div>
            </AnimatedSection>

            {/* Booking Fees Section */}
            <AnimatedSection
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-[#31734D]">Booking Fees</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  New clients are required to pay a booking fee to secure the appointment. 
                  The booking fee is the full cost of the reserved treatment. 
                  Clients who have previously missed appointments or cancelled last minute, will also be required to pay an upfront booking fee. 
                  If the fee is not paid within 48hrs of booking, the appointment will be cancelled.
                </p>
                <p>
                  You can reschedule your appointment up to 48 hours prior to your booking and your deposit will be transferred over to your future booking.
                </p>
                <p>
                  If you are unable to reschedule, please contact us at least 48 hours before your appointment.
                </p>
                <p>
                  Cancellations less than 48 hours are entitled to 50% booking fee refund.
                </p>
                <p>
                  Booking fees are none refundable for cancellations less than 24 hours.
                </p>
                <p className="font-semibold">
                  Please Note: The booking fee is held by the self employed stylist/beautician for which the appointment is booked with. 
                  Responsibility is with the individual not the owners of Victoria Rose Hair & Beauty Salon.
                </p>
              </div>
            </AnimatedSection>

            {/* Booking CTA */}
            <AnimatedSection
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mt-12"
            >
              <Link 
                href="https://www.fresha.com/a/victoria-rose-hair-and-beauty-salon-mansfield-woodhouse-25-dunsil-road-zehqr10n/all-offer?menu=true&pId=68802&rwg_token=AAiGsoYtsIq8DsbkAukp1_UAjvtdR2-CFw8OIjZLtDOnE93dSv-XanUBi8lMHl-tMd5f0uM_lrRUUFzO_xlJbcvmp30akDRuDQ%3D%3D&gei=-qkKaPTmN5m6hbIP3v-xoAg"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#31734D] hover:bg-[#285f3f] text-white font-bold py-3 px-8 rounded-full transition-colors"
              >
                Book Online
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
} 