import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Button — Swiss-style override of the shadcn pattern.
 *
 * Variants:
 *   - primary    Solid ink, paper text. Hover inverts (paper bg, ink text, ink border).
 *   - secondary  Paper with thick ink border. Hover inverts to ink.
 *   - prismatic  Ghost Border — paper fill, gradient border, ink text.
 *                Hover fills with ink (border stays gradient).
 *                Use for the SINGLE most important CTA in any section.
 *   - ghost      Transparent with no border. Hover underlines.
 *
 * No rounded corners. No shadows. Color inversion only.
 * Icons should sit at the right edge for forward-motion CTAs.
 */
const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-3",
    "font-bold uppercase tracking-widest",
    "rounded-none",
    "transition-colors duration-150 ease-linear",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-swiss-focus focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-40",
    "whitespace-nowrap",
  ],
  {
    variants: {
      variant: {
        primary:
          "border-[3px] border-swiss-ink bg-swiss-ink text-swiss-paper hover:bg-swiss-paper hover:text-swiss-ink",
        secondary:
          "border-[3px] border-swiss-ink bg-swiss-paper text-swiss-ink hover:bg-swiss-ink hover:text-swiss-paper",
        // Prismatic: gradient border via .swiss-spectrum-border utility.
        // Default: ink fill + paper text (solid, confident).
        // Hover: inverts to paper fill + ink text (border gradient stays throughout).
        prismatic:
          "border-[3px] swiss-spectrum-border bg-swiss-ink text-swiss-paper hover:bg-swiss-paper hover:text-swiss-ink",
        ghost:
          "border-[3px] border-transparent bg-transparent text-swiss-ink hover:underline underline-offset-4 decoration-2",
      },
      size: {
        sm: "h-10 px-4 text-xs",
        md: "h-12 px-6 text-sm",
        lg: "h-16 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
