import * as React from "react";
import { skillCategories } from "@/data/skills";
import { TechIcon } from "@/components/ui/TechIcon";

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20 py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
            {"// 02. Technical Arsenal"}
          </h2>
          <h3 className="mt-2 text-3xl font-extrabold text-foreground tracking-tight">
            Specialized Tech Stack & Production Tooling
          </h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Technologies, frameworks, and infrastructure components I engineer with daily.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-xs hover:border-primary/50 hover:shadow-md transition-all duration-300"
            >
              <div>
                <h4 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span>{category.title}</span>
                </h4>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  {category.description}
                </p>

                {/* Tech Logos Grid Tiles */}
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="group/tile flex flex-col items-center justify-center p-3.5 rounded-xl border border-border bg-muted/40 hover:border-primary/50 hover:bg-muted hover:shadow-xs hover:scale-105 transition-all duration-200 cursor-default"
                      title={`${skill.name} (${skill.level || "Proficient"})`}
                    >
                      <div className="w-9 h-9 flex items-center justify-center text-foreground/80 group-hover/tile:text-primary group-hover/tile:scale-110 transition-all duration-200">
                        <TechIcon name={skill.name} className="w-6 h-6" />
                      </div>

                      <span className="mt-2 text-xs font-semibold text-foreground text-center line-clamp-1 group-hover/tile:text-primary transition-colors">
                        {skill.name.split(" ")[0]}
                      </span>

                      {skill.level && (
                        <span className="text-[10px] font-mono text-muted-foreground mt-0.5">
                          {skill.level}
                        </span>
                      )}
                    </div>
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
