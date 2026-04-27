"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const websites = [
  { url: "https://ali-zokaei-women-salon.vercel.app/", title: "Women Salon", description: "Women's Salon" },
  { url: "https://psycho-tatto.vercel.app/", title: "Tattoo Artist", description: "Tattoo Art Studio" },
  { url: "https://ali-zokaei-personal-branding.vercel.app/", title: "Personal Branding", description: "Personal Brand Website" },
  { url: "https://car-show-wine.vercel.app/", title: "Car Show", description: "Automobile Exhibition" },
  { url: "https://travel-three-smoky.vercel.app/", title: "Tours And Travels", description: "Tourism and travel services" },
  { url: "https://crypto-exchange-arnitex.netlify.app/", title: "Crypto Exchange", description: "Cryptocurrency Trading" },
  { url: "https://nails-opal.vercel.app/", title: "Opal Nails", description: "Women's Nail Art" },
  { url: "https://ali-zokaei.vercel.app/", title: "Yello", description: "Holding for Logestic and other businesses" },
  { url: "https://nails-purple.vercel.app/", title: "Purple Nails", description: "Women's Nail Art" },
  { url: "https://afsane-rohani-personal-brand.vercel.app/", title: "Legal Lawyer", description: "Legal Services" },

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
      className="h-[calc(100vh-64px)] px-4 sm:px-6 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto h-full flex flex-col">
        <div className="pt-8 mb-8">
          <h2 className="text-sm font-mono text-primary tracking-wider uppercase hover:text-green-500 transition-colors">
            Selected Works
          </h2>
        </div>

        {/* Title Carousel */}
        <div className="mb-4 overflow-hidden">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {websites.map((website, index) => (
              <div key={index} className="w-full flex-shrink-0 text-center">
                <a
                  href={website.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-green-500 transition-colors"
                >
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground hover:text-green-500 transition-colors break-words">
                    {website.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground mt-2 hover:text-green-500 transition-colors">
                    {website.description}
                  </p>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Main Carousel Container */}
        <div 
          className="relative flex-1 overflow-hidden rounded-xl border border-border group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-[90px] lg:h-[90px] rounded-lg bg-black/50 backdrop-blur-sm border border-border/50 hover:border-green-500 hover:text-green-500 transition-all flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100"
            aria-label="Previous"
          >
            <ChevronLeft size={16} className="sm:size-4 md:size-5 lg:size-8" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-[90px] lg:h-[90px] rounded-lg bg-black/50 backdrop-blur-sm border border-border/50 hover:border-green-500 hover:text-green-500 transition-all flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100"
            aria-label="Next"
          >
            <ChevronRight size={16} className="sm:size-4 md:size-5 lg:size-8" />
          </button>
          
          {/* Clickable overlay for iframe */}
          <a
            href={websites[currentIndex].url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-20 flex items-center justify-center bg-black/0 hover:bg-black/10 transition-colors cursor-pointer"
          >
            <div className="text-white text-xs sm:text-sm opacity-0 hover:opacity-100 transition-opacity bg-black/50 px-2 sm:px-4 py-1 sm:py-2 rounded-lg">
              Click to visit website
            </div>
          </a>

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


      </div>
    </section>
  );
}