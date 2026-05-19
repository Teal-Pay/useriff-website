import { cn } from "@/lib/utils";

/**
 * Rule — visible structural divider. Defaults to a thick black horizontal line.
 * Use vertical={true} inside flex/grid layouts to divide columns.
 *
 * Swiss style makes the grid visible — reach for these instead of empty space
 * when you want a section break.
 */
export function Rule({
  vertical = false,
  thickness = "thick",
  className,
}: {
  vertical?: boolean;
  thickness?: "thin" | "thick";
  className?: string;
}) {
  const weight = thickness === "thick" ? "border-[3px]" : "border";
  return (
    <div
      role="separator"
      aria-orientation={vertical ? "vertical" : "horizontal"}
      className={cn(
        "border-swiss-ink",
        vertical ? `h-full ${weight} border-l border-y-0 border-r-0` : `w-full ${weight} border-t border-x-0 border-b-0`,
        className,
      )}
    />
  );
}
