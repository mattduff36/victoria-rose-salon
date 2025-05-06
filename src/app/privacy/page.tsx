import AnimatedSection from "@/components/AnimatedSection";

export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 bg-gray-900 min-h-screen">
      <AnimatedSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Notice</h1>
        
        <p className="text-lg text-white mb-8">
          We&apos;re committed to protecting your privacy and ensuring the security of your personal information.
        </p>

        <p className="mb-6 text-white">
          This privacy notice explains how Victoria Rose Hair & Beauty Salon looks after personal information you give us or that we learn by having you as a client and the choices you make about communications you agree we may send you. This notice explains how we do this and tells you about your privacy rights and how the law protects you.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">What Information We Collect About You</h2>
            <p className="mb-4 text-white">We collect information about you when you book an appointment for a service or treatment or when you visit the salon for a service or treatment.</p>
            
            <h3 className="text-xl font-medium text-white mb-2">Information collected for appointment purposes:</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-white">
              <li>Your name</li>
              <li>Email address</li>
              <li>Phone number (mobile & land line)</li>
              <li>Gender</li>
              <li>Treatment history/products used</li>
              <li>Details of patch tests carried out for treatments such as hair colouring, lash extensions, brow & lash tinting etc.</li>
            </ul>

            <h3 className="text-xl font-medium text-white mb-2">Additional information collected during face-to-face consultations:</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-white">
              <li>Your address</li>
              <li>Health/medical history</li>
              <li>Any medication you are taking</li>
              <li>Your GP name and address</li>
              <li>Relevant history which may suggest that a service or treatment should not go ahead</li>
              <li>Payment and transaction information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">How Information About You Will Be Used</h2>
            <p className="mb-4 text-white">In law, we are allowed to use personal information, including sharing it outside the salon, only if we have a proper reason to do so, for example:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-white">
              <li>To fulfil a contract with you i.e. to provide the service or treatment you have requested</li>
              <li>When it is in our legitimate interest i.e. there is a business or commercial reason to do so</li>
              <li>When you consent to it: we will always ask for your consent to hold and use health and medical information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Virtual Assistant Data Processing</h2>
            <p className="mb-4 text-white">When using our virtual assistant service, we collect and process the following information:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-white">
              <li>Conversation history for the purpose of providing assistance</li>
              <li>Appointment booking information</li>
              <li>Service preferences and requirements</li>
            </ul>
            <p className="mb-4 text-white">This data is processed in accordance with UK GDPR requirements and is used solely for the purpose of providing you with the requested services. We do not share this information with third parties without your explicit consent.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Your Rights Under UK GDPR</h2>
            <p className="mb-4 text-white">Under the UK General Data Protection Regulation (GDPR), you have the following rights:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-white">
              <li>The right to be informed about how your data is being used</li>
              <li>The right to access your personal data</li>
              <li>The right to have your data rectified if it is inaccurate or incomplete</li>
              <li>The right to erasure (the right to be forgotten)</li>
              <li>The right to restrict processing of your data</li>
              <li>The right to data portability</li>
              <li>The right to object to processing of your data</li>
              <li>Rights in relation to automated decision making and profiling</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">How Long Your Information Will Be Kept For</h2>
            <p className="mb-4 text-white">For insurance purposes we are required to retain your information for 7 years. After this time, if you no longer visit us your information will be deleted/shredded and disposed of in the correct manner.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Where Your Information Is Kept</h2>
            <p className="mb-4 text-white">The only people to see your details are, the therapist/stylist performing the treatment, Victoria Rose team members who add your contact details on to the system and the data base company we use, called Shedul, to hold the information as noted above.</p>
            <p className="mb-4 text-white">Your contact information is only used to keep you informed about your appointment and is not sold on to any third parties. You can opt out of this service at any time by speaking to your stylist/therapist.</p>
            <p className="mb-4 text-white">Any and all paper records are protected within secured premises and are locked away.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Access to Your Information and Correction</h2>
            <p className="mb-4 text-white">You have the right to request a copy of the personal information that we hold about you. This will normally be free, unless we consider the request to be unfounded or excessive, in which case we may charge a fee to cover our administration costs.</p>
            <p className="mb-4 text-white">If you would like a copy of some or all of your personal information, please contact Carrie Healey or Victoria Clark by post.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">How to Contact Us</h2>
            <p className="mb-4 text-white">Please contact us if you have any questions about our privacy notice or information we hold about you:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-white">
              <li>By phone: 01623 624119</li>
              <li>By post: Victoria Rose Hair & Beauty Salon, 25 Dunsil Road, Mansfield Woodhouse, Notts, NG19 7GD</li>
            </ul>
            <p className="mb-4 text-white">You also have the right to complain to the Information Commissioner's Office. Find out on their website how to report a concern: <a href="https://ico.org.uk/concerns/handling" className="text-pink-400 hover:text-pink-300" target="_blank" rel="noopener noreferrer">ico.org.uk/concerns/handling</a></p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Changes to Our Privacy Notice</h2>
            <p className="mb-4 text-white">We keep our privacy notice under regular review and we will place any updates on this web page. This privacy notice was last updated on {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}.</p>
          </section>
        </div>
      </AnimatedSection>
    </div>
  );
} 