import Image from "next/image";

/**
 * Agencies — proof-bar marquee.
 *
 * Full-bleed strip on swiss-muted (one tonal step darker than swiss-paper)
 * so it visually separates from the hero without changing palette. Logos
 * render in their NATIVE colors — most agency marks are dark-on-transparent
 * which read cleanly against the light surface; brand-color marks (e.g.
 * Greenwood) keep their identity.
 *
 * The track repeats the logo set four times; translate -25% advances one set
 * so the loop is seamless. Slots use matching min/max width so the track always
 * exceeds the viewport on wide screens.
 */
const MARQUEE_COPIES = 4;

const AGENCIES: { src: string; alt: string }[] = [
  { src: "/agency-logos/Reach.png", alt: "Reach" },
  { src: "/agency-logos/Slay-Logo.png", alt: "Slay" },
  { src: "/agency-logos/Greenwood-Management.avif", alt: "Greenwood Management" },
  { src: "/agency-logos/Starline-management.png", alt: "Starline Management" },
  { src: "/agency-logos/Vortex.png", alt: "Vortex" },
  { src: "/agency-logos/Coco-Butter.png", alt: "Coco Butter" },
];

const LOGO_SLOT =
  "flex h-10 min-w-[180px] max-w-[180px] shrink-0 items-center justify-center pr-10 md:h-12 md:min-w-[220px] md:max-w-[220px] md:pr-16 lg:h-14 lg:min-w-[260px] lg:max-w-[260px] lg:pr-20";

export function Agencies() {
  const track = Array.from({ length: MARQUEE_COPIES }, () => AGENCIES).flat();

  return (
    <section
      aria-label="Agencies that use Riff"
      className="border-b-[3px] border-swiss-ink bg-swiss-muted swiss-layer overflow-hidden"
    >
      <div className="relative px-0 py-8 md:py-10 lg:py-12">
        <div
          className="agencies-marquee flex items-center"
          style={{ width: "max-content" }}
        >
          {track.map((logo, i) => (
            <div
              key={i}
              aria-hidden={i >= AGENCIES.length ? "true" : undefined}
              className={LOGO_SLOT}
            >
              <Image
                src={logo.src}
                alt={i >= AGENCIES.length ? "" : logo.alt}
                width={240}
                height={80}
                className="h-full max-h-full w-auto max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Scoped marquee keyframes — kept inline so globals.css stays untouched.
          Sub-properties are declared individually so that no cascade shorthand
          (e.g. animation: none from a reset layer) can silently override the
          iteration count. animation-iteration-count: infinite must never be
          omitted or collapsed into a shorthand that could be trumped upstream. */}
      <style>{`
        @keyframes agencies-marquee {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-25%, 0, 0); }
        }
        .agencies-marquee {
          animation-name: agencies-marquee;
          animation-duration: 40s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-fill-mode: none;
          animation-play-state: running;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .agencies-marquee { animation: none; }
        }
      `}</style>
    </section>
  );
}
