"use client";

import { useState, useEffect, useCallback } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "GPS Tracking Dashboard",
    description: "Real-time fleet tracking with live map visualizations and analytics.",
    tech: ["React.js", "Next.js", "TypeScript"],
  },
  {
    title: "Mizban Cloud Panel",
    description: "Cloud server management with VM provisioning and monitoring.",
    tech: ["Vue 3", "TypeScript"],
    url: "https://mizbancloud.com",
  },
  {
    title: "Aparat",
    description: "Iran's largest video sharing platform with millions of users.",
    tech: ["JavaScript", "Vue.js"],
    url: "https://www.aparat.com",
  },
  {
    title: "Filimo",
    description: "Premium streaming service for movies and TV shows.",
    tech: ["JavaScript", "Vue.js"],
    url: "https://www.filimo.com",
  },
  {
    title: "Owlestic",
    description: "Personal portfolio and blog showcasing development work.",
    tech: ["Nuxt.js", "TypeScript"],
    url: "https://owlestic.ir",
  },
];

export function ProjectsSection() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrent((p) => (p + 1) % projects.length);
  }, []);

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrent((p) => (p - 1 + projects.length) % projects.length);
  };

  const goTo = (index: number) => {
    setIsAutoPlaying(false);
    setCurrent(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next]);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-sm font-mono text-primary tracking-wider uppercase">
            Selected Work
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => { setIsAutoPlaying(false); next(); }}
              className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className="w-full flex-shrink-0 px-1">
                <div className="p-8 md:p-12 rounded-xl bg-card border border-border">
                  <div className="max-w-2xl">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="text-2xl md:text-3xl font-semibold">{project.title}</h3>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors shrink-0"
                          aria-label={`Visit ${project.title}`}
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === current ? "bg-primary" : "bg-border hover:bg-muted-foreground"
              }`}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
