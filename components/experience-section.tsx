"use client";

import { ExternalLink } from "lucide-react";

const experiences = [
  {
    period: "2024 — Present",
    title: "Frontend Developer",
    company: "GPS Tracking Company",
    description: "Building real-time GPS tracking dashboards with React.js and Next.js. Implementing live map visualizations and data analytics features.",
    skills: ["React.js", "Next.js", "TypeScript", "Maps"],
  },
  {
    period: "2022 — 2024",
    title: "Frontend Developer",
    company: "Mizban Cloud",
    url: "https://mizbancloud.com",
    description: "Developed cloud service control panels using Vue 3 Composition API. Built server management dashboards and real-time chat features.",
    skills: ["Vue 3", "Composition API", "TypeScript"],
  },
  {
    period: "2019 — 2022",
    title: "Frontend Developer",
    company: "Saba Idea Holding",
    description: "Contributed to major Iranian platforms including Aparat (video sharing) and Filimo (streaming service). Worked with jQuery, JavaScript, and modern frameworks.",
    skills: ["JavaScript", "jQuery", "Vue.js"],
    links: [
      { name: "Aparat", url: "https://www.aparat.com" },
      { name: "Filimo", url: "https://www.filimo.com" },
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm font-mono text-primary mb-12 tracking-wider uppercase">Experience</h2>

        <div className="space-y-1">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-[180px_1fr] gap-4 p-6 -mx-6 rounded-lg hover:bg-card transition-colors"
            >
              <p className="text-sm text-muted-foreground font-mono shrink-0">
                {exp.period}
              </p>

              <div>
                <div className="flex items-start gap-2 mb-2">
                  <h3 className="font-medium group-hover:text-primary transition-colors">
                    {exp.title} <span className="text-muted-foreground">·</span> {exp.company}
                  </h3>
                  {exp.url && (
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors mt-0.5"
                      aria-label={`Visit ${exp.company}`}
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap items-center gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs bg-primary/10 text-primary rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                  {exp.links?.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                      <ExternalLink size={10} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
