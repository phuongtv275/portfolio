import * as React from "react";
import { personalData, siteConfig } from "@/data";
import { Brain, Bot, Server, Activity, GraduationCap } from "lucide-react";

export function AboutSection() {
  const aboutCopy = siteConfig.sections.about;

  const renderHighlightIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "brain":
        return <Brain className="w-5 h-5 text-primary" />;
      case "bot":
        return <Bot className="w-5 h-5 text-primary" />;
      case "server":
        return <Server className="w-5 h-5 text-secondary" />;
      case "activity":
      default:
        return <Activity className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <section id="about" className="scroll-mt-20 py-20 px-4 sm:px-6 bg-[#c7eed8] dark:bg-muted/40 border-y border-[#a3d9b7] dark:border-border transition-colors">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
          {/* Left Column: Narrative & Education */}
          <div className="md:w-7/12">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
              {aboutCopy.tag}
            </h2>
            <h3 className="mt-2 text-3xl font-extrabold text-foreground tracking-tight">
              {aboutCopy.heading}
            </h3>

            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed text-base">
              {personalData.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Education Card */}
            {personalData.education && personalData.education.length > 0 && (
              <div className="mt-6 p-5 rounded-2xl border border-border bg-card shadow-sm hover:border-primary/50 hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-muted border border-border">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-foreground">
                        {personalData.education[0].institution}
                      </h4>
                      <p className="text-xs text-primary font-semibold">
                        {personalData.education[0].degree} • GPA: {personalData.education[0].gpa}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">
                    {personalData.education[0].period}
                  </span>
                </div>
                {personalData.education[0].thesis && (
                  <p className="mt-3 pt-3 border-t border-border text-xs text-muted-foreground leading-relaxed">
                    <strong className="text-foreground font-semibold">Thesis:</strong> {personalData.education[0].thesis}
                  </p>
                )}
              </div>
            )}

            <div className="mt-5 p-3.5 rounded-2xl border border-border bg-card shadow-sm flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
              <p className="text-sm font-semibold text-foreground">
                Location: <span className="text-muted-foreground font-normal">{personalData.location}</span>
                {personalData.phone && (
                  <span className="text-muted-foreground font-normal ml-3">• Phone: {personalData.phone}</span>
                )}
              </p>
            </div>
          </div>

          {/* Right Column: Core Engineering Focus */}
          <div className="md:w-5/12 grid grid-cols-1 gap-3.5 w-full">
            {aboutCopy.highlights.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border bg-card p-4.5 transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:-translate-y-0.5 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-1.5">
                  <div className="p-2 rounded-xl bg-muted border border-border">
                    {renderHighlightIcon(item.icon)}
                  </div>
                  <h4 className="font-bold text-sm text-foreground">{item.title}</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed pl-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
