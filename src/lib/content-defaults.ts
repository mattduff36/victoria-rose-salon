import type {
  MediaContent,
  ReviewItem,
  SiteDetails,
  SitePages,
} from '@/lib/content-types';

export const defaultSite: SiteDetails = {
  name: 'Victoria Rose Salon',
  addressLines: [
    '25 Dunsil Road',
    'Mansfield Woodhouse',
    'Nottinghamshire',
    'NG19 7GD',
  ],
  phone: '01623 624119',
  phoneHref: 'tel:01623624119',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2394.1234567890123!2d-1.2062833!3d53.1675146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDEwJzAzLjAiTiAxwrAxMicyMi42Ilc!5e0!3m2!1sen!2suk!4v1234567890',
  hours: [
    { day: 'monday', label: 'Monday', open: '', close: '', closed: true },
    { day: 'tuesday', label: 'Tuesday', open: '09:00', close: '17:00', closed: false },
    { day: 'wednesday', label: 'Wednesday', open: '09:00', close: '17:00', closed: false },
    { day: 'thursday', label: 'Thursday', open: '09:00', close: '19:00', closed: false },
    { day: 'friday', label: 'Friday', open: '09:00', close: '19:00', closed: false },
    { day: 'saturday', label: 'Saturday', open: '08:30', close: '16:00', closed: false },
    { day: 'sunday', label: 'Sunday', open: '', close: '', closed: true },
  ],
};

export const defaultMedia: MediaContent = {
  hero: '/hero-bg.jpeg',
  about: '/about-us.jpg',
  hairInterior: '/hair_interior.jpg',
  beautyInterior: '/beauty_interior.jpg',
  exterior: '/exterior.jpg',
  logo: '/Logo.jpeg',
};

export const defaultReviews: ReviewItem[] = [
  {
    id: 'review-sarah',
    name: 'Sarah Johnson',
    rating: 5,
    dateLabel: '2 weeks ago',
    text: 'Absolutely amazing experience! The staff are so friendly and professional. My hair has never looked better. Will definitely be coming back!',
    source: 'Google',
  },
  {
    id: 'review-emma',
    name: 'Emma Thompson',
    rating: 5,
    dateLabel: '1 month ago',
    text: "Best salon I've ever been to! The attention to detail is incredible and the results are always perfect. Highly recommend!",
    source: 'Facebook',
  },
  {
    id: 'review-lisa',
    name: 'Lisa Brown',
    rating: 5,
    dateLabel: '3 weeks ago',
    text: 'Carrie is an absolute gem! She made me feel so comfortable and the results were stunning. Can\'t wait for my next appointment!',
    source: 'Google',
  },
  {
    id: 'review-michelle',
    name: 'Michelle Davis',
    rating: 5,
    dateLabel: '2 months ago',
    text: 'Victoria is a true artist! She transformed my hair exactly how I wanted it. The salon has such a lovely atmosphere too.',
    source: 'Yelp',
  },
  {
    id: 'review-rachel',
    name: 'Rachel Wilson',
    rating: 5,
    dateLabel: '1 week ago',
    text: 'The beauty treatments here are top-notch. My skin has never felt better. The staff are so knowledgeable and friendly.',
    source: 'Google',
  },
  {
    id: 'review-sophie',
    name: 'Sophie Anderson',
    rating: 5,
    dateLabel: '3 days ago',
    text: 'Had my nails done by Nikki and they look amazing! Such attention to detail and the service was excellent.',
    source: 'Facebook',
  },
  {
    id: 'review-hannah',
    name: 'Hannah Green',
    rating: 5,
    dateLabel: '2 weeks ago',
    text: "Lilla's facials are incredible! My skin has never looked better. The whole experience was so relaxing.",
    source: 'Google',
  },
  {
    id: 'review-jessica',
    name: 'Jessica Taylor',
    rating: 5,
    dateLabel: '1 month ago',
    text: 'Beth is an amazing stylist! She really listens to what you want and delivers every time. Love this salon!',
    source: 'Yelp',
  },
  {
    id: 'review-amy',
    name: 'Amy Roberts',
    rating: 5,
    dateLabel: '2 weeks ago',
    text: "Mica's aesthetic treatments are fantastic! Professional, knowledgeable, and the results speak for themselves.",
    source: 'Google',
  },
  {
    id: 'review-olivia',
    name: 'Olivia White',
    rating: 5,
    dateLabel: '3 weeks ago',
    text: 'Georgia is a brilliant stylist! She transformed my hair and I couldn\'t be happier. The salon is beautiful too.',
    source: 'Facebook',
  },
  {
    id: 'review-charlotte',
    name: 'Charlotte Harris',
    rating: 5,
    dateLabel: '1 week ago',
    text: "Evie's beauty treatments are amazing! So relaxing and the results are always perfect. Highly recommend!",
    source: 'Google',
  },
  {
    id: 'review-lucy',
    name: 'Lucy Martin',
    rating: 5,
    dateLabel: '2 days ago',
    text: 'Rachael is a fantastic stylist! She really understands what you want and delivers every time. Love this place!',
    source: 'Yelp',
  },
];

export const defaultPages: SitePages = {
  home: {
    heroTitle: 'Victoria Rose',
    heroSubtitle: 'Hair and Beauty Salon',
    heroLocation: 'Mansfield Woodhouse, Nottinghamshire',
    servicesHeading: 'Our Services',
    hairCardTitle: 'Hair Services',
    hairCardDescription:
      'Expert hair cutting, styling, and colouring services for all hair types. From precision cuts to balayage and highlights, our experienced stylists use premium products to create your perfect look.',
    beautyCardTitle: 'Beauty Services',
    beautyCardDescription:
      'Indulge in our comprehensive beauty treatments. From luxury manicures and pedicures to professional waxing and advanced aesthetic services. Our beauty therapists are trained in the latest techniques and use only premium products.',
    welcomeHeading: 'Welcome to Victoria Rose',
    welcomeParagraphs: [
      'We are a professional hair and beauty salon located in Mansfield Woodhouse, offering a wide range of services to help you look and feel your best.',
      'Our team of experienced professionals are dedicated to providing exceptional service and outstanding results for every client in and around Nottinghamshire since 2012.',
    ],
    welcomeCta: 'Learn More About Us',
    ctaHeading: 'Ready to Book Your Appointment?',
    ctaBody: 'Contact us today to schedule your next visit.',
    ctaPrimary: 'Book Your Appointment',
    ctaSecondary: 'Contact Us',
  },
  about: {
    heroTitle: 'About Us',
    heroSubtitle: 'Your Premier Hair and Beauty Destination in Mansfield Woodhouse',
    storyHeading: 'Our Story',
    storyParagraphs: [
      'Victoria Rose Hair & Beauty Salon was founded with a vision to create a space where clients could experience exceptional hair and beauty services in a welcoming, professional environment.',
      'Located in the heart of Mansfield Woodhouse, Nottinghamshire, our salon has become a trusted destination for those seeking premium hair and beauty treatments delivered by experienced professionals.',
      'We pride ourselves on staying at the forefront of industry trends and techniques, ensuring our clients receive the most current and effective treatments available in the Mansfield area.',
    ],
    studioHeading: 'Our Hair Studio',
    studioParagraphs: [
      'Step into our modern hair studio in Mansfield Woodhouse, where creativity meets expertise. Our spacious and well-equipped area is designed to provide the perfect environment for all your hair care needs.',
      'From cutting-edge styling to classic looks, our hair professionals are dedicated to bringing your vision to life in a comfortable and inspiring space in the heart of Nottinghamshire.',
    ],
    suiteHeading: 'Our Beauty Suite',
    suiteParagraphs: [
      'Discover our tranquil beauty suite in Mansfield Woodhouse, a sanctuary designed for relaxation and rejuvenation. Our dedicated beauty area offers a peaceful retreat for all your beauty treatments.',
      "Whether you're here for a facial, massage, or any of our beauty services, our serene environment ensures a truly pampering experience in the heart of Nottinghamshire.",
    ],
    valuesHeading: 'Our Values',
    valuesIntro: "At Victoria Rose Salon, we're committed to excellence in everything we do.",
    values: [
      {
        title: 'Excellence',
        description:
          'We strive for excellence in every service we provide, ensuring each client leaves feeling beautiful and confident.',
      },
      {
        title: 'Professionalism',
        description:
          'Our team of experienced professionals is dedicated to delivering the highest standard of service in a welcoming environment.',
      },
      {
        title: 'Innovation',
        description:
          'We continuously update our skills and techniques to offer the latest trends and treatments in hair and beauty.',
      },
    ],
    ctaHeading: 'Ready to Experience Victoria Rose?',
    ctaBody: "Book your appointment today and discover why we're Mansfield's premier hair and beauty destination.",
  },
  hair: {
    heroTitle: 'Hair Services',
    heroSubtitle: 'Expert Styling for Every Look',
    sectionHeading: 'Our Hair Services',
    sectionIntro: 'From classic cuts to creative colouring, our expert stylists deliver exceptional results.',
  },
  beauty: {
    heroTitle: 'Beauty Services',
    heroSubtitle: 'Enhance Your Natural Beauty',
    sectionHeading: 'Our Beauty Services',
    sectionIntro: 'Comprehensive beauty treatments delivered by our expert technicians.',
  },
  reviews: {
    heroTitle: 'Reviews',
    heroSubtitle: 'What Our Clients Say',
    allReviewsUrl: 'https://www.google.com/search?q=Victoria+Rose+Hair+%26+Beauty+Reviews',
    allReviewsLabel: 'See All Reviews',
  },
  contact: {
    heroTitle: 'Contact Us',
    heroSubtitle: 'Get in touch with Victoria Rose',
    infoHeading: 'Contact Information',
    bookingHeading: 'Book Your Appointment',
    bookingBody:
      'Ready to experience the Victoria Rose difference? Book your appointment online or give us a call.',
    mapHeading: 'Find Us',
  },
  policies: {
    heroTitle: 'Booking & Policies',
    heroSubtitle: 'Important Information for Your Visit',
    sections: [
      {
        id: 'policy-appointments',
        heading: 'Appointments',
        body: 'Appointments are not always necessary, however booking is advised for evenings and weekends. You can book either by calling into the salon, phoning 01623 624119 or messaging us through our Facebook page.\n\nYou can also book nail treatments and some beauty treatments online via our booking system Fresha.\n\nWhen booking your appointment, we will ask for your phone number and email address. This allows us to send you automated reminders prior to your appointment.',
      },
      {
        id: 'policy-cancellation',
        heading: 'Cancellation Policy',
        body: "We appreciate that sometimes you may need to cancel or reschedule your appointment and kindly request that you provide at least 48 hour's notice.\n\nCancellations of less than 48hrs are required to pay 50% of the treatment value. Missed appointments, or last minute (less than 24hrs) cancellations will be charged at 100% of the reserved treatment price. This is payable before booking your next appointment. You will also be asked to pay a 100% non-refundable booking fee to secure your next appointment.\n\nBy booking an appointment with us, you agree to these terms and conditions.\n\nWe thank you for your cooperation and continued support.",
      },
      {
        id: 'policy-fees',
        heading: 'Booking Fees',
        body: 'New clients are required to pay a booking fee to secure the appointment. The booking fee is the full cost of the reserved treatment. Clients who have previously missed appointments or cancelled last minute, will also be required to pay an upfront booking fee. If the fee is not paid within 48hrs of booking, the appointment will be cancelled.\n\nYou can reschedule your appointment up to 48 hours prior to your booking and your deposit will be transferred over to your future booking.\n\nIf you are unable to reschedule, please contact us at least 48 hours before your appointment.\n\nCancellations less than 48 hours are entitled to 50% booking fee refund.\n\nBooking fees are none refundable for cancellations less than 24 hours.\n\nPlease Note: The booking fee is held by the self employed stylist/beautician for which the appointment is booked with. Responsibility is with the individual not the owners of Victoria Rose Hair & Beauty Salon.',
      },
      {
        id: 'policy-skin-test',
        heading: 'Skin Testing',
        body: "A number of our hair and beauty services require a skin test prior to the treatment. Our customers' health and comfort are our first priority; doing a colour/tint/lash service without a skin test would put our customers at risk, which we will never do.\n\nThe purpose of a skin test is to determine if a customer will have a reaction to the products or ingredients used during a colour, lash or brow appointment. A complimentary pre-treatment skin test is performed by a qualified hairdresser or beautician in the salon. It only takes 2-5 minutes and it must be done at least two days before your first colour appointment.\n\nEvery customer who has hair colour service, brow or lash tint, lash extensions, or lash lift, needs a skin test; this must be performed at least 48 hours before your appointment, as any reactions may take up to 48 hours to appear.\n\nIf you get your hair coloured regularly with us and with the same products, you probably won't need to have a new test done each time. The results can be valid for up to 12 months, so we will keep your record card secure in our salon and let you know when it's time to re-test.\n\nIt is the responsibility of the client to plan and receive a complimentary pre-treatment skin test, within Victoria Rose Hair and Beauty, at least 48 hours ahead of any hair or beauty treatment that may cause an adverse reaction. If a skin test is not completed, we reserve the right to cancel the appointment and retain any booking fee paid.",
        bullets: [
          'All hair colouring services (foils, toners or any scalp colour application)',
          'lash lifts',
          'brow lamination',
          'lash tint',
          'brow tint',
          'lip blushing',
        ],
      },
    ],
  },
  privacy: {
    title: 'Privacy Notice',
    intro: "We're committed to protecting your privacy and ensuring the security of your personal information.",
    body: 'This privacy notice explains how Victoria Rose Hair & Beauty Salon looks after personal information you give us or that we learn by having you as a client and the choices you make about communications you agree we may send you. This notice explains how we do this and tells you about your privacy rights and how the law protects you.',
    sections: [
      {
        id: 'privacy-collect',
        heading: 'What Information We Collect About You',
        body: 'We collect information about you when you book an appointment for a service or treatment or when you visit the salon for a service or treatment.',
        bullets: [
          'Your name',
          'Email address',
          'Phone number (mobile & land line)',
          'Gender',
          'Treatment history/products used',
          'Details of patch tests carried out for treatments such as hair colouring, lash extensions, brow & lash tinting etc.',
          'Your address',
          'Health/medical history',
          'Any medication you are taking',
          'Your GP name and address',
          'Relevant history which may suggest that a service or treatment should not go ahead',
          'Payment and transaction information',
        ],
      },
      {
        id: 'privacy-use',
        heading: 'How Information About You Will Be Used',
        body: 'In law, we are allowed to use personal information, including sharing it outside the salon, only if we have a proper reason to do so, for example:',
        bullets: [
          'To fulfil a contract with you i.e. to provide the service or treatment you have requested',
          'When it is in our legitimate interest i.e. there is a business or commercial reason to do so',
          'When you consent to it: we will always ask for your consent to hold and use health and medical information',
        ],
      },
      {
        id: 'privacy-assistant',
        heading: 'Virtual Assistant Data Processing',
        body: 'When using our virtual assistant service, we collect and process the following information. This data is processed in accordance with UK GDPR requirements and is used solely for the purpose of providing you with the requested services. We do not share this information with third parties without your explicit consent.',
        bullets: [
          'Conversation history for the purpose of providing assistance',
          'Appointment booking information',
          'Service preferences and requirements',
        ],
      },
      {
        id: 'privacy-rights',
        heading: 'Your Rights Under UK GDPR',
        body: 'Under the UK General Data Protection Regulation (GDPR), you have the following rights:',
        bullets: [
          'The right to be informed about how your data is being used',
          'The right to access your personal data',
          'The right to have your data rectified if it is inaccurate or incomplete',
          'The right to erasure (the right to be forgotten)',
          'The right to restrict processing of your data',
          'The right to data portability',
          'The right to object to processing of your data',
          'Rights in relation to automated decision making and profiling',
        ],
      },
      {
        id: 'privacy-retention',
        heading: 'How Long Your Information Will Be Kept For',
        body: 'For insurance purposes we are required to retain your information for 7 years. After this time, if you no longer visit us your information will be deleted/shredded and disposed of in the correct manner.',
      },
      {
        id: 'privacy-storage',
        heading: 'Where Your Information Is Kept',
        body: 'The only people to see your details are, the therapist/stylist performing the treatment, Victoria Rose team members who add your contact details on to the system and the data base company we use, called Shedul, to hold the information as noted above.\n\nYour contact information is only used to keep you informed about your appointment and is not sold on to any third parties. You can opt out of this service at any time by speaking to your stylist/therapist.\n\nAny and all paper records are protected within secured premises and are locked away.',
      },
      {
        id: 'privacy-access',
        heading: 'Access to Your Information and Correction',
        body: 'You have the right to request a copy of the personal information that we hold about you. This will normally be free, unless we consider the request to be unfounded or excessive, in which case we may charge a fee to cover our administration costs.\n\nIf you would like a copy of some or all of your personal information, please contact Carrie Healey or Victoria Clark by post.',
      },
      {
        id: 'privacy-contact',
        heading: 'How to Contact Us',
        body: 'Please contact us if you have any questions about our privacy notice or information we hold about you.\n\nYou also have the right to complain to the Information Commissioner\'s Office. Find out on their website how to report a concern: ico.org.uk/concerns/handling',
        bullets: [
          'By phone: 01623 624119',
          'By post: Victoria Rose Hair & Beauty Salon, 25 Dunsil Road, Mansfield Woodhouse, Notts, NG19 7GD',
        ],
      },
      {
        id: 'privacy-changes',
        heading: 'Changes to Our Privacy Notice',
        body: 'We keep our privacy notice under regular review and we will place any updates on this web page.',
      },
    ],
  },
};
