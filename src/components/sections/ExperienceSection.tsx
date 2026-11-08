import * as React from "react";
import { experienceData, siteConfig } from "@/data";
import { Calendar, MapPin } from "lucide-react";

export function ExperienceSection() {
  const experienceCopy = siteConfig.sections.experience;

  return (
    <section id="experience" className="scroll-mt-20 py-20 px-4 sm:px-6 bg-[#e8f5ec] dark:bg-muted/30 border-y border-[#c8decb] dark:border-border transition-colors">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
            {experienceCopy.tag}
          </h2>
          <h3 className="mt-2 text-3xl font-extrabold text-foreground tracking-tight">
            {experienceCopy.heading}
          </h3>
          <p className="mt-3 text-sm text-muted-foreground">
            {experienceCopy.description}
          </p>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l-2 border-primary/30 space-y-12">
          {experienceData.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline marker node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary bg-card shadow-sm group-hover:scale-125 transition-transform duration-200">
                <div className="h-2 w-2 rounded-full bg-primary" />
              </div>

              {/* Card content */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:-translate-y-0.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-border">
                  <div>
                    <h4 className="text-lg font-bold text-foreground">
                      {item.role}
                    </h4>
                    <p className="text-sm font-semibold text-primary">
                      {item.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                      <span>{item.period}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </div>

                {/* Achievements list */}
                <ul className="mt-4 space-y-2.5">
                  {item.achievements.map((ach, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2.5 leading-relaxed">
                      <span className="text-primary font-bold mt-0.5">›</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies used */}
                <div className="mt-5 pt-3 border-t border-border flex flex-wrap gap-1.5">
                  {item.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border"
                    >
                      {t}
                    </span>
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
