"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const websites = [
  { url: "https://ali-zokaei-women-salon.vercel.app/", title: "Women Salon", description: "Women's Salon" },
  { url: "https://psycho-tatto.vercel.app/", title: "Tattoo Artist", description: "Tattoo Art Studio" },
  { url: "https://ali-zokaei-personal-branding.vercel.app/", title: "Personal Branding", description: "Personal Brand Website" },
  { url: "https://car-show-wine.vercel.app/", title: "Car Show", description: "Automobile Exhibition" },
  { url: "https://crypto-exchange-arnitex.netlify.app/", title: "Crypto Exchange", description: "Cryptocurrency Trading" },
  { url: "https://nails-purple.vercel.app/", title: "Nails Purple", description: "Women's Nail Art" }
];

export function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isHovered, setIsHovered] = useState(false); // اضافه کردن وضعیت هاور

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setDirection('right');
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % websites.length);
      setIsTransitioning(false);
    }, 50);
  }, [isTransitioning]);

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

  // مدیریت اتوپلی با شرط عدم هاور
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (!isHovered) {
      interval = setInterval(() => {
        nextSlide();
      }, 7000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovered, nextSlide]);

  return (
    <section 
      id="projects" 
      className="py-24 px-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-sm font-mono text-primary tracking-wider uppercase">
            Selected Works
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Title Carousel */}
        <div className="mb-8 overflow-hidden">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {websites.map((website, index) => (
              <div key={index} className="w-full flex-shrink-0 text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                  {website.title}
                </h3>
                <p className="text-lg text-muted-foreground mt-2">
                  {website.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Carousel Container */}
        <div className="relative h-[600px] overflow-hidden rounded-xl border border-border group">
          
          {/* لایه محافظ برای تشخیص موس روی آیفریم */}
          <div className="absolute inset-0 z-20 pointer-events-none group-hover:pointer-events-auto" />

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
              style={{ pointerEvents: isHovered ? 'auto' : 'none' }}
            />
          </div>
          
          {/* Next Slide */}
          <div
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              isTransitioning && direction === 'right'
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-90'
            }`}
          >
            <iframe
              src={websites[(currentIndex + 1) % websites.length].url}
              title="Next"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
          
          {/* Previous Slide */}
          <div
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              isTransitioning && direction === 'left'
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-90'
            }`}
          >
            <iframe
              src={websites[(currentIndex - 1 + websites.length) % websites.length].url}
              title="Prev"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {websites.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-primary w-8"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2"
              }`}
            />
          ))}
        </div>

        {/* Visit Website Link */}
        <div className="text-center mt-6">
          <a
            href={websites[currentIndex].url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            Visit Website
            <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}