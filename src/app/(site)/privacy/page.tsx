import AnimatedSection from "@/components/AnimatedSection";
import { getSiteContent } from "@/lib/content";

export default async function Privacy() {
  const content = await getSiteContent();
  const copy = content.pages.privacy;
  const updated = new Date(content.updatedAt).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 bg-gray-900 min-h-screen">
      <AnimatedSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-white mb-8">{copy.title}</h1>
        <p className="text-lg text-white mb-8">{copy.intro}</p>
        <p className="mb-6 text-white">{copy.body}</p>
        <div className="space-y-8">
          {copy.sections.map((section) => (
            <section key={section.id}>
              <h2 className="text-2xl font-semibold text-white mb-4">{section.heading}</h2>
              {section.body.split(/\n\n+/).map((paragraph) => (
                <p key={paragraph} className="mb-4 text-white">{paragraph}</p>
              ))}
              {section.bullets && section.bullets.length > 0 ? (
                <ul className="list-disc pl-6 mb-4 space-y-2 text-white">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
          <p className="mb-4 text-white">This privacy notice was last updated on {updated}.</p>
        </div>
      </AnimatedSection>
    </div>
  );
}
