import { useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import ShimmerImage from "@/components/ShimmerImage";

import img1 from "@/assets/gallery/andaman-1.jpg";
import img2 from "@/assets/gallery/andaman-2.jpg";
import img3 from "@/assets/gallery/andaman-3.jpg";
import img4 from "@/assets/gallery/andaman-4.jpg";
import img5 from "@/assets/gallery/andaman-5.jpg";
import img6 from "@/assets/gallery/andaman-6.jpg";
import img7 from "@/assets/gallery/andaman-7.jpg";
import img8 from "@/assets/gallery/andaman-8.jpg";
import img9 from "@/assets/gallery/andaman-9.jpg";

const photos = [
  { src: img1, alt: "Pristine white sandy beach with lush green forest and calm waters at Radhanagar Beach, Andaman", caption: "Radhanagar Beach" },
  { src: img2, alt: "ITT Majestic high-speed catamaran ferry on the turquoise Andaman Sea", caption: "Andaman Sea Ferry" },
  { src: img3, alt: "Happy group of tourists posing on the white sandy beach at Havelock Island, Andaman", caption: "Havelock Island" },
  { src: img4, alt: "Romantic candlelight beach dinner setup under palm trees at Andaman Islands", caption: "Romantic Beach Dinner" },
  { src: img5, alt: "Wooden boardwalk through dense mangrove forest in Andaman Islands", caption: "Mangrove Boardwalk" },
  { src: img6, alt: "Couple sitting on rocks with turquoise waves splashing at Neil Island, Andaman", caption: "Neil Island" },
  { src: img7, alt: "Stunning turquoise sea view from a shaded beach in Andaman Islands", caption: "Elephant Beach" },
  { src: img8, alt: "Dense mangrove forest meeting the emerald sea along the Andaman Islands shoreline", caption: "Baratang Island" },
  { src: img9, alt: "Serene early morning ocean view with mist rising from the shore at Diglipur, Andaman", caption: "Diglipur" },
];

const GallerySection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % photos.length : null));
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + photos.length) % photos.length : null));
  }, []);

  return (
    <>
      <section id="gallery" className="py-20 px-4 bg-muted/50" ref={ref}>
        <div className="container mx-auto">
          <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
            <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-2">Gallery</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Andaman in Pictures</h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Explore the stunning beauty of the Andaman Islands through our photo gallery
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((photo, i) => (
              <div
                key={i}
                className={`group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-card hover:shadow-ocean transition-all duration-500 hover:-translate-y-1 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
                style={{ animationDelay: `${200 + i * 100}ms` }}
                onClick={() => openLightbox(i)}
              >
                <ShimmerImage
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  wrapperClassName="w-full h-full"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-background font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                    View
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            className="absolute top-4 right-4 text-background hover:text-background/70 transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 text-background hover:text-background/70 transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 text-background hover:text-background/70 transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="h-10 w-10" />
          </button>

          <img
            src={photos[lightboxIndex].src}
            alt={photos[lightboxIndex].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-4 text-background/70 text-sm">
            {lightboxIndex + 1} / {photos.length}
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySection;
