import * as React from "react";
import { Project } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ExternalLink, Sparkles, Server, Layers } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const getCategoryMeta = (cat: Project["category"]) => {
    switch (cat) {
      case "ai":
        return {
          label: "AI & Machine Learning",
          icon: <Sparkles className="w-3.5 h-3.5 text-primary" />,
          variant: "accent" as const,
        };
      case "backend":
        return {
          label: "Distributed Backend",
          icon: <Server className="w-3.5 h-3.5 text-secondary" />,
          variant: "steel" as const,
        };
      case "fullstack":
        return {
          label: "Fullstack Architecture",
          icon: <Layers className="w-3.5 h-3.5 text-muted-foreground" />,
          variant: "outline" as const,
        };
    }
  };

  const meta = getCategoryMeta(project.category);

  return (
    <article className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 hover:border-primary/50 transition-all duration-300">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <Badge variant={meta.variant} className="flex items-center gap-1.5 py-1 px-3">
            {meta.icon}
            <span>{meta.label}</span>
          </Badge>
          <div className="flex items-center gap-2">
            {project.period && (
              <span className="text-[11px] font-mono text-muted-foreground">
                {project.period}
              </span>
            )}
            {project.featured && (
              <span className="text-[10px] font-bold tracking-wider uppercase text-primary bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
                Featured
              </span>
            )}
          </div>
        </div>

        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
          {project.title}
        </h3>

        <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        {project.highlights && project.highlights.length > 0 && (
          <div className="mt-4 border-l-2 border-primary/40 pl-3 space-y-1.5">
            {project.highlights.map((h, i) => (
              <p key={i} className="text-xs text-foreground/85 font-mono flex items-start gap-1.5">
                <span className="text-primary font-bold">›</span>
                <span>{h}</span>
              </p>
            ))}
          </div>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {project.demoUrl && (
            <Button
              href={project.demoUrl}
              external
              size="sm"
              variant="accent"
              className="font-bold shadow-xs"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Demo</span>
            </Button>
          )}

          {project.githubUrl && (
            <Button
              href={project.githubUrl}
              external
              size="sm"
              variant={project.demoUrl ? "outline" : "primary"}
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Source Code</span>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
