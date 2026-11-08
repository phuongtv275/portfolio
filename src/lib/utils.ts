/**
 * Utility: Merge Tailwind class names safely.
 * Combines clsx (conditional classes) with tailwind-merge (dedup conflicts).
 */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
