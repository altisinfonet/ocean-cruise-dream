import { MapPin, Phone, Mail, Globe } from "lucide-react";

const Footer = () => (
  <footer id="contact" className="ocean-gradient text-primary-foreground py-16 px-4">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-3 gap-10 mb-10">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-extrabold mb-2">
            BOOK<span className="text-secondary">N</span>GO
          </h3>
          <p className="text-primary-foreground/70 text-sm italic mb-4">the easiest way to</p>
          <p className="text-primary-foreground/80 text-sm leading-relaxed">
            Your trusted partner for Andaman & Nicobar Islands tourism. Transparent pricing, unforgettable experiences.
          </p>
        </div>

        {/* Head Office */}
        <div>
          <h4 className="font-bold mb-3">Head Office</h4>
          <div className="space-y-2 text-sm text-primary-foreground/80">
            <p className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> M.B. Road, Near Axis Bank ATM, Kolkata-700051, West Bengal, India</p>
          </div>
          <h4 className="font-bold mt-5 mb-3">Port Blair Office</h4>
          <div className="space-y-2 text-sm text-primary-foreground/80">
            <p className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> Sippighat, Jodakilan, Near Kali Mandir, South Andaman-744105</p>
            <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> 03192 204936</p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold mb-3">Get In Touch</h4>
          <div className="space-y-2 text-sm text-primary-foreground/80">
            <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> 98043 47462</p>
            <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@booksngo.com</p>
            <p className="flex items-center gap-2"><Globe className="h-4 w-4" /> www.booksngo.com</p>
          </div>
        </div>
      </div>

      {/* Maps */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div>
          <h4 className="font-bold mb-3 text-sm">Head Office – Kolkata</h4>
          <div className="rounded-lg overflow-hidden border border-primary-foreground/20 aspect-video">
            <iframe
              title="BookNGo Head Office Kolkata"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.5!2d88.35!3d22.49!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDI5JzI0LjAiTiA4OMKwMjEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-3 text-sm">Port Blair Office</h4>
          <div className="rounded-lg overflow-hidden border border-primary-foreground/20 aspect-video">
            <iframe
              title="BookNGo Port Blair Office"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15542.5!2d92.72!3d11.62!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDM3JzEyLjAiTiA5MsKwNDMnMTIuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 pt-6 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} BookNGo. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
