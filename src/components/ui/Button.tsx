import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonBaseProps = {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export type ButtonProps = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps>;

export function Button({
  className,
  variant = "primary",
  size = "md",
  href,
  external,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const variants = {
    primary:
      "bg-primary text-primary-foreground hover:opacity-90 hover:shadow-lg hover:shadow-primary/20 focus-visible:ring-primary shadow-sm",
    accent:
      "bg-accent text-accent-foreground hover:opacity-90 hover:shadow-md hover:shadow-accent/25 focus-visible:ring-accent",
    secondary:
      "bg-secondary text-secondary-foreground hover:opacity-90 focus-visible:ring-secondary shadow-sm",
    outline:
      "border border-border bg-card/60 hover:bg-muted text-foreground focus-visible:ring-primary",
    ghost:
      "hover:bg-muted text-foreground focus-visible:ring-primary",
  };

  const sizes = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-sm px-4.5 py-2 gap-2",
    lg: "text-base px-6 py-2.5 gap-2.5",
  };

  const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={combinedClasses}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={combinedClasses}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
