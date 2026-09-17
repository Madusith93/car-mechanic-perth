
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import LocalPrices from  "@/components/LocalPrices";
import Servingareas from "@/components/Servingareas";
import ReviewsSection from "@/components/Reviews";
import BookingSection from "@/components/BookOnline";
import Map from "@/components/Map";

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