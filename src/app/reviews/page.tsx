import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

export default function Reviews() {
  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      date: "2 weeks ago",
      text: "Absolutely amazing experience! The staff are so friendly and professional. My hair has never looked better. Will definitely be coming back!",
      source: "Google"
    },
    {
      name: "Emma Thompson",
      rating: 5,
      date: "1 month ago",
      text: "Best salon I've ever been to! The attention to detail is incredible and the results are always perfect. Highly recommend!",
      source: "Facebook"
    },
    {
      name: "Lisa Brown",
      rating: 5,
      date: "3 weeks ago",
      text: "Carrie is an absolute gem! She made me feel so comfortable and the results were stunning. Can't wait for my next appointment!",
      source: "Google"
    },
    {
      name: "Michelle Davis",
      rating: 5,
      date: "2 months ago",
      text: "Victoria is a true artist! She transformed my hair exactly how I wanted it. The salon has such a lovely atmosphere too.",
      source: "Yelp"
    },
    {
      name: "Rachel Wilson",
      rating: 5,
      date: "1 week ago",
      text: "The beauty treatments here are top-notch. My skin has never felt better. The staff are so knowledgeable and friendly.",
      source: "Google"
    },
    {
      name: "Sophie Anderson",
      rating: 5,
      date: "3 days ago",
      text: "Had my nails done by Nikki and they look amazing! Such attention to detail and the service was excellent.",
      source: "Facebook"
    },
    {
      name: "Hannah Green",
      rating: 5,
      date: "2 weeks ago",
      text: "Lilla's facials are incredible! My skin has never looked better. The whole experience was so relaxing.",
      source: "Google"
    },
    {
      name: "Jessica Taylor",
      rating: 5,
      date: "1 month ago",
      text: "Beth is an amazing stylist! She really listens to what you want and delivers every time. Love this salon!",
      source: "Yelp"
    },
    {
      name: "Amy Roberts",
      rating: 5,
      date: "2 weeks ago",
      text: "Mica's aesthetic treatments are fantastic! Professional, knowledgeable, and the results speak for themselves.",
      source: "Google"
    },
    {
      name: "Olivia White",
      rating: 5,
      date: "3 weeks ago",
      text: "Georgia is a brilliant stylist! She transformed my hair and I couldn't be happier. The salon is beautiful too.",
      source: "Facebook"
    },
    {
      name: "Charlotte Harris",
      rating: 5,
      date: "1 week ago",
      text: "Evie's beauty treatments are amazing! So relaxing and the results are always perfect. Highly recommend!",
      source: "Google"
    },
    {
      name: "Lucy Martin",
      rating: 5,
      date: "2 days ago",
      text: "Rachael is a fantastic stylist! She really understands what you want and delivers every time. Love this place!",
      source: "Yelp"
    }
  ];

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
            alt="Victoria Rose Salon Reviews"
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
          <h1 className="text-6xl md:text-8xl tracking-wide mb-4">Reviews</h1>
          <p className="text-xl md:text-2xl font-light tracking-wider mb-8">What Our Clients Say</p>
        </AnimatedSection>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <AnimatedSection
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">{review.source}</span>
                </div>
                <p className="text-gray-700 mb-4">{review.text}</p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">{review.name}</span>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="https://www.google.com/search?q=Victoria+Rose+Hair+%26+Beauty+Reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#31734D] hover:bg-[#285f3f] transition-colors duration-200"
            >
              See All Reviews
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 