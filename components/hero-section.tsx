"use client";

import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { MatrixRain } from "./matrix-rain";
import { WebsiteCarousel } from "./website-carousel";

export function HeroSection() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <MatrixRain />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 py-32 text-center">
          <p className="text-primary font-mono text-sm mb-6 tracking-wider uppercase">
            Frontend Developer
          </p>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Ali Zokaei
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-6 leading-relaxed">
            Building pixel-perfect, accessible user interfaces with 6 years of experience 
            in Vue.js, React.js, Next.js, and TypeScript.
          </p>

          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm mb-10">
            <MapPin size={14} />
            <span>Yerevan, Armenia</span>
          </div>

          <div className="flex items-center justify-center gap-3">
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

    </>
  );
}
