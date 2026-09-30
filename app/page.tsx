import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import WhyChooseUs from '@/components/WhyChooseUs';
import LocalPrices from '@/components/LocalPrices';
import OurProcess from '@/components/OurProcess';
import Servingareas from '@/components/Servingareas';
import ReviewsSection from '@/components/Reviews';
import FAQSection from '@/components/FAQSection';
import BookingSection from '@/components/BookOnline';
import Map from '@/components/Map';

export const metadata: Metadata = {
  title: '#1 Car Mechanic in Kelmscott | Reliable Auto Servicing & Repairs Perth WA',
  description:
    'Trusted car mechanic in Kelmscott and Armadale. Honest upfront pricing for logbook servicing, brake repairs, diagnostics, suspension & auto A/C. Book online today!',
  keywords: [
    'Car Mechanic Kelmscott',
    'Best Car Mechanic in Kelmscott',
    'Mechanic Armadale WA',
    'Auto Repair Perth South-East',
    'Logbook Servicing Kelmscott',
    'Brake Repairs Kelmscott',
    'Engine Diagnostics Kelmscott',
    'Car Service Near Me Perth',
  ],
  authors: [{ name: 'Car Mechanic Perth' }],
  creator: 'Car Mechanic Perth',
  openGraph: {
    title: '#1 Car Mechanic in Kelmscott | Reliable Auto Servicing & Repairs',
    description:
      'Logbook servicing, brakes, diagnostics & auto repairs in Kelmscott and Armadale WA. Honest advice, same-day turnaround, warranty protected.',
    url: 'https://carmechanicperth.com',
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
    <main className="min-h-screen bg-white">
      <Hero />
      <AboutUs />
      <WhyChooseUs />
      <LocalPrices />
      <OurProcess />
      <Servingareas />
      <ReviewsSection />
      <FAQSection />
      <BookingSection />
      <Map />
    </main>
  );
}