import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/919804347462?text=Hi%20BookNGo%2C%20I%27m%20interested%20in%20Andaman%20tour%20packages"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-ocean hover:scale-110 transition-transform duration-200"
  >
    <MessageCircle className="h-7 w-7" />
  </a>
);

export default WhatsAppButton;
