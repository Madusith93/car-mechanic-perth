import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import LocalPrices from '@/components/LocalPrices';
import Servingareas from '@/components/Servingareas';
import ReviewsSection from '@/components/Reviews';
import BookingSection from '@/components/BookOnline';
import Map from '@/components/Map';

// NEXT.JS APP ROUTER SEO METADATA
export const metadata: Metadata = {
  title: 'Car Mechanic Perth | Premier Auto Repair & Logbook Servicing Armadale',
  description:
    'Trusted mechanic in Armadale & Perth South-East. Honest upfront pricing for logbook servicing, brake repairs, diagnostics, suspension & auto A/C. Book online today!',
  keywords: [
    'Car Mechanic Perth',
    'Mechanic Armadale WA',
    'Auto Repair Perth South-East',
    'Logbook Servicing Armadale',
    'Brake Repairs Kelmscott',
    'Engine Diagnostics Gosnells',
    'Car Service Near Me Perth',
    'Car Mechanic Perth South-East',
  ],
  authors: [{ name: 'Car Mechanic Perth' }],
  creator: 'Car Mechanic Perth',
  openGraph: {
    title: 'Car Mechanic Perth | Workshop-Quality Care, Local Prices',
    description:
      'Logbook servicing, brakes, diagnostics & auto repairs in Armadale WA. Honest advice, same-day turnaround, warranty protected.',
    url: 'https://carmechanicperth.com', // Replace with your actual domain
    siteName: 'Car Mechanic Perth',
    locale: 'en_AU',
    type: 'website',
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

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F17]">
      <Hero />
      <WhyChooseUs />
      <LocalPrices />
      <Servingareas />
      <ReviewsSection />
      <BookingSection />
      <Map />
    </main>
  );
}