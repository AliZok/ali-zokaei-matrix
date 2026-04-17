"use client";

import { WebsiteCarousel } from "./website-carousel";

const skills = [
  { category: "Frameworks", items: ["Vue.js", "Nuxt.js", "React.js", "Next.js"] },
  { category: "Languages", items: ["TypeScript", "JavaScript", "HTML5", "CSS3"] },
  { category: "Styling", items: ["Tailwind CSS", "SCSS", "Bootstrap", "Vuetify"] },
  { category: "Tools", items: ["Git", "Figma", "Storybook", "Vitest"] },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-mono text-primary mb-4 tracking-wider">ABOUT</h2>
            <p className="text-2xl md:text-3xl font-semibold leading-relaxed mb-6">
              I&apos;m a frontend developer passionate about crafting accessible, 
              pixel-perfect digital experiences.
            </p>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With over 6 years of experience, I specialize in building modern web applications 
                using Vue.js, React.js, and TypeScript. I focus on creating efficient, maintainable 
                code and intuitive user interfaces.
              </p>
              <p>
                Currently working at GPS Tracking company, where I lead frontend development 
                and mentor junior developers. Previously, I&apos;ve contributed to projects at 
                Mizban Cloud and Saba Idea, working on everything from design systems to 
                complex dashboards.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-mono text-primary mb-8 tracking-wider">SKILLS</h3>
            <div className="grid sm:grid-cols-2 gap-8">
              {skills.map((group) => (
                <div key={group.category}>
                  <h4 className="text-sm text-muted-foreground mb-3">{group.category}</h4>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Website Showcase Section */}
      <div className="mt-24">
        <h2 className="text-sm font-mono text-primary mb-4 tracking-wider text-center">PROJECT SHOWCASE</h2>
        <p className="text-2xl md:text-3xl font-semibold text-center mb-12">
          Live Preview of Recent Projects
        </p>
        <WebsiteCarousel />
      </div>
    </section>
  );
}
