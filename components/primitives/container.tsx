import { cn } from "@/lib/utils";

/**
 * Container — the page's left/right rails.
 * Use this on every section. Max width 1600px to preserve generous gutters
 * on large displays (Swiss style hates edge-to-edge marketing pages).
 */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1600px] px-6 md:px-10 lg:px-16",
        className,
      )}
    >
      {children}
    </div>
  );
}
