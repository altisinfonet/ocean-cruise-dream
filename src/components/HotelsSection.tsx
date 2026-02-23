import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Hotel } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const hotelData = [
  {
    destination: "Port Blair",
    rows: [
      {
        economy: "Anchorange Inn",
        standard: "Da Bay Inn (Sea View Room)",
        deluxe: "The North Reef",
        superDeluxe: "S R Castle",
        luxury: "Heritage MNR",
        premium: "Sea Hell",
      },
      {
        economy: "M K Residency",
        standard: "Sea Gull (Sea View Room)",
        deluxe: "A T Villa",
        superDeluxe: "Sea Port",
        luxury: "Mansha Regency",
        premium: "Sea Shell Coral Cove",
      },
      {
        economy: "Konark Residency",
        standard: "",
        deluxe: "",
        superDeluxe: "",
        luxury: "",
        premium: "",
      },
    ],
  },
  {
    destination: "Havelock",
    rows: [
      {
        economy: "Honeymoon Beach Resort",
        standard: "Eldorado Beach Resort",
        deluxe: "Radha Krishna Resort",
        superDeluxe: "Holdday N Holiday Beach Resort",
        luxury: "Havelock Island Beach Resort",
        premium: "Sandyy Wavess",
      },
      {
        economy: "Green Wood Beach Resort",
        standard: "Haven Garden Resort",
        deluxe: "Ocean Blue Resort",
        superDeluxe: "Aquays Hotel & Resort",
        luxury: "Symphony Palms Beach Resort",
        premium: "",
      },
    ],
  },
  {
    destination: "Neil Island",
    rows: [
      {
        economy: "Hotel Shreesh",
        standard: "Dream Haven Resort",
        deluxe: "Save Green Beach Resort",
        superDeluxe: "Pearl Park Hotel & Resort",
        luxury: "Aquays",
        premium: "Sea Shell",
      },
      {
        economy: "Neil Banjara",
        standard: "Neil Banjara",
        deluxe: "C S Empire Resort",
        superDeluxe: "Tango Beach Summer Sand",
        luxury: "Symphony",
        premium: "",
      },
    ],
  },
];

const categories = ["Economy", "Standard", "Deluxe", "Super Deluxe", "Luxury", "Premium"];
const categoryKeys = ["economy", "standard", "deluxe", "superDeluxe", "luxury", "premium"] as const;

const HotelsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="hotels" className="py-20 px-4 bg-muted/30" ref={ref}>
      <div className="container mx-auto">
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-2">Stay</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Hotel Envisaged</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Handpicked hotels across all categories for your perfect Andaman stay
          </p>
        </div>

        <div className={`overflow-x-auto rounded-xl border border-border bg-card shadow-card transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
          <Table>
            <TableHeader>
              <TableRow className="bg-primary/10">
                <TableHead className="font-bold text-foreground min-w-[120px]">Destination</TableHead>
                {categories.map((cat) => (
                  <TableHead key={cat} className="font-bold text-foreground text-center min-w-[130px]">{cat}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {hotelData.map((dest) =>
                dest.rows.map((row, rowIdx) => (
                  <TableRow key={`${dest.destination}-${rowIdx}`}>
                    {rowIdx === 0 ? (
                      <TableCell rowSpan={dest.rows.length} className="font-bold text-foreground align-top border-r border-border">
                        <div className="flex items-center gap-2">
                          <Hotel className="h-4 w-4 text-primary" />
                          {dest.destination}
                        </div>
                      </TableCell>
                    ) : null}
                    {categoryKeys.map((key) => (
                      <TableCell key={key} className="text-center text-sm text-muted-foreground">
                        {row[key] || "—"}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default HotelsSection;
