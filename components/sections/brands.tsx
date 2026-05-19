import Image from "next/image";
import { Container } from "@/components/primitives/container";

/** Default-state logo tint (#969696 — no swiss-grey token in the system). */
const GREY_DEFAULT_LOGO_FILTER =
  "[filter:brightness(0)_saturate(100%)_invert(62%)_sepia(0%)_saturate(0%)_hue-rotate(182deg)_brightness(95%)_contrast(92%)]";

/** Hover filter for white/light assets on swiss-paper (single filter — no filter-none). */
const BLACK_HOVER_LOGO_FILTER =
  "group-hover:[filter:brightness(0)_saturate(100%)]";

type Brand = {
  name: string;
  src: string;
  width: number;
  height: number;
  /** Override image height classes for undersized logos. */
  imgClassName?: string;
  /** Apply CSS invert at rest so a white/light logo reads on swiss-paper. */
  invert?: boolean;
  /** Apply CSS invert on hover so a black logo reads on swiss-ink. */
  invertOnHover?: boolean;
  /** Tint logo to #969696 at default instead of grayscale + opacity. */
  greyDefault?: boolean;
};

/**
 * Brand logos served from /public/brand-logos/.
 * Paths are root-relative ("/brand-logos/...") so they resolve correctly
 * at any deployment URL — never tied to a local machine path.
 */
const BRANDS: Brand[] = [
  { name: "L'Oréal",         src: "/brand-logos/l'oreal.svg",   width: 160, height: 60, greyDefault: true },
  { name: "Invisalign",      src: "/brand-logos/invisalign.png", width: 160, height: 60, imgClassName: "h-10 md:h-14" },
  { name: "Omnicom",         src: "/brand-logos/omnicom.png",    width: 160, height: 60, greyDefault: true, invertOnHover: true },
  { name: "GoFundMe",        src: "/brand-logos/gofundme.svg",   width: 160, height: 60, imgClassName: "h-10 md:h-14" },
  { name: "Skinfix",         src: "/brand-logos/skinfix.svg",    width: 160, height: 60, invertOnHover: true },
  { name: "Head & Shoulders", src: "/brand-logos/h-s.svg",       width: 160, height: 60, imgClassName: "h-10 md:h-14" },
  { name: "Cosnori",         src: "/brand-logos/Cosnori.webp",   width: 160, height: 60, imgClassName: "h-10 md:h-14", greyDefault: true, invertOnHover: true },
  { name: "Dr Althea",       src: "/brand-logos/dralthea.avif",  width: 160, height: 60, imgClassName: "h-10 md:h-14", greyDefault: true },
];

/**
 * Brands — quiet trust strip between In Practice and Testimonials.
 *
 * No numbered kicker: this section sits between the major numbered
 * sections (02 → 03) as a subordinate ribbon, so it uses a centered
 * tracked label rather than the SectionLabel component. Logos render
 * in a 2 × 4 (mobile 2 × 4 / lg 4 × 2) grid of bordered cells, each
 * logo rendered at fixed height for an even baseline. Grayscale +
 * dim opacity keeps the strip monochrome with the rest of the system.
 */
export function Brands() {
  return (
    <section
      id="brands"
      className="border-b-[3px] border-swiss-ink bg-swiss-muted swiss-layer"
    >
      <Container className="py-16 md:py-20 lg:py-24">
        <div className="flex items-center justify-center gap-4 pb-10 md:pb-12">
          <span className="h-px w-8 bg-swiss-ink" aria-hidden="true" />
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-swiss-ink md:text-sm">
            Brands that have paid on Riff
          </h2>
          <span className="h-px w-8 bg-swiss-ink" aria-hidden="true" />
        </div>

        <ul
          className="grid grid-cols-2 gap-[3px] border-[3px] border-swiss-ink bg-swiss-ink md:grid-cols-4"
          aria-label="Brands that have paid on Riff"
        >
          {BRANDS.map((brand) => (
            <li
              key={brand.name}
              className="group flex h-[88px] items-center justify-center bg-swiss-muted p-6 transition-colors duration-150 ease-linear hover:bg-swiss-paper md:h-[120px] md:p-8"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={brand.width}
                height={brand.height}
                className={[
                  brand.imgClassName ?? "h-8 md:h-10",
                  "w-auto max-w-full object-contain transition-[filter,opacity] duration-150 ease-linear",
                  brand.greyDefault
                    ? [
                        "opacity-100",
                        GREY_DEFAULT_LOGO_FILTER,
                        brand.invertOnHover
                          ? BLACK_HOVER_LOGO_FILTER
                          : "group-hover:filter-none",
                      ]
                    : "opacity-80 grayscale",
                  "group-hover:grayscale-0 group-hover:opacity-100",
                  brand.invert        && "invert",
                  brand.invert        && "group-hover:invert-0",
                  brand.invertOnHover &&
                    !brand.greyDefault &&
                    "group-hover:invert",
                ]
                  .flat()
                  .filter(Boolean)
                  .join(" ")}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
