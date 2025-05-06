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

            {/* Skin Testing Policy Section */}
            <AnimatedSection
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-[#31734D]">Skin Testing</h2>
              <div className="space-y-4 text-gray-700">
                <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">Importance of Skin Testing</h3>
                <p>
                  A number of our hair and beauty services require a skin test prior to the treatment. Or customers' health and comfort are our first priority; doing a colour/tint/lash service without a skin test would put our customers at risk, which we will never do.
                </p>
                
                <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">Which treatments require a skin test?</h3>
                <p>
                  The following hair and beauty services require a skin test prior to treatment:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>All hair colouring services (foils, toners or any scalp colour application)</li>
                  <li>lash lifts</li>
                  <li>brow lamination</li>
                  <li>lash tint</li>
                  <li>brow tint</li>
                  <li>lip blushing</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">What is a skin test?</h3>
                <p>
                  The purpose of a skin test is to determine if a customer will have a reaction to the products or ingredients used during a colour, lash or brow appointment. A complimentary pre-treatment skin test is performed by a qualified hairdresser or beautician in the salon. It only takes 2-5 minutes and it must be done at least two days before your first colour appointment.
                </p>
                <p>
                  The test consists of:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>answering questions about the health and condition of your scalp, skin, lashes or brows</li>
                  <li>answering questions about your hair colouring history, or previous lash/brow treatments</li>
                  <li>application of product to your skin — the product must be left on your skin without interference for 45mins for hair colours or 48 hours for lash/brow tint & lash lift. If you know you need to go swimming or wash the area in that time, please take this into consideration before planning a time for your skin test</li>
                  <li>filling out your patch test record form</li>
                </ul>
                <p>
                  If you notice redness, rash, swelling, or pain, wash the area thoroughly with water and let us know. If you experience a severe reaction, such as blistering, bleeding, or swelling or itching in the throat, consult your GP straight away.
                </p>

                <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">Do I need a skin test?</h3>
                <p>
                  Every customer who has hair colour service, brow or lash tint, lash extensions, or lash lift, needs a skin test; this must be performed at least 48 hours before your appointment, as any reactions may take up to 48 hours to appear.
                </p>
                <p>
                  However, there may be exceptions — such as if the colourist will be using bleach only — but we advise a skin test for all customers, just to be safe. Client records are not shared between salons, so we won't be use records from your last hairdresser for your last skin test results.
                </p>

                <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">Do I need a skin test every time?</h3>
                <p>
                  If you get your hair coloured regularly with us and with the same products, you probably won't need to have a new test done each time. The results can be valid for up to 12 months, so we will keep your record card secure in our salon and let you know when it's time to re-test.
                </p>
                <p>
                  If you're already a colour/lash/brow customer, you may need another skin test if:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>it's been more than six months since your last colour/tint/lash lift/lash extensions</li>
                  <li>you are changing brand or colour/toner</li>
                  <li>you have had a change in medication since your last colour/tint/lash lift/lash extensions</li>
                  <li>you have had a tattoo, henna, or permanent makeup since your last colour/tint/lash lift/lash extensions</li>
                </ul>
                <p>
                  Sometimes companies reformulate their products, or we may change the brand we use. Even if it's something you've been exposed to regularly, you may develop sensitivity to it over time. Some medications or procedures can increase the risk of developing an allergy to colourants, so we will ask about them before we start your next colour/ treatment.
                </p>
                <p>
                  If you have had any previous reactions to henna tattoos, lash adhesives or hair dyes you must inform your stylist or beautician.
                </p>
                <p className="font-semibold">
                  It is the responsibility of the client to plan and receive a complimentary pre-treatment skin test, within Victoria Rose Hair and Beauty, at least 48 hours ahead of any hair or beauty treatment that may cause an adverse reaction. If a skin test is not completed, we reserve the right to cancel the appointment and retain any booking fee paid. 
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
} 