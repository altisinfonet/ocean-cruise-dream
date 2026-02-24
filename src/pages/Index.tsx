import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DestinationsSection from "@/components/DestinationsSection";
import PackagesSection from "@/components/PackagesSection";
import HotelsSection from "@/components/HotelsSection";
import WaterSportsSection from "@/components/WaterSportsSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>BookNGo – Andaman & Nicobar Islands Tour Packages, Hotels & Water Sports</title>
        <meta name="description" content="Plan your dream Andaman trip with BookNGo. Curated tour packages, handpicked hotels, scuba diving, jet skiing & more." />
      </Helmet>
      <Navbar />
      <main>
        <HeroSection />
        <DestinationsSection />
        <PackagesSection />
        <HotelsSection />
        <WaterSportsSection />
        <GallerySection />
        <TestimonialsSection />
        <FAQSection />
        <AboutSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
