import Contact from "@/components/Contact";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import HeroSection from "@/components/HeroSection";
import Location from "@/components/Location";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import Rooms from "@/components/Rooms";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <WhyChoose />
      <Rooms />
      <Gallery />
      <Location />
      <Reviews />
      <Contact />
      <Footer />
      <FloatingCTA />
    </main>
  )
}