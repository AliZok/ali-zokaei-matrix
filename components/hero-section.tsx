"use client";

import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { MatrixRain } from "./matrix-rain";
import { WebsiteCarousel } from "./website-carousel";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [showName, setShowName] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "< WEB DEVELOPER />";

  useEffect(() => {
    // Start name animation after component mounts
    const nameTimer = setTimeout(() => setShowName(true), 100);
    
    // Start subtitle typing after name animation completes
    const subtitleTimer = setTimeout(() => {
      setShowSubtitle(true);
      startTyping();
    }, 1500);

    return () => {
      clearTimeout(nameTimer);
      clearTimeout(subtitleTimer);
    };
  }, []);

  const startTyping = () => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
        // Continue cursor blinking animation after typing completes
        // The cursor will keep blinking due to the animate-pulse class
      }
    }, 120);
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <MatrixRain />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 py-32 text-center">
          <div className={`text-primary font-mono text-sm mb-6 tracking-wider uppercase transition-all duration-1000 ${showSubtitle ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            {typedText}
            <span className={`inline-block w-0.5 h-4 bg-primary ml-1 ${showCursor ? 'animate-cursor-blink' : 'hidden'}`}></span>
          </div>

          <h1 className={`text-5xl md:text-7xl font-bold tracking-tight mb-6 transition-all duration-1000 transform ${showName ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-16 scale-75'}`}>
            <span className="inline-block">
              {showName && (
                <>
                  <span className="inline-block animate-slide-from-top" style={{ animationDelay: '0ms' }}>A</span>
                  <span className="inline-block animate-slide-from-top" style={{ animationDelay: '50ms' }}>L</span>
                  <span className="inline-block animate-slide-from-top" style={{ animationDelay: '100ms' }}>I</span>
                  <span className="inline-block animate-slide-from-top mx-3" style={{ animationDelay: '150ms' }}></span>
                  <span className="inline-block animate-slide-from-top" style={{ animationDelay: '200ms' }}>Z</span>
                  <span className="inline-block animate-slide-from-top" style={{ animationDelay: '250ms' }}>O</span>
                  <span className="inline-block animate-slide-from-top" style={{ animationDelay: '300ms' }}>K</span>
                  <span className="inline-block animate-slide-from-top" style={{ animationDelay: '350ms' }}>A</span>
                  <span className="inline-block animate-slide-from-top" style={{ animationDelay: '400ms' }}>E</span>
                  <span className="inline-block animate-slide-from-top" style={{ animationDelay: '450ms' }}>I</span>
                </>
              )}
            </span>
          </h1>

          <p className={`text-lg text-muted-foreground max-w-xl mx-auto mb-6 leading-relaxed transition-all duration-1000 ${showName ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Building pixel-perfect, accessible user interfaces with 6 years of experience 
            in Vue.js, React.js, Next.js, and TypeScript.
          </p>

          <div className={`flex items-center justify-center gap-2 text-muted-foreground text-sm mb-10 transition-all duration-1000 ${showName ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <MapPin size={14} />
            <span>Yerevan, Armenia</span>
          </div>

          <div className={`flex items-center justify-center gap-3 transition-all duration-1000 ${showName ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a
              href="https://github.com/AliZok"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/ali-zokaei-frontend-developer"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:ali.zokaei.1367@gmail.com"
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-5 h-9 rounded-full border-2 border-border flex items-start justify-center p-1.5">
            <div className="w-1 h-2 bg-muted-foreground rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes slide-from-top {
          from {
            opacity: 0;
            transform: translateY(-40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cursor-blink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0;
          }
        }

        .animate-slide-from-top {
          animation: slide-from-top 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-cursor-blink {
          animation: cursor-blink 1s infinite;
        }
      `}</style>
    </>
  );
}
