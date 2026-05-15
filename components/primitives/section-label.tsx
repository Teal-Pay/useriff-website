import { cn } from "@/lib/utils";

/**
 * SectionLabel — the numbered prefix that anchors every major section.
 * Example: <SectionLabel number="01">System</SectionLabel> → "01 — SYSTEM"
 *
 * Both the number and the label are solid ink — Swiss restraint, no accent.
 * The small bar between number and label is the only ornament.
 * Uppercase + widest tracking is non-negotiable for the Swiss look.
 */
export function SectionLabel({
  number,
  children,
  className,
}: {
  number: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em]",
        className,
      )}
    >
      <span className="text-swiss-ink">{number}</span>
      <span className="h-px w-6 bg-swiss-ink" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}
