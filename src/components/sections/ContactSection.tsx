"use client";

import * as React from "react";
import { personalData, siteConfig } from "@/data";
import { Button } from "@/components/ui/Button";
import { Mail, Copy, Check, Send, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/Icons";

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = React.useState(false);
  const [copiedPhone, setCopiedPhone] = React.useState(false);
  const contactCopy = siteConfig.sections.contact;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalData.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // fallback
    }
  };

  const handleCopyPhone = async () => {
    if (!personalData.phone) return;
    try {
      await navigator.clipboard.writeText(personalData.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } catch {
      // fallback
    }
  };

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "github":
        return <GithubIcon className="w-4 h-4 text-muted-foreground" />;
      case "linkedin":
        return <LinkedinIcon className="w-4 h-4 text-muted-foreground" />;
      case "x (twitter)":
      case "twitter":
        return <TwitterIcon className="w-4 h-4 text-muted-foreground" />;
      default:
        return <Send className="w-4 h-4 text-muted-foreground" />;
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 py-24 px-4 sm:px-6 bg-muted/40 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
          {contactCopy.tag}
        </h2>
        <h3 className="mt-2 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
          {contactCopy.heading}
        </h3>
        <p className="mt-4 text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
          {contactCopy.description}
        </p>

        {/* Contact Action Bar (Email & Phone) */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          {/* Email Box */}
          <div className="inline-flex items-center gap-2 p-2 rounded-2xl border border-border bg-card shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300">
            <div className="flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm font-mono font-medium text-foreground">
              <Mail className="w-4 h-4 text-primary" />
              <span>{personalData.email}</span>
            </div>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold border border-border bg-muted hover:bg-muted/80 text-foreground transition-all cursor-pointer"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-primary" />
                  <span className="text-primary font-bold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-muted-foreground" />
                  <span>Copy</span>
                </>
              )}
            </button>

            <Button
              href={`mailto:${personalData.email}`}
              size="sm"
              className="font-bold shadow-xs"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Email</span>
            </Button>
          </div>

          {/* Phone Box */}
          {personalData.phone && (
            <div className="inline-flex items-center gap-2 p-2 rounded-2xl border border-border bg-card shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm font-mono font-medium text-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>{personalData.phone}</span>
              </div>

              <button
                type="button"
                onClick={handleCopyPhone}
                className="inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold border border-border bg-muted hover:bg-muted/80 text-foreground transition-all cursor-pointer"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-primary" />
                    <span className="text-primary font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-muted-foreground" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Social channels */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {personalData.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-muted text-xs font-semibold text-foreground transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              {getSocialIcon(social.name)}
              <span>{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
