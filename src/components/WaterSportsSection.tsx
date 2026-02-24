import ShimmerImage from "@/components/ShimmerImage";
import scubaImg from "@/assets/scuba-diving.jpg";
import jetSkiImg from "@/assets/jet-ski.jpg";
import { Waves } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const activities = [
  { location: "Port Blair", items: [
    { name: "Jet Ski Ride", price: 600 },
    { name: "Parasailing", price: 3000 },
    { name: "Snorkeling", price: 1000 },
    { name: "Scuba Diving", price: 3500 },
  ]},
  { location: "Havelock", items: [
    { name: "Jet Ski Ride", price: 800 },
    { name: "Parasailing", price: 3500 },
    { name: "Snorkeling", price: 1000 },
    { name: "Scuba Diving (Shore)", price: 3500 },
    { name: "Scuba Diving (Boat)", price: 5500 },
  ]},
  { location: "Neil Island", items: [
    { name: "Jet Ski Ride", price: 600 },
    { name: "Parasailing", price: 3000 },
    { name: "Snorkeling", price: 1000 },
    { name: "Scuba Diving", price: 4500 },
    { name: "Banana Ride", price: 600 },
  ]},
];

const WaterSportsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="watersports" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto">
        <div className={`text-center mb-14 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-2">Adventure Awaits</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Water Sports</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className={`rounded-xl overflow-hidden shadow-card aspect-[4/3] group ${isVisible ? "animate-slide-right" : "opacity-0"}`}>
            <ShimmerImage src={scubaImg} alt="Scuba diving in Andaman" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" wrapperClassName="w-full h-full" loading="lazy" />
          </div>
          <div className={`rounded-xl overflow-hidden shadow-card aspect-[4/3] group ${isVisible ? "animate-slide-left" : "opacity-0"}`}>
            <ShimmerImage src={jetSkiImg} alt="Jet ski in Andaman" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" wrapperClassName="w-full h-full" loading="lazy" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {activities.map((loc, i) => (
            <div
              key={loc.location}
              className={`bg-card rounded-xl p-6 shadow-card border border-border transition-all duration-500 hover:-translate-y-2 hover:shadow-ocean ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${400 + i * 150}ms` }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Waves className="h-5 w-5 text-primary" />
                <h3 className="font-bold text-foreground">{loc.location}</h3>
              </div>
              <div className="space-y-3">
                {loc.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-center text-sm group/row hover:bg-muted/50 rounded-md px-2 py-1 -mx-2 transition-colors">
                    <span className="text-muted-foreground">{item.name}</span>
                    <span className="font-semibold text-foreground">₹{item.price.toLocaleString("en-IN")}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-3 italic">Per person rate</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WaterSportsSection;
