import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ENHANCED GLOBAL SEO METADATA
export const metadata: Metadata = {
  metadataBase: new URL("https://carmechanicperth.com"), 
  title: {
    default: "Car Mechanic Perth | Premier Auto Repair & Logbook Servicing",
    template: "%s | Car Mechanic Perth",
  },
  description:
    "Trusted local mechanic in Armadale & Perth South-East. Quality logbook servicing, brake repairs, diagnostics, suspension & auto A/C. Honest pricing & warranty safe.",
  keywords: [
    "Car Mechanic Perth",
    "Mechanic Armadale WA",
    "Auto Repairs Perth",
    "Logbook Servicing Armadale",
    "Brake Repairs Kelmscott",
    "Engine Diagnostics Gosnells",
    "Car Service Near Me Perth",
    "Auto Mechanic South-East Perth",
  ],
  authors: [{ name: "Car Mechanic Perth" }],
  creator: "Car Mechanic Perth",
  publisher: "Car Mechanic Perth",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Car Mechanic Perth | Workshop-Quality Care, Local Prices",
    description:
      "Logbook servicing, brakes, diagnostics & auto repairs in Armadale WA. Honest advice, same-day turnaround, warranty protected.",
    url: "https://carmechanicperth.com",
    siteName: "Car Mechanic Perth",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Mechanic Perth | Premier Auto Repair & Services",
    description:
      "Honest & upfront auto servicing & mechanic repairs in Armadale & Perth South-East.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// LOCAL BUSINESS SCHEMA FOR GOOGLE MAPS & LOCAL SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Car Mechanic Perth",
  image: "https://carmechanicperth.com/og-image.jpg", 
  "@id": "https://carmechanicperth.com",
  url: "https://carmechanicperth.com",
  telephone: "+61862449888",
  email: "cmechanicperth@gmail.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6 Aragon Crt",
    addressLocality: "Armadale",
    addressRegion: "WA",
    postalCode: "6112",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -32.144888,
    longitude: 116.012588,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "17:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "13:00",
    },
  ],
  areaServed: [
    "Armadale",
    "Kelmscott",
    "Gosnells",
    "Thornlie",
    "Cannington",
    "Byford",
    "Seville Grove",
    "Perth Metro",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        {/* Inject Google Local Business Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0F172A] text-white font-sans">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}