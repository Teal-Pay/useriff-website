import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn — merges Tailwind classes with proper conflict resolution.
 * Standard shadcn/ui utility. Use it everywhere you compose className strings.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
