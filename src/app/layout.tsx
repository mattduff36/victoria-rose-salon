import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Victoria Rose Hair & Beauty Salon | Mansfield Woodhouse',
  description:
    'Professional hair and beauty services in Mansfield Woodhouse, Nottinghamshire. Expert stylists offering cuts, color, styling, and beauty treatments. Book your appointment today!',
  metadataBase: new URL('https://victoria-rose-salon.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Victoria Rose Hair & Beauty Salon | Mansfield Woodhouse',
    description:
      'Professional hair and beauty services in Mansfield Woodhouse, Nottinghamshire. Expert stylists offering cuts, color, styling, and beauty treatments.',
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
    description:
      'Professional hair and beauty services in Mansfield Woodhouse, Nottinghamshire. Expert stylists offering cuts, color, styling, and beauty treatments.',
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_files/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_files/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_files/favicon-16x16.png" />
        <link rel="manifest" href="/favicon_files/site.webmanifest" />
      </head>
      <body className={`${inter.className} bg-white`}>{children}</body>
    </html>
  );
}
