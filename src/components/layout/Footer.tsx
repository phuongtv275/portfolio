import * as React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { personalData } from "@/data/personal";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-sm font-semibold text-foreground">
            {personalData.name} — <span className="text-primary">{personalData.title}</span>
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Built with Next.js (App Router), TypeScript & Tailwind CSS. Designed for high performance and vivid visual clarity.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 text-xs text-muted-foreground font-medium">
            {personalData.socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                {s.name}
              </a>
            ))}
          </div>

          <Link
            href="#top"
            className="inline-flex items-center justify-center w-8 h-8 rounded-xl border border-border bg-muted hover:border-primary/50 hover:text-primary text-foreground transition-all"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
