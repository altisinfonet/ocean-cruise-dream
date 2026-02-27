import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is the best time to visit the Andaman Islands?",
    answer:
      "The best time to visit Andaman is from October to May when the weather is pleasant with calm seas, ideal for water sports and sightseeing. The monsoon season (June–September) brings heavy rainfall and rough seas, so ferry services may be disrupted.",
  },
  {
    question: "Do I need a permit to visit the Andaman Islands?",
    answer:
      "Indian nationals do not need a special permit for Port Blair, Havelock, or Neil Island. However, a Restricted Area Permit (RAP) is required for visiting tribal reserves and certain remote islands like Diglipur. Foreign nationals receive a permit on arrival at Port Blair airport, valid for 30 days.",
  },
  {
    question: "How do I reach the Andaman Islands?",
    answer:
      "The most convenient way is by flight to Veer Savarkar International Airport in Port Blair. Direct flights are available from major Indian cities like Delhi, Mumbai, Kolkata, Chennai, and Bangalore. You can also travel by ship from Chennai or Kolkata, which takes approximately 50–60 hours.",
  },
  {
    question: "Is Andaman safe for families and solo travellers?",
    answer:
      "Yes, Andaman is one of the safest destinations in India. It is very welcoming for families, couples, and solo travellers. The local people are friendly, and the crime rate is very low. Basic precautions like anywhere else apply.",
  },
  {
    question: "What water sports are available in Andaman?",
    answer:
      "Andaman offers a wide range of water sports including scuba diving, snorkelling, sea walking, jet skiing, parasailing, glass-bottom boat rides, banana boat rides, and kayaking. Havelock Island and Neil Island are the most popular spots for these activities.",
  },
  {
    question: "How many days are enough to explore Andaman?",
    answer:
      "A 5-night/6-day trip is ideal to cover the major attractions — Port Blair, Havelock Island, and Neil Island. If you want to explore Diglipur, Baratang, or enjoy a more relaxed pace, consider a 7–8 day itinerary.",
  },
  {
    question: "Is there mobile network and internet available in Andaman?",
    answer:
      "BSNL and Airtel have the best coverage in Port Blair. On Havelock and Neil Island, network connectivity is limited — BSNL works reasonably well. Most hotels and resorts offer Wi-Fi, though speeds may be slower compared to mainland India.",
  },
  {
    question: "What should I pack for an Andaman trip?",
    answer:
      "Pack light cotton clothes, swimwear, sunscreen (SPF 50+), sunglasses, a hat, waterproof bags for electronics, reef-safe sunscreen, comfortable walking shoes, and any personal medications. Carry cash as ATM availability is limited on smaller islands.",
  },
];

const gradients = [
  "bg-gradient-to-r from-blue-50 to-cyan-50",
  "bg-gradient-to-r from-teal-50 to-emerald-50",
  "bg-gradient-to-r from-sky-50 to-indigo-50",
  "bg-gradient-to-r from-violet-50 to-purple-50",
  "bg-gradient-to-r from-pink-50 to-rose-50",
  "bg-gradient-to-r from-amber-50 to-yellow-50",
  "bg-gradient-to-r from-lime-50 to-green-50",
  "bg-gradient-to-r from-orange-50 to-red-50",
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="faq" className="py-20 px-4 bg-muted/30" ref={ref}>
      <div className="container mx-auto max-w-3xl">
        <div
          className={`text-center mb-14 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
        >
          <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-2">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Everything you need to know before planning your Andaman trip
          </p>
        </div>

        <div
          className={`transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
          style={{ animationDelay: "200ms" }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl px-5 shadow-card"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline gap-3">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-primary shrink-0" />
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pl-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
