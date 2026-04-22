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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const nextSlide = () => {
    if (isTransitioning) return;
    setDirection('right');
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % websites.length);
      setIsTransitioning(false);
    }, 50);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setDirection('left');
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + websites.length) % websites.length);
      setIsTransitioning(false);
    }, 50);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setDirection(index > currentIndex ? 'right' : 'left');
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 50);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => clearInterval(interval);
  }, [isTransitioning]);

  return (
    <div className="w-full max-w-7xl mx-auto h-screen relative overflow-hidden flex flex-col">
      {/* Main Carousel Container */}
      <div className="relative flex-1 px-[7vw]">
        {/* Current Slide */}
        <div
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            isTransitioning
              ? 'opacity-0 scale-110'
              : 'opacity-100 scale-100'
          }`}
        >
          <iframe
            src={websites[currentIndex].url}
            title={websites[currentIndex].title}
            className="w-full h-full"
            loading="lazy"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
        </div>
        
        {/* Next Slide (hidden until transition) */}
        <div
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            isTransitioning && direction === 'right'
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-90'
          }`}
        >
          <iframe
            src={websites[(currentIndex + 1) % websites.length].url}
            title={websites[(currentIndex + 1) % websites.length].title}
            className="w-full h-full"
            loading="lazy"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
        </div>
        
        {/* Previous Slide (hidden until transition) */}
        <div
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            isTransitioning && direction === 'left'
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-90'
          }`}
        >
          <iframe
            src={websites[(currentIndex - 1 + websites.length) % websites.length].url}
            title={websites[(currentIndex - 1 + websites.length) % websites.length].title}
            className="w-full h-full"
            loading="lazy"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-[7vw] top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border border-border rounded-lg w-20 h-20 hover:bg-background transition-all hover:scale-110 z-10 flex items-center justify-center cursor-pointer"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-[7vw] top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border border-border rounded-lg w-20 h-20 hover:bg-background transition-all hover:scale-110 z-10 flex items-center justify-center cursor-pointer"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Slide Info */}
      <div className="absolute bottom-8 left-[7vw] right-[7vw] bg-background/80 backdrop-blur-sm border border-border rounded-xl p-6 z-10">
        <a
          href={websites[currentIndex].url}
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:bg-background/50 transition-colors rounded-lg p-4 -m-4"
        >
          <h3 className="font-semibold text-2xl mb-2 hover:text-primary transition-colors">
            {websites[currentIndex].title}
          </h3>
          <p className="text-lg text-muted-foreground">{websites[currentIndex].description}</p>
          <p className="text-sm text-primary mt-2">Click to visit website →</p>
        </a>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-3 py-8">
        {websites.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all ${
              index === currentIndex
                ? "bg-primary w-12"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
