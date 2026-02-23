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
        <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base px-8 shadow-ocean hover:scale-105 transition-transform duration-200" asChild>
          <a href="#packages"><Anchor className="mr-2 h-5 w-5" /> Explore Packages</a>
        </Button>
        <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 text-base px-8 hover:scale-105 transition-transform duration-200" asChild>
          <a href="#contact">Contact Us</a>
        </Button>
      </div>
    </div>

    {/* Animated Wave SVG bottom */}
    <div className="absolute -bottom-1 left-0 right-0 overflow-hidden">
      <svg viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[200%] block animate-wave-scroll" preserveAspectRatio="none" style={{ height: "120px" }}>
        <path d="M0 80C120 100 240 60 360 70C480 80 600 110 720 100C840 90 960 50 1080 60C1200 70 1320 100 1440 90C1560 80 1680 50 1800 60C1920 70 2040 100 2160 90C2280 80 2400 50 2520 60C2640 70 2760 100 2880 80V180H0Z" fill="hsl(210 20% 97% / 0.4)" />
      </svg>
      <svg viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[200%] block animate-wave-scroll-reverse absolute bottom-0 left-0" preserveAspectRatio="none" style={{ height: "100px" }}>
        <path d="M0 90C160 70 280 110 400 100C520 90 640 60 760 70C880 80 1000 110 1120 100C1240 90 1360 60 1480 70C1600 80 1720 110 1840 100C1960 90 2080 60 2200 70C2320 80 2440 110 2560 100C2680 90 2800 60 2880 70V180H0Z" fill="hsl(210 20% 97% / 0.6)" />
      </svg>
      <svg viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[200%] block animate-wave-scroll-slow absolute bottom-0 left-0" preserveAspectRatio="none" style={{ height: "80px" }}>
        <path d="M0 100C180 80 300 120 420 110C540 100 660 70 780 80C900 90 1020 120 1140 110C1260 100 1380 70 1500 80C1620 90 1740 120 1860 110C1980 100 2100 70 2220 80C2340 90 2460 120 2580 110C2700 100 2820 70 2880 80V180H0Z" fill="hsl(210 20% 97%)" />
      </svg>
    </div>
  </section>
);

export default HeroSection;
