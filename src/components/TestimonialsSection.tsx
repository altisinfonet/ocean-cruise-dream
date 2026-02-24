import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    review:
      "BookNGo made our Andaman trip absolutely magical! The itinerary was perfectly planned, and the hotel recommendations were spot on. Havelock Island was a dream come true!",
  },
  {
    name: "Rahul Mehta",
    location: "Delhi",
    rating: 5,
    review:
      "We had an incredible experience with scuba diving and jet skiing. The team was very responsive and took care of every detail. Highly recommend their honeymoon package!",
  },
  {
    name: "Ananya Gupta",
    location: "Bengaluru",
    rating: 4,
    review:
      "The family package was wonderful — kids loved the glass-bottom boat ride! Great value for money and the local guides were very knowledgeable about the islands.",
  },
  {
    name: "Vikram Singh",
    location: "Kolkata",
    rating: 5,
    review:
      "Third time booking with BookNGo and they never disappoint. Neil Island sunset was breathtaking. Their customer service is unmatched — available 24/7 on WhatsApp!",
  },
  {
    name: "Sneha Patel",
    location: "Ahmedabad",
    rating: 5,
    review:
      "From airport pickup to drop-off, everything was seamless. The cruise experience and Port Blair sightseeing were highlights. Already planning our next trip!",
  },
  {
    name: "Arjun Nair",
    location: "Chennai",
    rating: 4,
    review:
      "Loved the adventure package! Snorkeling at Elephant Beach was the best experience of my life. BookNGo's local expertise really makes a difference.",
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={cn(
          "h-4 w-4",
          i < rating ? "fill-secondary text-secondary" : "text-muted-foreground/30"
        )}
      />
    ))}
  </div>
);

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={cn(
            "text-center mb-12 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            What Our Travelers Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real experiences from happy travelers who explored the Andaman &amp; Nicobar Islands with BookNGo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Card
              key={t.name}
              className={cn(
                "border-border/50 hover:shadow-lg transition-all duration-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : "0ms" }}
            >
              <CardContent className="p-6">
                <StarRating rating={t.rating} />
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  "{t.review}"
                </p>
                <div className="flex items-center gap-3 mt-5">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback className="bg-primary text-primary-foreground text-xs font-semibold">
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
