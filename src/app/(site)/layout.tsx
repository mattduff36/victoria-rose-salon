import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import StructuredData from '@/components/StructuredData';
import { getSiteContent } from '@/lib/content';

export const dynamic = 'force-dynamic';

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const content = await getSiteContent();

  return (
    <>
      <StructuredData site={content.site} />
      <Navbar logoSrc={content.media.logo} />
      <main>{children}</main>
      <Footer site={content.site} />
      <Analytics />
      <Script id="voiceflow-assistant" strategy="afterInteractive">
        {`
          (function(d, t) {
            var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
            v.onload = function() {
              window.voiceflow.chat.load({
                verify: { projectID: '67eac21d4a366595cbf985d5' },
                url: 'https://general-runtime.voiceflow.com',
                versionID: 'production',
                voice: {
                  url: "https://runtime-api.voiceflow.com"
                }
              });
            }
            v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
            v.type = "text/javascript";
            s.parentNode.insertBefore(v, s);
          })(document, 'script');
        `}
      </Script>
    </>
  );
}
