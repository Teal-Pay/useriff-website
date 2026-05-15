import Image from "next/image";

/**
 * Agencies — proof-bar marquee.
 *
 * Single full-bleed cell on swiss-ink with an infinite horizontal auto-scroll
 * of agency logos. The track is the list duplicated; we translate -50% so the
 * second copy lands exactly where the first started, producing a seamless loop.
 *
 * Logos with black-on-transparent marks (Vortex, Starline, Reach, Greenwood)
 * are inverted so they read on the dark background.
 */
const AGENCIES: { src: string; alt: string; invert?: boolean }[] = [
  { src: "/agency-logos/Reach.png", alt: "Reach", invert: true },
  { src: "/agency-logos/Slay-Logo.jpeg", alt: "Slay" },
  { src: "/agency-logos/Greenwood-Management.avif", alt: "Greenwood Management", invert: true },
  { src: "/agency-logos/Starline-management.png", alt: "Starline Management", invert: true },
  { src: "/agency-logos/Vortex.png", alt: "Vortex", invert: true },
  { src: "/agency-logos/Coco-Butter.png", alt: "Coco Butter" },
];

export function Agencies() {
  // Duplicate so the marquee can loop seamlessly at -50%.
  const track = [...AGENCIES, ...AGENCIES];

  return (
    <section
      aria-label="Agencies that use Riff"
      className="border-b-[3px] border-swiss-ink bg-swiss-ink swiss-layer overflow-hidden"
    >
      <div className="relative px-0 py-10 md:py-14 lg:py-16">
        <div
          className="agencies-marquee flex items-center gap-16 md:gap-24 lg:gap-28"
          style={{ width: "max-content" }}
        >
          {track.map((logo, i) => (
            <div
              key={i}
              aria-hidden={i >= AGENCIES.length ? "true" : undefined}
              className="flex h-12 shrink-0 items-center md:h-16 lg:h-16"
            >
              <Image
                src={logo.src}
                alt={i >= AGENCIES.length ? "" : logo.alt}
                width={240}
                height={80}
                className={`h-full w-auto object-contain ${logo.invert ? "invert" : ""}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Scoped marquee keyframes — kept inline so globals.css stays untouched. */}
      <style>{`
        @keyframes agencies-marquee {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-50%, 0, 0); }
        }
        .agencies-marquee {
          animation: agencies-marquee 40s linear infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .agencies-marquee { animation: none; }
        }
      `}</style>
    </section>
  );
}
