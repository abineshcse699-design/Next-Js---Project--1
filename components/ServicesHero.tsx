"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function ServicesHero() {
  return (
    <section className="relative isolate min-h-[760px] overflow-hidden bg-ink px-6 py-28 lg:px-10 lg:py-36">

      {/* Background glow */}
      <div
        className="absolute left-1/2 top-[-220px] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-signal-violet/20 blur-[150px] animate-pulse"
        aria-hidden="true"
      />

      <div
        className="absolute right-[-180px] top-[20%] h-[420px] w-[420px] rounded-full bg-signal-blue/10 blur-[130px]"
        aria-hidden="true"
      />

      {/* Grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 90%)",
        }}
      />

      {/* Decorative circles */}
      <div className="absolute left-[8%] top-[25%] h-3 w-3 rounded-full bg-signal-violet shadow-[0_0_30px_rgba(108,76,241,.9)] animate-float" />

      <div className="absolute right-[15%] top-[35%] h-2 w-2 rounded-full bg-signal-blue shadow-[0_0_25px_rgba(62,139,255,.9)] animate-float-delayed" />

      <div className="mx-auto max-w-7xl">

        <Reveal>
          
          <div className="max-w-5xl">

            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-signal-blue" />

              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/60">
                Engineering • AI • Cloud • Data
              </span>
            </div>

            <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-white sm:text-7xl lg:text-[92px]">

              Build what&apos;s

              <span className="block bg-signal-gradient bg-clip-text text-transparent">
                next.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/55 lg:text-xl">
              From product strategy to production-grade engineering,
              STARFII helps ambitious businesses design, build and scale
              technology that creates measurable impact.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="#services"
                className="group rounded-full bg-signal-gradient px-7 py-4 font-semibold text-white shadow-[0_20px_50px_-20px_rgba(108,76,241,.8)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_60px_-15px_rgba(108,76,241,.9)]"
              >
                Explore our services

                <span className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 font-semibold text-white backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.08]"
              >
                Talk to an expert
              </Link>

            </div>

          </div>
        </Reveal>

        {/* Bottom stats */}
        <Reveal>
          <div className="mt-24 grid max-w-4xl grid-cols-2 border-t border-white/10 pt-8 md:grid-cols-4">

            <Stat number="12+" label="Core capabilities" />
            <Stat number="360°" label="Engineering support" />
            <Stat number="AI-first" label="Technology approach" />
            <Stat number="Global" label="Delivery mindset" />

          </div>
        </Reveal>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
          Scroll to explore
        </span>

        <div className="h-10 w-px overflow-hidden bg-white/10">
          <div className="h-1/2 w-full animate-scroll-line bg-signal-gradient" />
        </div>
      </div>

    </section>
  );
}

function Stat({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="border-r border-white/10 px-5 first:pl-0 last:border-r-0">
      <div className="font-display text-2xl font-bold text-white">
        {number}
      </div>

      <div className="mt-1 text-xs text-white/40">
        {label}
      </div>
    </div>
  );
}