"use client";

import React from "react";
import Reveal from "./Reveal";

// ─── Data ────────────────────────────────────────────────────────────────────

type Tech = {
  id: string;
  name: string;
  category: string;
  /** Tailwind size class applied to the logo wrapper */
  logoSize?: string;
  logo: React.ReactNode;
  /** Accent color for the card's subtle glow on hover */
  accentColor: string;
};

// ─── SVG Logos ───────────────────────────────────────────────────────────────

function LogoPostgres() {
  return (
    <svg viewBox="0 0 48 48" className="h-full w-full" aria-hidden="true">
      <path
        d="M44.1 21.5c-.8-6.5-4.6-12.2-10.2-15.5C28.3 2.7 21.7 2.7 16.1 6c-5.6 3.3-9.4 9-10.2 15.5-.8 6.5 1.5 13 6.2 17.5l1.3 1.2c.4.4.6.9.6 1.4v1.5c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-1.5c0-.5.2-1 .6-1.4l1.3-1.2c4.7-4.5 7-11 6.2-17.5Z"
        fill="#336791"
      />
      <path
        d="M24 8c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16S32.8 8 24 8Z"
        fill="#fff"
        opacity=".15"
      />
      <text
        x="24"
        y="28"
        textAnchor="middle"
        fontSize="14"
        fontWeight="bold"
        fill="#fff"
        fontFamily="serif"
      >
        pg
      </text>
    </svg>
  );
}

function LogoPython() {
  return (
    <svg viewBox="0 0 48 48" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="pyTop" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#387EB8" />
          <stop offset="100%" stopColor="#366994" />
        </linearGradient>
        <linearGradient id="pyBot" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFE052" />
          <stop offset="100%" stopColor="#FFC331" />
        </linearGradient>
      </defs>
      <path
        d="M23.9 4C15.6 4 16.1 7.6 16.1 7.6v3.9H24v1.2H11.8S6 12.1 6 20.5c0 8.4 4.7 8.1 4.7 8.1h2.8v-3.9c0-4.7 4.1-4.4 4.1-4.4h7.1s3.9.1 3.9-3.8V9.3S29.2 4 23.9 4ZM20.1 7.4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
        fill="url(#pyTop)"
      />
      <path
        d="M24.1 44c8.3 0 7.8-3.6 7.8-3.6v-3.9H24v-1.2h12.2s5.8.6 5.8-7.8c0-8.4-4.7-8.1-4.7-8.1h-2.8v3.9c0 4.7-4.1 4.4-4.1 4.4h-7.1s-3.9-.1-3.9 3.8v6.4S18.8 44 24.1 44ZM27.9 40.6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
        fill="url(#pyBot)"
      />
    </svg>
  );
}

function LogoOpenAI() {
  return (
    <svg viewBox="0 0 48 48" className="h-full w-full" aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill="#fff" />
      <path
        d="M24 4a20 20 0 1 0 0 40A20 20 0 0 0 24 4Zm0 5a15 15 0 0 1 12.99 7.5H11A15 15 0 0 1 24 9Zm-15 15a15 15 0 0 1 .77-4.8l13 22.52A15 15 0 0 1 9 24Zm21.23 13.3L17.22 14.5H30.8A15 15 0 0 1 39 24a14.93 14.93 0 0 1-8.77 13.3Z"
        fill="#1a1a1a"
      />
    </svg>
  );
}

function LogoNodeJS() {
  return (
    <svg viewBox="0 0 48 48" className="h-full w-full" aria-hidden="true">
      <path
        d="M24 3 4 15v24l20 12 20-12V15Z"
        fill="#3c873a"
      />
      <path
        d="M24 3 4 15l20 12 20-12Z"
        fill="#3c873a"
        opacity=".6"
      />
      <path
        d="M4 15v24l20 12V27Z"
        fill="#3c873a"
        opacity=".7"
      />
      <path
        d="M24 27v27l20-12V15Z"
        fill="#3c873a"
        opacity=".85"
      />
      <text
        x="24"
        y="30"
        textAnchor="middle"
        fontSize="11"
        fontWeight="bold"
        fill="#fff"
        fontFamily="sans-serif"
      >
        JS
      </text>
    </svg>
  );
}

function LogoCloudflare() {
  return (
    <svg viewBox="0 0 48 48" className="h-full w-full" aria-hidden="true">
      <path
        d="M32.5 29.5c.3-1 .2-2-.2-2.8-.4-.8-1.2-1.3-2.1-1.5l-15.4-.1c-.1 0-.2-.1-.3-.2-.1-.1-.1-.2 0-.3l.4-1c.3-.9.2-1.9-.3-2.7-.5-.8-1.3-1.3-2.2-1.4C9.5 19.3 7 21.5 7 24.4v.4L5.6 27c-.3.5-.4 1.1-.3 1.7.1.6.5 1.1 1 1.4l.9.5H32l.5-1.1Z"
        fill="#F6821F"
      />
      <path
        d="M36.5 23.6c-.1 0-.3 0-.4.1-.1-3.7-3.1-6.7-6.8-6.7-1.5 0-2.9.5-4.1 1.4-.5-3.3-3.4-5.8-6.9-5.8-3.9 0-7 3.1-7 7 0 .4 0 .8.1 1.2-.2 0-.4-.1-.6-.1-2.2 0-3.9 1.8-3.9 4s1.7 4 3.9 4h25.7c2 0 3.5-1.6 3.5-3.5s-1.5-3.6-3.5-3.6Z"
        fill="#FBAD41"
      />
    </svg>
  );
}

function LogoAzure() {
  return (
    <svg viewBox="0 0 48 48" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="azGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0072c6" />
          <stop offset="100%" stopColor="#00b4f1" />
        </linearGradient>
      </defs>
      <path
        d="M20.3 6.1 8 39.5h8.7l3-8.6H29l-5.8-16.3 5.8 16.3h8.3L24.7 6.1Z"
        fill="url(#azGrad)"
      />
      <path
        d="M29 30.9H19.7l-3 8.6h24.7Z"
        fill="#0072c6"
        opacity=".8"
      />
    </svg>
  );
}

function LogoAndroid() {
  return (
    <svg viewBox="0 0 48 48" className="h-full w-full" aria-hidden="true">
      <path
        d="M12 30a12 12 0 0 0 24 0V18H12v12Zm5-18.3L14.5 9l1.8-1 2.8 4.8A12 12 0 0 1 24 12c1.7 0 3.4.3 4.9.8L31.7 8l1.8 1-2.5 3.7A11.9 11.9 0 0 1 36 18H12a11.9 11.9 0 0 1 5-6.3Z"
        fill="#3DDC84"
      />
      <circle cx="19" cy="15" r="1.5" fill="#fff" />
      <circle cx="29" cy="15" r="1.5" fill="#fff" />
    </svg>
  );
}

function LogoSwift() {
  return (
    <svg viewBox="0 0 48 48" className="h-full w-full" aria-hidden="true">
      <rect width="48" height="48" rx="10" fill="#F05138" />
      <path
        d="M38 28.4c.2-.5.3-1 .3-1.5 0-2.5-1.8-4.7-4.5-5.8.8-2 .7-4.2-.3-6C30.8 11.4 25 11 20 14.4c-1.7 1.1-3.2 2.6-4.3 4.4-4.6 1.1-7.7 4-7.7 7.5 0 .6.1 1.1.2 1.6C7 29.5 6.5 31.2 6.5 33c0 4.2 3.2 7.6 8 8.7 1.4.3 2.9.5 4.4.5h10c1.3 0 2.6-.2 3.8-.5 3.5-.9 5.8-3.1 6.3-5.8.4-1.8 0-3.6-1-5.5Z"
        fill="#fff"
        opacity=".9"
      />
      <path
        d="M33.7 15.1c-1.8-3.6-6.3-5-10.5-3.3 4 2.2 6.5 6.3 6.2 10.5a10 10 0 0 0 4.3-7.2Z"
        fill="#F05138"
      />
    </svg>
  );
}

function LogoReact() {
  return (
    <svg viewBox="0 0 48 48" className="h-full w-full" aria-hidden="true">
      <circle cx="24" cy="24" r="4" fill="#61DAFB" />
      <ellipse
        cx="24"
        cy="24"
        rx="20"
        ry="8"
        stroke="#61DAFB"
        strokeWidth="2"
        fill="none"
      />
      <ellipse
        cx="24"
        cy="24"
        rx="20"
        ry="8"
        stroke="#61DAFB"
        strokeWidth="2"
        fill="none"
        transform="rotate(60 24 24)"
      />
      <ellipse
        cx="24"
        cy="24"
        rx="20"
        ry="8"
        stroke="#61DAFB"
        strokeWidth="2"
        fill="none"
        transform="rotate(120 24 24)"
      />
    </svg>
  );
}

// ─── Tech data array ──────────────────────────────────────────────────────────

const techs: Tech[] = [
  {
    id: "postgres",
    name: "POSTGRES",
    category: "Database",
    logo: <LogoPostgres />,
    accentColor: "rgba(51,103,145,0.45)",
  },
  {
    id: "python",
    name: "PYTHON",
    category: "Backend",
    logo: <LogoPython />,
    accentColor: "rgba(55,126,184,0.45)",
  },
  {
    id: "openai",
    name: "OPEN AI",
    category: "AI",
    logo: <LogoOpenAI />,
    accentColor: "rgba(255,255,255,0.18)",
  },
  {
    id: "nodejs",
    name: "NODE JS",
    category: "Backend",
    logo: <LogoNodeJS />,
    accentColor: "rgba(60,135,58,0.45)",
  },
  {
    id: "cloudflare",
    name: "CLOUDFLARE",
    category: "Cloud",
    logo: <LogoCloudflare />,
    accentColor: "rgba(246,130,31,0.35)",
  },
  {
    id: "react",
    name: "REACT",
    category: "Frontend",
    logo: <LogoReact />,
    accentColor: "rgba(97,218,251,0.35)",
  },
  {
    id: "swift",
    name: "SWIFT",
    category: "Mobile",
    logo: <LogoSwift />,
    accentColor: "rgba(240,81,56,0.4)",
  },
  {
    id: "azure",
    name: "AZURE",
    category: "Cloud",
    logo: <LogoAzure />,
    accentColor: "rgba(0,114,198,0.45)",
  },
  {
    id: "android",
    name: "ANDROID",
    category: "Mobile",
    logo: <LogoAndroid />,
    accentColor: "rgba(61,220,132,0.35)",
  },
];

// ─── TechCard ─────────────────────────────────────────────────────────────────

type TechCardProps = {
  tech: Tech;
  /** Extra tailwind classes for sizing/positioning in the grid */
  className?: string;
};

function TechCard({ tech, className = "" }: TechCardProps) {
  return (
    <div
      className={`group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 ${className}`}
      style={
        {
          "--accent": tech.accentColor,
        } as React.CSSProperties
      }
    >
      {/* Hover glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(120% 80% at 20% 10%, var(--accent), transparent 65%)`,
          boxShadow: `0 0 40px -10px var(--accent)`,
        }}
        aria-hidden="true"
      />

      {/* Logo */}
      <div className="relative z-10 h-10 w-10 shrink-0 transition-transform duration-300 group-hover:scale-110">
        {tech.logo}
      </div>

      {/* Text */}
      <div className="relative z-10">
        <p className="font-display text-sm font-bold uppercase tracking-wider text-white">
          {tech.name}
        </p>
        <p className="mt-0.5 font-body text-xs text-white/50">{tech.category}</p>
      </div>
    </div>
  );
}

// ─── Layout helpers ───────────────────────────────────────────────────────────
/**
 * The reference image shows a masonry-style 3-column layout:
 *
 *   Col A (left)   Col B (centre)   Col C (right)
 *   ┌──────────┐   ┌──────────┐    ┌──────────┐
 *   │ Postgres │   │  OpenAI  │    │  Swift   │
 *   └──────────┘   │  (tall)  │    └──────────┘
 *   ┌──────────┐   │          │    ┌──────────┐
 *   │  Python  │   └──────────┘    │  Azure   │
 *   └──────────┘   ┌──────────┐    └──────────┘
 *   ┌──────────┐   │  NodeJS  │    ┌──────────┐
 *   │Cloudflare│   │  (tall)  │    │ Android  │
 *   └──────────┘   └──────────┘    └──────────┘
 *                  ┌──────────┐
 *                  │  React   │
 *                  └──────────┘
 *
 * We implement this as a CSS grid with explicit row-span classes.
 */

export default function ModernTechStack() {
  // Map id → tech for quick lookup
  const t = Object.fromEntries(techs.map((tech) => [tech.id, tech]));

  return (
    <section className="relative overflow-hidden bg-ink py-20 lg:py-28">
      {/* Background glows */}
      <div
        className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-signal-violet/20 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-signal-blue/15 blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* ── Two-column wrapper: heading left, grid right ─────────────── */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-20">
          {/* ── Left: Heading ─────────────────────────────────────────── */}
          <Reveal className="lg:sticky lg:top-28 lg:w-72 lg:shrink-0">
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-signal-violet">
              Technology
            </span>
            <h2 className="mt-4 font-display text-5xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4rem]">
              Modern
              <br />
              Tech
              <br />
              Stack
            </h2>
            <p className="mt-6 font-body text-[15px] leading-relaxed text-white/55">
              Battle-tested technologies we use to design, build, and scale
              production-grade AI&nbsp;&amp;&nbsp;software systems.
            </p>

            {/* Gradient underline accent */}
            <div className="mt-8 h-1 w-16 rounded-full bg-signal-gradient" />
          </Reveal>

          {/* ── Right: Masonry grid ───────────────────────────────────── */}
          {/*
           * Desktop (lg): 3-col CSS grid with explicit row-spans to replicate
           * the staggered masonry look from the reference image.
           * Tablet (md):  2-col auto grid.
           * Mobile:       1-col stacked list.
           */}
          <div className="flex-1">
            {/* ── DESKTOP masonry layout (hidden below lg) ───────────── */}
            <div className="hidden lg:grid lg:grid-cols-3 lg:grid-rows-[auto_auto_auto_auto] lg:gap-4">
              {/* Col A — rows 1-3 */}
              <Reveal delay={60} className="row-start-1 col-start-1">
                <TechCard tech={t.postgres} className="h-full" />
              </Reveal>
              <Reveal delay={120} className="row-start-2 col-start-1">
                <TechCard tech={t.python} className="h-full" />
              </Reveal>
              <Reveal delay={180} className="row-start-3 col-start-1">
                <TechCard tech={t.cloudflare} className="h-full" />
              </Reveal>

              {/* Col B — OpenAI spans rows 1-2, NodeJS spans rows 3-4, React row 5 */}
              <Reveal delay={90} className="row-start-1 row-end-3 col-start-2">
                <TechCard tech={t.openai} className="h-full min-h-[196px]" />
              </Reveal>
              <Reveal delay={150} className="row-start-3 row-end-5 col-start-2">
                <TechCard tech={t.nodejs} className="h-full min-h-[196px]" />
              </Reveal>
              <Reveal delay={210} className="row-start-5 col-start-2">
                <TechCard tech={t.react} className="h-full" />
              </Reveal>

              {/* Col C — rows 1-3 */}
              <Reveal delay={120} className="row-start-1 col-start-3">
                <TechCard tech={t.swift} className="h-full" />
              </Reveal>
              <Reveal delay={180} className="row-start-2 col-start-3">
                <TechCard tech={t.azure} className="h-full" />
              </Reveal>
              <Reveal delay={240} className="row-start-3 col-start-3">
                <TechCard tech={t.android} className="h-full" />
              </Reveal>
            </div>

            {/* ── TABLET 2-col auto grid (md, hidden lg) ─────────────── */}
            <div className="hidden grid-cols-2 gap-4 md:grid lg:hidden">
              {techs.map((tech, i) => (
                <Reveal key={tech.id} delay={i * 60}>
                  <TechCard tech={tech} />
                </Reveal>
              ))}
            </div>

            {/* ── MOBILE single column (below md) ────────────────────── */}
            <div className="grid grid-cols-1 gap-4 md:hidden">
              {techs.map((tech, i) => (
                <Reveal key={tech.id} delay={i * 50}>
                  <TechCard tech={tech} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
