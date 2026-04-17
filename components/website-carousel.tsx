"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const websites = [
  {
    url: "https://ali-zokaei-women-salon.vercel.app/",
    title: "Arayeshgah Zanune",
    description: "Women's Salon"
  },
  {
    url: "https://psycho-tatto.vercel.app/",
    title: "Tattoo Artist",
    description: "Tattoo Art Studio"
  },
  {
    url: "https://ali-zokaei-personal-branding.vercel.app/",
    title: "Personal Branding",
    description: "Personal Brand Website"
  },
  {
    url: "https://car-show-wine.vercel.app/",
    title: "Car Show",
    description: "Automobile Exhibition"
  },
  {
    url: "https://crypto-exchange-arnitex.netlify.app/",
    title: "Crypto Exchange",
    description: "Cryptocurrency Trading"
  },
  {
    url: "https://nails-purple.vercel.app/",
    title: "Nails Purple",
    description: "Women's Nail Art"
  }
];

export function WebsiteCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % websites.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + websites.length) % websites.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="relative">
        {/* Main Carousel Container */}
        <div className="relative aspect-video rounded-lg overflow-hidden border border-border bg-muted/20">
          <iframe
            src={websites[currentIndex].url}
            title={websites[currentIndex].title}
            className="w-full h-full"
            loading="lazy"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border border-border rounded-full p-2 hover:bg-background transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border border-border rounded-full p-2 hover:bg-background transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Slide Info */}
        <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-sm border border-border rounded-lg p-4">
          <h3 className="font-semibold text-lg">{websites[currentIndex].title}</h3>
          <p className="text-sm text-muted-foreground">{websites[currentIndex].description}</p>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {websites.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-primary w-8"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Website Grid Preview */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
        {websites.map((website, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
              index === currentIndex
                ? "border-primary shadow-lg scale-105"
                : "border-border hover:border-muted-foreground/50"
            }`}
          >
            <iframe
              src={website.url}
              title={website.title}
              className="w-full h-full scale-50 origin-top-left"
              loading="lazy"
              sandbox="allow-same-origin allow-scripts"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-2">
              <p className="text-xs font-medium truncate">{website.title}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
