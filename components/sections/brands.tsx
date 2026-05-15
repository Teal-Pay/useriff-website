import Image from "next/image";
import { Container } from "@/components/primitives/container";

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
};

/**
 * Brand logos served from /public/brand-logos/.
 * Paths are root-relative ("/brand-logos/...") so they resolve correctly
 * at any deployment URL — never tied to a local machine path.
 */
const BRANDS: Brand[] = [
  { name: "L'Oréal",         src: "/brand-logos/l'oreal.svg",   width: 160, height: 60, invertOnHover: true },
  { name: "Invisalign",      src: "/brand-logos/invisalign.png", width: 160, height: 60, imgClassName: "h-10 md:h-14" },
  { name: "Omnicom",         src: "/brand-logos/omnicom.png",    width: 160, height: 60, invert: true },
  { name: "GoFundMe",        src: "/brand-logos/gofundme.svg",   width: 160, height: 60, imgClassName: "h-10 md:h-14" },
  { name: "Skinfix",         src: "/brand-logos/skinfix.svg",    width: 160, height: 60, invertOnHover: true },
  { name: "Head & Shoulders", src: "/brand-logos/h-s.svg",       width: 160, height: 60, imgClassName: "h-10 md:h-14" },
  { name: "Cosnori",         src: "/brand-logos/Cosnori.webp",   width: 160, height: 60, imgClassName: "h-10 md:h-14", invert: true },
  { name: "Dr Althea",       src: "/brand-logos/dralthea.avif",  width: 160, height: 60, imgClassName: "h-10 md:h-14", invertOnHover: true },
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
              className="group flex h-[88px] items-center justify-center bg-swiss-paper p-6 transition-colors duration-150 ease-linear hover:bg-swiss-ink md:h-[120px] md:p-8"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={brand.width}
                height={brand.height}
                className={[
                  brand.imgClassName ?? "h-8 md:h-10",
                  "w-auto max-w-full object-contain opacity-80",
                  "grayscale transition-[filter,opacity] duration-150 ease-linear",
                  brand.invert        && "invert",
                  "group-hover:grayscale-0 group-hover:opacity-100",
                  brand.invert        && "group-hover:invert-0",
                  brand.invertOnHover && "group-hover:invert",
                ].filter(Boolean).join(" ")}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
