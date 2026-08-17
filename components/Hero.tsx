"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-base">
      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#0B0B14 1px, transparent 1px), linear-gradient(90deg, #0B0B14 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      {/* Animated ambient gradient orbs */}
      <div
        className="pointer-events-none absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-signal-violet/20 blur-[110px]"
        style={{ animation: "float-slow 9s ease-in-out infinite" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-[380px] w-[380px] rounded-full bg-signal-blue/20 blur-[110px]"
        style={{ animation: "float-slow 11s ease-in-out infinite reverse" }}
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-16 lg:grid-cols-[1fr_1fr] lg:px-10 lg:py-24">
        {/* Left: headline + content */}
        <div className="relative z-10">
          <span
            className={`inline-flex items-center gap-2 rounded-full border border-signal-violet/25 bg-signal-violet/5 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.14em] text-signal-violet transition-all duration-700 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-violet opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal-violet" />
            </span>
            Product engineering, AI-native
          </span>

          <h1
            className={`mt-6 font-display text-[2.75rem] font-bold leading-[1.05] tracking-tight text-ink transition-all duration-700 sm:text-6xl lg:text-[4rem] ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            AI-driven software,
            <br />
            built to{" "}
            <span className="relative inline-block bg-signal-gradient bg-clip-text text-transparent">
              ship and scale
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="10"
                viewBox="0 0 200 10"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 7C40 2 160 2 198 7"
                  stroke="url(#underline-gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: 220,
                    strokeDashoffset: mounted ? 0 : 220,
                    transition: "stroke-dashoffset 1.1s ease 0.6s",
                  }}
                />
                <defs>
                  <linearGradient id="underline-gradient" x1="0" y1="0" x2="200" y2="0">
                    <stop offset="0%" stopColor="#3E8BFF" />
                    <stop offset="100%" stopColor="#6C4CF1" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          <p
            className={`mt-6 max-w-xl font-body text-lg leading-relaxed text-slate transition-all duration-700 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            We design and engineer high-performance products, custom-fit to
            how your business actually runs, from first prototype to
            production scale.
          </p>

          <div
            className={`mt-8 flex flex-wrap items-center gap-5 transition-all duration-700 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <a
              href="/contact"
              className="group relative overflow-hidden rounded-full bg-signal-gradient px-7 py-3.5 font-body text-[15px] font-semibold text-white shadow-[0_12px_30px_-10px_rgba(108,76,241,0.55)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-10px_rgba(108,76,241,0.65)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start a project
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path
                    d="M3.5 8h9M8.5 3.5 13 8l-4.5 4.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>

            <button
              type="button"
              className="flex items-center gap-3 font-body text-[15px] font-semibold text-ink transition-colors hover:text-signal-violet"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/20 transition-all duration-300 group-hover:border-signal-violet">
                <svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor" aria-hidden="true">
                  <path d="M0 0.5v13l12-6.5-12-6.5Z" />
                </svg>
              </span>
              Watch how we ship
            </button>
          </div>

          <dl
            className={`mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-black/10 pt-8 transition-all duration-700 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <StatItem value="40+" label="Products shipped" />
            <StatItem value="6 wks" label="Avg. to first POC" />
            <StatItem value="24/7" label="Engineering support" />
          </dl>
        </div>

        {/* Right: visual panel */}
        <div
          className={`relative z-10 transition-all duration-1000 ${
            mounted ? "translate-y-0 scale-100 opacity-100" : "translate-y-10 scale-95 opacity-0"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          {/* rotating gradient ring behind panel */}
          <div
            className="pointer-events-none absolute -inset-4 rounded-[36px] opacity-60 blur-2xl"
            style={{
              background:
                "conic-gradient(from 0deg, #3E8BFF, #6C4CF1, #3E8BFF)",
              animation: "spin-slow 8s linear infinite",
            }}
            aria-hidden="true"
          />

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] bg-ink sm:aspect-[16/11] lg:aspect-[4/5]">
            <div
              className="absolute inset-0 flex items-center justify-center p-8"
              style={{ animation: "float-image 5s ease-in-out infinite" }}
            >
              <img
                src="/robot-hero.png"
                alt="AI-driven engineering, illustrated by a humanoid robot"
                className="h-full w-full object-contain drop-shadow-[0_30px_60px_rgba(62,139,255,0.35)]"
              />
            </div>

            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, transparent 55%, rgba(62,139,255,0.85) 68%, rgba(108,76,241,0.95) 100%)",
                clipPath: "polygon(100% 0, 100% 100%, 40% 100%, 100% 20%)",
              }}
              aria-hidden="true"
            />

            {/* Scan-line shimmer over the diagonal panel */}
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                background:
                  "linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.5) 8%, transparent 16%)",
                backgroundSize: "200% 100%",
                animation: "shimmer 3.5s ease-in-out infinite",
              }}
              aria-hidden="true"
            />

            <div className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>
              <span className="font-body text-xs font-medium text-white">
                Live delivery pod
              </span>
            </div>

            {/* Floating badge, top-left */}
            <div
              className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur-md"
              style={{ animation: "float-badge 4s ease-in-out infinite" }}
            >
              <span className="text-xs">⚡</span>
              <span className="font-body text-[11px] font-medium text-white">
                AI-native
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-30px) translateX(15px);
          }
        }

        @keyframes float-image {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes float-badge {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </section>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="group cursor-default">
      <dt className="font-display text-2xl font-bold text-ink transition-colors duration-300 group-hover:text-signal-violet">
        {value}
      </dt>
      <dd className="mt-1 font-body text-sm text-slate">{label}</dd>
    </div>
  );
}