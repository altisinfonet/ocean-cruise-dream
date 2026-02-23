import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Destinations", href: "#destinations" },
  { label: "Packages", href: "#packages" },
  { label: "Water Sports", href: "#watersports" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#home" className="flex items-center gap-2">
          <span className="text-2xl font-extrabold tracking-tight">
            <span className="text-primary">BOOK</span>
            <span className="text-secondary">N</span>
            <span className="text-primary">GO</span>
          </span>
          <span className="hidden sm:block text-xs text-muted-foreground italic">the easiest way to</span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+919804347462" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
            <Phone className="h-4 w-4" /> 98043 47462
          </a>
          <Button size="sm" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 animate-pulse-glow hover:scale-105 transition-transform duration-200">
            Book Now
          </Button>
        </div>

        {/* Mobile/Tablet toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile/Tablet menu */}
      {open && (
        <div className="lg:hidden bg-card border-t border-border px-4 pb-4">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-sm font-medium text-foreground/80 hover:text-primary">
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-2 pt-2">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <a href="tel:+919804347462" className="text-sm text-muted-foreground">98043 47462</a>
          </div>
          <Button size="sm" className="mt-3 w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 animate-pulse-glow">
            Book Now
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
