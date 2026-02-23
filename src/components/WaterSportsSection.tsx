import scubaImg from "@/assets/scuba-diving.jpg";
import jetSkiImg from "@/assets/jet-ski.jpg";
import { Waves } from "lucide-react";

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

const WaterSportsSection = () => (
  <section id="watersports" className="py-20 px-4">
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-2">Adventure Awaits</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Water Sports</h2>
      </div>

      {/* Images row */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="rounded-xl overflow-hidden shadow-card aspect-[4/3]">
          <img src={scubaImg} alt="Scuba diving in Andaman" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="rounded-xl overflow-hidden shadow-card aspect-[4/3]">
          <img src={jetSkiImg} alt="Jet ski in Andaman" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>

      {/* Pricing grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {activities.map((loc) => (
          <div key={loc.location} className="bg-card rounded-xl p-6 shadow-card border border-border">
            <div className="flex items-center gap-2 mb-4">
              <Waves className="h-5 w-5 text-primary" />
              <h3 className="font-bold text-foreground">{loc.location}</h3>
            </div>
            <div className="space-y-3">
              {loc.items.map((item) => (
                <div key={item.name} className="flex justify-between items-center text-sm">
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

export default WaterSportsSection;
