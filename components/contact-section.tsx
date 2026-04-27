"use client";

import { Mail, Phone, MapPin, Linkedin, Globe, Send } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const contacts = [
  { icon: Mail, label: "Email", value: "ali.zokaei.1367@gmail.com", href: "mailto:ali.zokaei.1367@gmail.com" },
  { icon: Send, label: "Telegram", value: "+989124888723", href: "https://t.me/+989124888723" },
  { icon: Phone, label: "Phone", value: "+374 93 662054", href: "tel:+37493662054" },
  { icon: MapPin, label: "Location", value: "Yerevan, Armenia", href: null },
  { icon: Linkedin, label: "LinkedIn", value: "ali-zokaei-frontend-developer", href: "https://www.linkedin.com/in/ali-zokaei-frontend-developer" },
  // { icon: Globe, label: "Website", value: "owlestic.ir", href: "https://owlestic.ir" },
];

export function ContactSection() {
  const sectionRef = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="contact" ref={sectionRef.ref} className="py-24 px-4 sm:px-6 bg-muted/30 overflow-x-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-xl">
          <h2 
            className={`text-sm font-mono text-primary mb-4 tracking-wider uppercase transition-all duration-700 ease-out ${
              sectionRef.isIntersecting 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-8'
            }`}
          >
            Contact
          </h2>
          <p 
            className={`text-3xl font-semibold mb-4 transition-all duration-700 ease-out ${
              sectionRef.isIntersecting 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-8'
            }`}
            style={{ transitionDelay: sectionRef.isIntersecting ? '100ms' : '0ms' }}
          >
            Let&apos;s work together
          </p>
          <p 
            className={`text-muted-foreground mb-12 leading-relaxed transition-all duration-700 ease-out ${
              sectionRef.isIntersecting 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-8'
            }`}
            style={{ transitionDelay: sectionRef.isIntersecting ? '200ms' : '0ms' }}
          >
            I&apos;m currently available for freelance projects and full-time opportunities.
            Feel free to reach out if you have an interesting project in mind.
          </p>

          <div className="space-y-4">
            {contacts.map((item, index) => {
              const content = (
                <div 
                  className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-card transition-all duration-700 ease-out group overflow-hidden ${
                    sectionRef.isIntersecting 
                      ? 'opacity-100 translate-x-0 scale-100' 
                      : 'opacity-0 translate-x-full scale-95'
                  }`}
                  style={{ 
                    transitionDelay: sectionRef.isIntersecting ? `${300 + index * 150}ms` : '0ms',
                    transformOrigin: index % 2 === 0 ? 'left center' : 'right center'
                  }}
                >
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-card border border-border flex items-center justify-center group-hover:border-primary transition-all duration-500 ease-out flex-shrink-0 ${
                    sectionRef.isIntersecting 
                      ? 'opacity-100 scale-100 rotate-0' 
                      : 'opacity-0 scale-0 rotate-180'
                  }`}
                  style={{ 
                    transitionDelay: sectionRef.isIntersecting ? `${400 + index * 150}ms` : '0ms'
                  }}
                  >
                    <item.icon size={14} className="sm:size-[18px] text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className={`transition-all duration-600 ease-out overflow-hidden ${
                    sectionRef.isIntersecting 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: sectionRef.isIntersecting ? `${500 + index * 150}ms` : '0ms' }}
                  >
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                    <p className="text-sm font-medium break-all sm:break-words">{item.value}</p>
                  </div>
                </div>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
