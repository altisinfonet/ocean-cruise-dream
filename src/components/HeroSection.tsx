import heroImg from "@/assets/hero-andaman.jpg";
import { Button } from "@/components/ui/button";
import { Anchor, Ship } from "lucide-react";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="Andaman Islands aerial view" className="w-full h-full object-cover animate-fade-in" />
      <div className="absolute inset-0 sky-gradient opacity-60" />
    </div>

    {/* Content */}
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <div className="animate-float inline-block mb-6">
        <Ship className="h-12 w-12 text-primary-foreground/80 mx-auto" />
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-primary-foreground leading-tight mb-4 animate-fade-up">
        Andaman & Nicobar
        <span className="block text-secondary mt-2 animate-fade-up delay-200">Islands</span>
      </h1>
      <p className="text-lg sm:text-xl text-primary-foreground/90 mb-2 font-medium tracking-wide animate-fade-up delay-300">
        FIND. YOURSELF. HERE
      </p>
      <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto animate-fade-up delay-400">
        It's time to end your search here… Discover pristine beaches, crystal-clear waters, and unforgettable adventures with BookNGo.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-500">
        <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base px-8 shadow-ocean hover:scale-105 transition-transform duration-200">
          <Anchor className="mr-2 h-5 w-5" /> Explore Packages
        </Button>
        <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 text-base px-8 hover:scale-105 transition-transform duration-200">
          Contact Us
        </Button>
      </div>
    </div>

    {/* Wave SVG bottom */}
    <div className="absolute -bottom-1 left-0 right-0">
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
        <path d="M0 60L48 52C96 44 192 28 288 24C384 20 480 28 576 40C672 52 768 68 864 72C960 76 1056 68 1152 56C1248 44 1344 28 1392 20L1440 12V120H0Z" fill="hsl(195 30% 97%)" />
      </svg>
    </div>
  </section>
);

export default HeroSection;
