import { Shield, Heart, Lightbulb, IndianRupee } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const values = [
  { icon: Shield, label: "Trust & Transparency" },
  { icon: Heart, label: "Customer Service" },
  { icon: Lightbulb, label: "Innovative Products" },
  { icon: IndianRupee, label: "Value for Money" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-20 px-4 bg-muted/50" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <div className={`text-center mb-10 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-2">About Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why BookNGo?</h2>
        </div>

        <p className={`text-muted-foreground text-center mb-10 leading-relaxed max-w-2xl mx-auto ${isVisible ? "animate-fade-up delay-200" : "opacity-0"}`}>
          We are extremely delighted to introduce <span className="font-bold text-primary">BookNGo</span> — your trusted partner for Andaman & Nicobar Islands tours. We provide catering services keeping in mind the best suitable budget for our clients, helping you quench your thirst of visiting the beaches, viewing the greens, and expanding your horizon.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div
              key={v.label}
              className={`flex flex-col items-center text-center p-4 rounded-xl bg-card shadow-card border border-border transition-all duration-500 hover:-translate-y-2 hover:shadow-ocean group ${isVisible ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: `${300 + i * 100}ms` }}
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors duration-300">
                <v.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="text-sm font-semibold text-foreground">{v.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
