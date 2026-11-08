"use client";

import * as React from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { FileText, Menu, X, Terminal } from "lucide-react";
import { siteConfig } from "@/data";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { brandName, navItems, resume } = siteConfig.navigation;

  const closeMobileMenu = () => setMobileMenuOpen(false);

  // Close mobile menu on Escape key press
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };

    if (mobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-[#c8decb] dark:border-border/80 bg-[#e8f5ec]/95 dark:bg-background/80 backdrop-blur-md transition-colors">
        <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
          {/* Brand */}
          <Link
            href="#top"
            className="flex items-center gap-2 font-mono font-bold text-base sm:text-lg tracking-tight text-foreground hover:text-primary transition-colors"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20">
              <Terminal className="h-4 w-4" />
            </div>
            <span>{brandName}</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button
              href={resume.url}
              external
              variant="outline"
              size="sm"
              className="font-medium gap-1.5 bg-card shadow-xs"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>{resume.label}</span>
            </Button>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg border border-border bg-card text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer shadow-xs"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="md:hidden border-b border-[#c8decb] dark:border-border bg-[#e8f5ec] dark:bg-card px-4 pt-3 pb-6 space-y-3 shadow-lg"
          >
            <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-white/80 dark:hover:bg-muted transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="pt-2 border-t border-border">
              <Button
                href={resume.url}
                external
                variant="outline"
                size="sm"
                className="w-full justify-center gap-1.5 bg-card shadow-xs"
              >
                <FileText className="h-3.5 w-3.5" />
                <span>{resume.downloadLabel}</span>
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Backdrop overlay for mobile drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-16 bg-black/40 backdrop-blur-xs z-40 md:hidden"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
}
