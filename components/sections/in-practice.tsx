"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Check, Building2 } from "lucide-react";
import { cva } from "class-variance-authority";
import { Container } from "@/components/primitives/container";
import { SectionLabel } from "@/components/primitives/section-label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DEMO_URL } from "@/lib/constants";

const POINTS = [
  "Drag-to-set percentages with running totals",
  "Roles like agency, creator, or manager baked in",
  "Multi-currency payouts with FX shown up front",
  "Receipts that explain the math to every party",
];

// ---------------------------------------------------------------------------
// PayoutWaterfall
//
// Single segmented bar where flex-basis % == split %. The swiss spectrum
// (pink → blue → mint) reveals left → right, counting each payee's amount
// up as the fill passes through their segment. Column-group labels above
// the bar (Agency / Manager / Creators) cap the segments below.
// ---------------------------------------------------------------------------

const TOTAL = 10_000;

type Role = "agency" | "manager" | "creator";

interface Member {
  id:       string;
  name:     string;
  handle:   string;
  role:     Role;
  pct:      number; // integer 0–100
  leftEdge: number; // cumulative pct before this member's segment
}

const RAW: Omit<Member, "leftEdge">[] = [
  { id: "ag", name: "Dylan",     handle: "@reachprojectsco", role: "agency",  pct: 10 },
  { id: "mg", name: "Ascia",     handle: "@reachprojectsco", role: "manager", pct: 10 },
  { id: "c1", name: "Syd&Macky", handle: "@sydandmacky",     role: "creator", pct: 25 },
  { id: "c2", name: "NRG Dance", handle: "@nrgdanceproject", role: "creator", pct: 20 },
  { id: "c3", name: "Matthew",   handle: "@raskitchentv",    role: "creator", pct: 15 },
  { id: "c4", name: "Noah",      handle: "@loveliveserve",   role: "creator", pct: 12 },
  { id: "c5", name: "Craig",     handle: "@kcfauk",          role: "creator", pct:  8 },
];

let _acc = 0;
const MEMBERS: Member[] = RAW.map((m) => {
  const member: Member = { ...m, leftEdge: _acc };
  _acc += m.pct;
  return member;
});

// Column group labels rendered above the bar, sized to match the segments
// they cap (Agency: 1 cell, Manager: 1 cell, Creators: rest).
const ROLE_LABEL: Record<Role, string> = {
  agency:  "Agency",
  manager: "Manager",
  creator: "Creators",
};
const ROLE_GROUPS: { role: Role; label: string; pct: number }[] = (() => {
  const out: { role: Role; label: string; pct: number }[] = [];
  for (const m of MEMBERS) {
    const last = out[out.length - 1];
    if (last && last.role === m.role) last.pct += m.pct;
    else out.push({ role: m.role, label: ROLE_LABEL[m.role], pct: m.pct });
  }
  return out;
})();

// Timing — tight, fintech-paced (~6.5s loop)
const T = {
  INIT:     400,
  TOTAL:    700,
  PRE_FILL: 180,
  FILL:    3500,
  HOLD:    1500,
} as const;

const easeOutCubic = (p: number) => 1 - Math.pow(1 - p, 3);
const easeOutExpo  = (p: number) => (p === 1 ? 1 : 1 - Math.pow(2, -10 * p));

type TickerState = "pending" | "active" | "done";

function fmt(n: number): string {
  return "$" + Math.round(n).toLocaleString("en-US");
}

function stateFor(progress: number, m: Member): TickerState {
  if (progress < m.leftEdge) return "pending";
  if (progress >= m.leftEdge + m.pct) return "done";
  return "active";
}

function amountFor(progress: number, m: Member): number {
  if (progress <= m.leftEdge) return 0;
  const right = m.leftEdge + m.pct;
  if (progress >= right) return (TOTAL * m.pct) / 100;
  return (TOTAL * (progress - m.leftEdge)) / 100;
}

// CVA — ticker cell state drives only opacity so the cells stay subordinate
// to the bar (no chrome shifts, no layout pops).
const tickerCellVariants = cva(
  "flex flex-col gap-0.5 px-1.5 pt-3 pb-3 transition-opacity duration-300",
  {
    variants: {
      state: {
        pending: "opacity-30",
        active:  "opacity-100",
        done:    "opacity-100",
      },
    },
    defaultVariants: { state: "pending" },
  }
);

function PayoutWaterfall() {
  const [total,    setTotal]    = useState(0);
  const [progress, setProgress] = useState(0); // 0–100, drives bar fill + ticker
  const aliveRef = useRef(true);

  useEffect(() => {
    aliveRef.current = true;
    const cleanups: Array<() => void> = [];

    function wait(ms: number) {
      return new Promise<void>((resolve) => {
        const id = setTimeout(resolve, ms);
        cleanups.push(() => clearTimeout(id));
      });
    }

    function tween(
      from: number,
      to: number,
      durationMs: number,
      ease: (p: number) => number,
      onUpdate: (v: number) => void
    ) {
      return new Promise<void>((resolve) => {
        const start = performance.now();
        let raf: number;
        function tick(now: number) {
          const p = Math.min((now - start) / durationMs, 1);
          onUpdate(from + (to - from) * ease(p));
          if (p < 1) raf = requestAnimationFrame(tick);
          else resolve();
        }
        raf = requestAnimationFrame(tick);
        cleanups.push(() => cancelAnimationFrame(raf));
      });
    }

    async function run() {
      while (aliveRef.current) {
        setTotal(0);
        setProgress(0);
        await wait(T.INIT);                                          if (!aliveRef.current) return;
        await tween(0, TOTAL, T.TOTAL, easeOutExpo,  setTotal);
        await wait(T.PRE_FILL);                                      if (!aliveRef.current) return;
        await tween(0, 100,   T.FILL,  easeOutCubic, setProgress);
        await wait(T.HOLD);                                          if (!aliveRef.current) return;
      }
    }

    run();
    return () => {
      aliveRef.current = false;
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="swiss-grid-pattern border-[3px] border-swiss-ink bg-swiss-paper p-6 md:p-8 w-full overflow-hidden"
    >
      {/* ── Inbound header ──────────────────────────────────────────────── */}
      <div className="flex items-end justify-between border-b-[3px] border-swiss-ink pb-5">
        <div>
          <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-swiss-ink/60">
            <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
            Inbound · brand payment
          </p>
          <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-swiss-ink">
            Nike Campaign · Q2
          </p>
        </div>
        <div className="text-right">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-swiss-ink/60">
            Total
          </p>
          <p className="mt-1 font-black tabular-nums text-swiss-ink text-2xl md:text-3xl">
            {fmt(total)}
          </p>
        </div>
      </div>

      {/* ── Column group labels — Agency / Manager / Creators ───────────── */}
      <div className="flex pt-5 pb-3">
        {ROLE_GROUPS.map((g, i) => (
          <div
            key={g.label}
            style={{ flexBasis: `${g.pct}%` }}
            className={cn(
              "px-1.5",
              i < ROLE_GROUPS.length - 1 && "border-r border-swiss-ink/30"
            )}
          >
            <span className="text-sm font-medium text-swiss-ink/40">
              {g.label}
            </span>
          </div>
        ))}
      </div>

      {/* ── Segmented bar ───────────────────────────────────────────────── */}
      <div className="relative overflow-hidden">
        <div className="relative h-8 border-y-[3px] border-swiss-ink bg-swiss-paper overflow-hidden">
          {/* Spectrum reveal — width clipped to progress */}
          <div
            className="absolute inset-y-0 left-0"
            style={{
              width: `${progress}%`,
              backgroundImage:
                "linear-gradient(90deg, #ffb7f8 0%, #c2d3ff 50%, #83efc5 100%)",
            }}
          />
          {/* Segment dividers (above the gradient so the math grid stays legible) */}
          <div className="absolute inset-0 flex pointer-events-none">
            {MEMBERS.map((m, i) => (
              <div
                key={m.id}
                style={{ flexBasis: `${m.pct}%` }}
                className={cn(
                  i < MEMBERS.length - 1 && "border-r border-swiss-ink"
                )}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Ticker grid — segment-aligned, fill-synchronized ────────────── */}
      <div className="flex border-b-[3px] border-swiss-ink">
        {MEMBERS.map((m, i) => {
          const state = stateFor(progress, m);
          const amt   = amountFor(progress, m);
          return (
            <div
              key={m.id}
              style={{ flexBasis: `${m.pct}%` }}
              className={cn(
                tickerCellVariants({ state }),
                i < MEMBERS.length - 1 && "border-r border-swiss-ink/30"
              )}
            >
              <span className="flex items-center gap-1.5 truncate text-[12px] font-bold uppercase tracking-[0.10em] text-swiss-ink">
                <span
                  aria-hidden="true"
                  className="inline-block h-2 w-2 flex-shrink-0 rounded-full bg-swiss-ink/25"
                />
                <span className="truncate">
                  {m.name}
                  <span className="text-swiss-ink/50"> · {m.pct}%</span>
                </span>
              </span>
              <span className="truncate text-[12px] font-medium text-swiss-ink/40">
                {m.handle}
              </span>
              <span className="text-[14px] font-black tabular-nums text-swiss-ink leading-tight">
                {fmt(amt)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/**
 * Splits — applied product example.
 *
 * Single-column layout: copy stacked top to bottom, full-width viz below.
 * Segmented bar reveals the swiss spectrum left → right; ticker grid
 * annotates the cascade.
 */
export function Splits() {
  return (
    <section
      id="applied"
      className="border-b-[3px] border-swiss-ink bg-swiss-paper swiss-layer"
    >
      <Container className="py-20 md:py-28 lg:py-32">
        <div className="flex flex-col gap-10">
          <SectionLabel number="02">In Practice</SectionLabel>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
            <h2 className="font-black uppercase text-display-sm">
              Your Payout<br />
              Waterfall<br />
              On Autopilot.
            </h2>
            <div className="w-full flex-shrink-0 lg:w-auto">
              <Button asChild variant="primary" size="lg" className="w-full lg:w-auto">
                <Link href={DEMO_URL}>
                  See it in action
                  <span aria-hidden="true">→</span>
                </Link>
              </Button>
            </div>
          </div>

          <p className="text-base leading-relaxed text-swiss-ink/80 md:text-lg">
            Stop reconciling payments across spreadsheets and DMs. Tag your
            payees, set the splits, and let Riff handle invoicing, FX, and
            distribution down the entire waterfall.
          </p>

          <PayoutWaterfall />

          <ul className="space-y-4">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-4 border-b border-swiss-ink/20 pb-4">
                <Check
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-swiss-ink"
                  strokeWidth={3}
                />
                <span className="text-sm leading-relaxed md:text-base">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
