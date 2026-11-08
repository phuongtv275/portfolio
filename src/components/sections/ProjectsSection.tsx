"use client";

import * as React from "react";
import { projectsData, projectsConfig, siteConfig } from "@/data";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Sparkles, Server, Layers, LayoutGrid } from "lucide-react";

type FilterCategory = "all" | "ai" | "backend" | "fullstack";

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = React.useState<FilterCategory>("all");
  const projectsCopy = siteConfig.sections.projects;

  const filteredProjects = React.useMemo(() => {
    if (activeCategory === "all") return projectsData;
    return projectsData.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const renderCategoryIcon = (iconName: string, isActive: boolean) => {
    const colorClass = isActive ? "text-primary-foreground" : "text-muted-foreground";
    switch (iconName) {
      case "sparkles":
        return <Sparkles className={`w-3.5 h-3.5 ${colorClass}`} />;
      case "server":
        return <Server className={`w-3.5 h-3.5 ${colorClass}`} />;
      case "layers":
        return <Layers className={`w-3.5 h-3.5 ${colorClass}`} />;
      case "layoutGrid":
      default:
        return <LayoutGrid className={`w-3.5 h-3.5 ${colorClass}`} />;
    }
  };

  return (
    <section id="projects" className="scroll-mt-20 py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
            {projectsCopy.tag}
          </h2>
          <h3 className="mt-2 text-3xl font-extrabold text-foreground tracking-tight">
            {projectsCopy.heading}
          </h3>
          <p className="mt-3 text-sm text-muted-foreground">
            {projectsCopy.description}
          </p>
        </div>

        {/* Filter Pills with energetic active styling */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {projectsConfig.categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const count =
              cat.id === "all"
                ? projectsData.length
                : projectsData.filter((p) => p.category === cat.id).length;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id as FilterCategory)}
                className={`inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-105"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted shadow-xs hover:shadow-sm"
                }`}
              >
                {renderCategoryIcon(cat.icon, isActive)}
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono font-bold ${
                    isActive
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid / Empty state */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 px-4 text-center rounded-2xl border border-dashed border-border bg-card/50">
            <Layers className="w-10 h-10 text-muted-foreground/60 mb-3" />
            <h4 className="text-base font-semibold text-foreground">
              {projectsConfig.emptyState.title}
            </h4>
            <p className="text-xs text-muted-foreground mt-1 max-w-sm leading-relaxed">
              {projectsConfig.emptyState.description}
            </p>
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className="mt-4 text-xs font-semibold text-primary hover:underline cursor-pointer"
            >
              {projectsConfig.emptyState.actionLabel} ({projectsData.length})
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
