import type { Config } from "tailwindcss";

/**
 * Riff — Swiss International Style design system
 * Tokens are mirrored as CSS variables in app/globals.css so we can use them
 * via arbitrary values too (e.g. ring-[color:var(--swiss-focus)]).
 *
 * The brand spectrum gradient is exposed two ways:
 *   - As a Tailwind utility via backgroundImage.spectrum  (bg-spectrum)
 *   - As a border via the .swiss-spectrum-border utility in globals.css
 * It is NEVER used as text color.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        md: "2rem",
        lg: "3rem",
      },
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        swiss: {
          paper: "#F5F6F6",
          ink: "#313131",
          muted: "#EBECEC",
          border: "#313131",
          // Mint — used only for accessibility focus rings.
          // For the brand spectrum gradient, see backgroundImage.spectrum below.
          focus: "#83EFC5",
        },
      },
      backgroundImage: {
        // The brand spectrum — applied via bg-spectrum or as border-image
        // through the .swiss-spectrum-border utility in globals.css.
        spectrum: "linear-gradient(135deg, #FFB7F8 0%, #C2D3FF 50%, #83EFC5 100%)",
      },
      fontFamily: {
        // Inter is loaded via next/font in app/layout.tsx and exposed as --font-inter
        sans: ["var(--font-inter)", "Inter", "Helvetica", "Arial", "sans-serif"],
      },
      borderRadius: {
        none: "0",
      },
      letterSpacing: {
        // Swiss style relies on extreme tracking values
        tightest: "-0.04em",
      },
      fontSize: {
        // Display scale for massive headlines
        "display-sm": ["clamp(3rem, 8vw, 5rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(4rem, 10vw, 7rem)", { lineHeight: "0.92", letterSpacing: "-0.035em" }],
        "display-lg": ["clamp(5rem, 14vw, 10rem)", { lineHeight: "0.88", letterSpacing: "-0.04em" }],
      },
      transitionDuration: {
        "instant": "150ms",
      },
      transitionTimingFunction: {
        "swiss": "cubic-bezier(0.2, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
