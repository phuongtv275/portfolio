import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "accent" | "success" | "steel";
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center text-xs font-semibold px-2.5 py-0.5 rounded-full transition-colors";

  const variants = {
    default: "bg-muted text-foreground border border-border",
    outline: "border border-border text-muted-foreground",
    accent: "bg-accent/15 text-primary dark:text-accent border border-accent/40 font-bold",
    success: "bg-primary/15 text-primary border border-primary/30 font-bold",
    steel: "bg-secondary/15 text-secondary border border-secondary/30",
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </span>
  );
}
