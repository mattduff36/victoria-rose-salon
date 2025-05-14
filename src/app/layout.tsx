import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import StructuredData from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Victoria Rose Hair & Beauty Salon | Mansfield Woodhouse",
  description: "Professional hair and beauty services in Mansfield Woodhouse, Nottinghamshire. Expert stylists offering cuts, color, styling, and beauty treatments. Book your appointment today!",
  metadataBase: new URL('https://victoria-rose-salon.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Victoria Rose Hair & Beauty Salon | Mansfield Woodhouse',
    description: 'Professional hair and beauty services in Mansfield Woodhouse, Nottinghamshire. Expert stylists offering cuts, color, styling, and beauty treatments.',
    url: 'https://victoria-rose-salon.vercel.app',
    siteName: 'Victoria Rose Hair & Beauty Salon',
    images: [
      {
        url: '/Logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Victoria Rose Hair & Beauty Salon - Mansfield Woodhouse',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Victoria Rose Hair & Beauty Salon | Mansfield Woodhouse',
    description: 'Professional hair and beauty services in Mansfield Woodhouse, Nottinghamshire. Expert stylists offering cuts, color, styling, and beauty treatments.',
    images: ['/Logo.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <StructuredData />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <Script
          id="voiceflow-assistant"
          strategy="afterInteractive"
        >
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
      </body>
    </html>
  );
}
