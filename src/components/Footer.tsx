import { MapPin, Phone, Mail, Globe, Navigation } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const offices = [
  {
    name: "Head Office – Kolkata",
    address: "M.B. Road, Near Axis Bank ATM, Kolkata-700051, West Bengal, India",
    phone: null,
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.5!2d88.35!3d22.49!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDI5JzI0LjAiTiA4OMKwMjEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000",
  },
  {
    name: "Port Blair Office",
    address: "Sippighat, Jodakilan, Near Kali Mandir, South Andaman-744105",
    phone: "03192 204936",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15542.5!2d92.72!3d11.62!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDM3JzEyLjAiTiA5MsKwNDMnMTIuMCJF!5e0!3m2!1sen!2sin!4v1700000000000",
  },
];

const Footer = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <footer id="contact">
      <section className="bg-foreground py-20 px-4" ref={ref}>
        <div className="container mx-auto">
          <div className={`text-center mb-14 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
            <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-2">Get In Touch</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Contact Us</h2>
            <p className="text-primary-foreground/60 mt-3 max-w-lg mx-auto text-sm">
              Reach out to plan your dream Andaman getaway. We're here to help!
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-14 max-w-3xl mx-auto">
            {[
              { icon: Phone, label: "Call Us", value: "98043 47462", href: "tel:+919804347462" },
              { icon: Mail, label: "Email Us", value: "info@booksngo.com", href: "mailto:info@booksngo.com" },
              { icon: Globe, label: "Website", value: "www.booksngo.com", href: "https://www.booksngo.com" },
            ].map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                className={`flex flex-col items-center gap-3 p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:-translate-y-1 transition-all duration-300 group ${isVisible ? "animate-scale-in" : "opacity-0"}`}
                style={{ animationDelay: `${200 + i * 100}ms` }}
              >
                <div className="h-11 w-11 rounded-full bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 group-hover:scale-110 transition-all duration-300">
                  <item.icon className="h-5 w-5 text-secondary" />
                </div>
                <p className="text-xs text-primary-foreground/50 uppercase tracking-wider font-medium">{item.label}</p>
                <p className="text-sm text-primary-foreground font-semibold">{item.value}</p>
              </a>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {offices.map((office, i) => (
              <div
                key={office.name}
                className={`rounded-xl overflow-hidden border border-primary-foreground/10 bg-primary-foreground/5 hover:border-primary-foreground/20 transition-all duration-300 ${isVisible ? (i === 0 ? "animate-slide-right" : "animate-slide-left") : "opacity-0"}`}
                style={{ animationDelay: "500ms" }}
              >
                <div className="aspect-video">
                  <iframe title={office.name} src={office.mapSrc} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Navigation className="h-4 w-4 text-secondary" />
                    <h4 className="font-bold text-primary-foreground text-sm">{office.name}</h4>
                  </div>
                  <p className="text-sm text-primary-foreground/70 flex items-start gap-2">
                    <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary-foreground/40" />
                    {office.address}
                  </p>
                  {office.phone && (
                    <p className="text-sm text-primary-foreground/70 flex items-center gap-2 mt-1.5">
                      <Phone className="h-4 w-4 text-primary-foreground/40" />
                      {office.phone}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="ocean-gradient py-6 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-extrabold text-primary-foreground">
              BOOK<span className="text-secondary">N</span>GO
            </span>
            <span className="text-primary-foreground/50 text-xs italic">the easiest way to</span>
          </div>
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} BookNGo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
