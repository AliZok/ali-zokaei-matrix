"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const websites = [
  { url: "https://ali-zokaei-women-salon.vercel.app/", title: "Women Salon", description: "Women's Salon", imageUrl: "/women-salon.PNG" },
  { url: "https://psycho-tatto.vercel.app/", title: "Tattoo Artist", description: "Tattoo Art Studio", imageUrl: "/tatto.PNG" },
  { url: "https://ali-zokaei-personal-branding.vercel.app/", title: "Personal Branding", description: "Personal Brand Website", imageUrl: "/sam.PNG" },
  { url: "https://car-show-wine.vercel.app/", title: "Car Show", description: "Automobile Exhibition", imageUrl: "/car.PNG" },
  { url: "https://travel-three-smoky.vercel.app/", title: "Tours And Travels", description: "Tourism and travel services", imageUrl: "/travells.PNG" },
  { url: "https://crypto-exchange-arnitex.netlify.app/", title: "Crypto Exchange", description: "Cryptocurrency Trading", imageUrl: "/crypto.PNG" },
  { url: "https://nails-opal.vercel.app/", title: "Opal Nails", description: "Women's Nail Art", imageUrl: "/nails.PNG" },
  { url: "https://ali-zokaei.vercel.app/", title: "Yello", description: "Holding for Logestic and other businesses", imageUrl: "/yello.PNG" },
  { url: "https://nails-purple.vercel.app/", title: "Purple Nails", description: "Women's Nail Art", imageUrl: "/purple-nails.PNG" },
  { url: "https://afsane-rohani-personal-brand.vercel.app/", title: "Legal Lawyer", description: "Legal Services", imageUrl: "/legal.PNG" },

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
            className="absolute left-4 bottom-4 z-30 w-[70px] h-[70px] sm:left-2 sm:top-1/2 sm:-translate-y-1/2 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:left-4 lg:top-1/2 lg:-translate-y-1/2 lg:w-[90px] lg:h-[90px] rounded-lg bg-black/30 backdrop-blur-sm border border-white/20 hover:border-green-500 hover:text-green-500 active:border-green-500 active:text-green-500 transition-all flex items-center justify-center cursor-pointer opacity-50 sm:opacity-0 sm:group-hover:opacity-100 hover:opacity-100 shadow-lg shadow-black/20"
            aria-label="Previous"
          >
            <ChevronLeft size={24} className="sm:size-4 md:size-5 lg:size-8" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-4 bottom-4 z-30 w-[70px] h-[70px] sm:right-2 sm:top-1/2 sm:-translate-y-1/2 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:right-4 lg:top-1/2 lg:-translate-y-1/2 lg:w-[90px] lg:h-[90px] rounded-lg bg-black/30 backdrop-blur-sm border border-white/20 hover:border-green-500 hover:text-green-500 active:border-green-500 active:text-green-500 transition-all flex items-center justify-center cursor-pointer opacity-50 sm:opacity-0 sm:group-hover:opacity-100 hover:opacity-100 shadow-lg shadow-black/20"
            aria-label="Next"
          >
            <ChevronRight size={24} className="sm:size-4 md:size-5 lg:size-8" />
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

          {/* Slides Container */}
          <div className="relative w-full h-full overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {websites.map((website, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <img
                    src={website.imageUrl}
                    alt={website.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}