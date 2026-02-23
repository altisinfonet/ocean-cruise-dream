import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Ship, Calendar, Users, CheckCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const packages = [
  { id: 1, title: "Best of Andamans", duration: "5N 6D", route: "Port Blair 3N + Havelock 1N + Neil Island 1N", startingFrom: 10000, popular: true },
  { id: 2, title: "Best of Andamans", duration: "6N 7D", route: "Port Blair 3N + Havelock 2N + Neil Island 1N", startingFrom: 12200, popular: false },
  { id: 3, title: "Best of Andamans", duration: "5N 6D", route: "Port Blair 2N + Havelock 2N + Neil Island 1N", startingFrom: 10500, popular: false },
  { id: 4, title: "Best of Andamans", duration: "4N 5D", route: "Port Blair 2N + Havelock 1N + Neil Island 1N", startingFrom: 8200, popular: false },
  { id: 5, title: "Best of Andamans", duration: "4N 5D", route: "Port Blair 3N + Havelock 1N", startingFrom: 7900, popular: false },
];

const inclusions = [
  "Well appointed accommodation",
  "Breakfast & Dinner (MAP)",
  "Sightseeing as per itinerary",
  "Airport/jetty transfers in AC vehicle",
  "Local sightseeing by AC vehicle",
  "Cruise transfer Port Blair–Neil–Havelock–Port Blair",
];

const PackagesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="packages" className="py-20 px-4 bg-muted/50" ref={ref}>
      <div className="container mx-auto">
        <div className={`text-center mb-14 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-2">Tour Packages</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Andaman Holiday Deals</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Choose from our curated packages — from economy to premium luxury
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {packages.map((pkg, i) => (
            <div
              key={pkg.id}
              className={`relative bg-card rounded-xl p-6 shadow-card border border-border transition-all duration-500 hover:-translate-y-2 hover:shadow-ocean ${isVisible ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: `${150 + i * 100}ms` }}
            >
              {pkg.popular && (
                <Badge className="absolute -top-3 right-4 bg-secondary text-secondary-foreground">Most Popular</Badge>
              )}
              <div className="flex items-center gap-2 mb-3">
                <Ship className="h-5 w-5 text-primary" />
                <h3 className="font-bold text-foreground">{pkg.title}</h3>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {pkg.duration}</span>
                <span className="flex items-center gap-1"><Users className="h-4 w-4" /> Per Person</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{pkg.route}</p>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">Starting from</p>
                  <p className="text-2xl font-bold text-primary">₹{pkg.startingFrom.toLocaleString("en-IN")}</p>
                </div>
                <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-transform duration-200" asChild>
                  <a href="#contact">Contact Us</a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className={`bg-card rounded-xl p-8 shadow-card border border-border max-w-3xl mx-auto ${isVisible ? "animate-fade-up delay-700" : "opacity-0"}`}>
          <h3 className="text-lg font-bold text-foreground mb-4">Package Inclusions</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {inclusions.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4 italic">
            * Rates valid Oct 2025 – Mar 2026 (except 15 Dec – 15 Jan). Subject to availability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
