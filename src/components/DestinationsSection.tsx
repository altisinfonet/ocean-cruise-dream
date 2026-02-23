import portBlairImg from "@/assets/port-blair.jpg";
import havelockImg from "@/assets/havelock.jpg";
import neilImg from "@/assets/neil-island.jpg";
import { MapPin } from "lucide-react";

const destinations = [
  {
    name: "Port Blair",
    image: portBlairImg,
    description: "The capital city — explore Cellular Jail, Corbyn's Cove Beach, and Ross Island.",
  },
  {
    name: "Havelock Island",
    image: havelockImg,
    description: "Home to Radhanagar Beach, one of Asia's best beaches. Perfect for diving & snorkeling.",
  },
  {
    name: "Neil Island",
    image: neilImg,
    description: "The 'vegetable bowl' of Andaman — discover the natural rock bridge and serene beaches.",
  },
];

const DestinationsSection = () => (
  <section id="destinations" className="py-20 px-4">
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-2">Explore</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Andaman Islands</h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Discover the most breathtaking destinations in the Andaman archipelago
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {destinations.map((d) => (
          <div key={d.name} className="group relative rounded-xl overflow-hidden shadow-card bg-card hover:shadow-ocean transition-shadow duration-300">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={d.image} alt={d.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="h-4 w-4 text-secondary" />
                <h3 className="text-lg font-bold text-foreground">{d.name}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{d.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DestinationsSection;
