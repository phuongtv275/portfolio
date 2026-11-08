import * as React from "react";
import { personalData } from "@/data/personal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, FileText, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section id="top" className="relative pt-20 pb-16 md:pt-28 md:pb-24 px-4 sm:px-6 overflow-hidden">
      {/* Background dynamic glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-primary/10 via-accent/15 to-secondary/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto">
        {/* Availability Badge */}
        {personalData.availableForHire && (
          <div className="inline-flex items-center mb-6">
            <Badge variant="success" className="gap-2 py-1.5 px-3.5 text-xs shadow-xs">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-bold">Available for High-Impact Full-time & AI Consulting</span>
            </Badge>
          </div>
        )}

        {/* Dynamic & Bright Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.12]">
          Building{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-600 to-teal-600 dark:from-primary dark:via-accent dark:to-secondary">
            Production AI
          </span>{" "}
          <br className="hidden sm:inline" />& Resilient{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-primary to-emerald-600 dark:from-accent dark:via-primary dark:to-secondary">
            Backend Services
          </span>
        </h1>

        {/* Tagline / Subheading */}
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed">
          Hi, I&apos;m <strong className="text-foreground font-bold">{personalData.name}</strong>. {personalData.tagline}
        </p>

        {/* Call to Actions */}
        <div className="mt-8 flex flex-wrap items-center gap-3.5">
          <Button href="#projects" size="lg" className="shadow-md">
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Button>

          <Button href="/assets/resume.pdf" external variant="outline" size="lg">
            <FileText className="w-4 h-4 text-muted-foreground" />
            <span>Resume (PDF)</span>
          </Button>

          <Button href="#contact" variant="ghost" size="lg">
            <Mail className="w-4 h-4 text-muted-foreground" />
            <span>Get in Touch</span>
          </Button>
        </div>

        {/* Key Engineering Metrics */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-10 border-t border-border">
          {personalData.stats.map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-card p-4 sm:p-5 shadow-xs hover:border-primary/50 hover:shadow-md transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-primary">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground font-semibold mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
