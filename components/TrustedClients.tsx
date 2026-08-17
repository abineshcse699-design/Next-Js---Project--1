"use client";

import { useRef, type FC, type CSSProperties, type MouseEvent } from "react";
import Reveal from "./Reveal";

/**
 * Signature: a colorful bento of big tilt cards. Each card carries its own
 * brand-tinted gradient wash (always visible, not just on hover — the
 * request was "colorful", not "colorful on interaction"), a large icon +
 * wordmark, and tracks the cursor to tilt in 3D like a physical card
 * catching light. A slow shimmer sweeps the border on a loop so the grid
 * never sits fully still, and entrance is a staggered scale-fade.
 */

type IconProps = { className?: string };

type ClientLogo = {
  name: string;
  accent: string;
  accentSoft: string; // lighter tint for background wash
  Icon: FC<IconProps>;
};

const IconLeaf = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M4 20c8-.3 14-4.6 15.6-14C11 6.6 4.6 11.6 4 20Z" opacity="0.55" />
    <path d="M4 20c5.3-1.7 9.3-5 11.4-9.6C9.3 11 5.4 14.5 4 20Z" />
  </svg>
);

const IconCloud = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M7.5 18a4.5 4.5 0 0 1-.6-8.96A5.5 5.5 0 0 1 17.4 8.1 4 4 0 0 1 17 16H7.5a4.5 4.5 0 0 1 0 2Z" />
  </svg>
);

const IconSquareOne = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <rect x="3" y="3" width="18" height="18" rx="6" fill="currentColor" />
    <path
      d="M11 8.5h1.6v7"
      stroke="white"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconFork = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M7 3v6a2 2 0 0 0 4 0V3M9 9v12" strokeLinecap="round" />
    <path d="M16 3c-1.3 0-2 1.6-2 4s.7 4 2 4v9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconCheckLeaf = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M4 13c6.6 0 10.6-3.4 12-9-6.6.7-10.8 3.6-12 9Z" strokeLinejoin="round" />
    <path d="M8 20l8-14" strokeLinecap="round" />
  </svg>
);

const IconPanda = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <circle cx="12" cy="13" r="7" opacity="0.15" />
    <circle cx="7" cy="6.5" r="2.4" />
    <circle cx="17" cy="6.5" r="2.4" />
    <circle cx="12" cy="13" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="9" cy="12" r="1.3" />
    <circle cx="15" cy="12" r="1.3" />
  </svg>
);

const IconBiome = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 3v18M12 3 6 8M12 3l6 5M4 14l8-3 8 3" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="4" cy="14" r="1.4" fill="currentColor" stroke="none" />
    <circle cx="20" cy="14" r="1.4" fill="currentColor" stroke="none" />
    <circle cx="12" cy="21" r="1.4" fill="currentColor" stroke="none" />
  </svg>
);

const CLIENTS: ClientLogo[] = [
  { name: "Entrans", accent: "#2FA85B", accentSoft: "#E6F7EC", Icon: IconLeaf },
  { name: "Apexx Cloud", accent: "#3E7FBF", accentSoft: "#E8F1FB", Icon: IconCloud },
  { name: "Turbodev", accent: "#6C4CF1", accentSoft: "#EFEAFF", Icon: IconSquareOne },
  { name: "Kurryzo", accent: "#E23E86", accentSoft: "#FDE9F1", Icon: IconFork },
  { name: "KareerSity", accent: "#2C7BE5", accentSoft: "#E8F0FE", Icon: IconCheckLeaf },
  { name: "Filecentral", accent: "#17A089", accentSoft: "#E4F7F3", Icon: IconPanda },
  { name: "TheThirdBiome", accent: "#C6862B", accentSoft: "#FCF0DD", Icon: IconBiome },
];

function TiltCard({ client, index }: { client: ClientLogo; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { Icon } = client;

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    const rotateY = (px - 0.5) * 16; // left/right tilt
    const rotateX = (0.5 - py) * 16; // up/down tilt
    el.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.045,1.045,1.045)`;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(700px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
  };

  return (
    <Reveal>
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="shimmer-border reveal-card relative flex h-[176px] w-[240px] flex-col justify-between overflow-hidden rounded-[26px] p-6 opacity-0 shadow-[0_10px_28px_-14px_rgba(16,24,40,0.18)] transition-transform duration-200 ease-out will-change-transform"
        style={
          {
            background: `linear-gradient(155deg, ${client.accentSoft} 0%, #ffffff 62%)`,
            "--accent": client.accent,
            animationDelay: `${index * 110}ms`,
          } as CSSProperties
        }
      >
        {/* radial highlight that follows the cursor */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100"
          style={{
            background:
              "radial-gradient(180px circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.55), transparent 60%)",
          }}
        />

        <div
          className="flex h-12 w-12 items-center justify-center rounded-2xl shadow-sm"
          style={{ background: client.accent }}
        >
          <Icon className="h-6 w-6 text-white" />
        </div>

        <span className="relative font-display text-[22px] font-extrabold leading-tight tracking-tight text-slate-900">
          {client.name}
        </span>
      </div>
    </Reveal>
  );
}

export default function TrustedClients() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 85% 0%, rgba(108,76,241,0.08), transparent 65%), radial-gradient(ellipse 50% 40% at 0% 100%, rgba(46,168,91,0.06), transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mx-auto max-w-xl text-center">
            <span className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-signal-blue">
              Trusted network
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-[1.15] text-slate-900 sm:text-[2.6rem]">
              Trusted by Leading Industry Clients Globally
            </h2>
            <p className="mt-4 font-body text-[17px] leading-relaxed text-slate-500">
              Delivering tailored technology solutions that power success,
              innovation, and seamless digital transformation.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 flex flex-wrap justify-center gap-6">
          {CLIENTS.map((client, i) => (
            <TiltCard key={client.name} client={client} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes card-fade-in {
          from { opacity: 0; transform: translateY(18px) scale(0.94); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .reveal-card {
          animation: card-fade-in 0.65s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .shimmer-border {
          border: 1px solid transparent;
          background-clip: padding-box, border-box;
        }
        .shimmer-border::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(
            120deg,
            transparent 0%,
            var(--accent) 45%,
            transparent 60%
          );
          background-size: 220% 220%;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0.55;
          animation: shimmer-sweep 5.5s linear infinite;
          pointer-events: none;
        }
        @keyframes shimmer-sweep {
          0% { background-position: 0% 0%; }
          100% { background-position: 220% 220%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .reveal-card,
          .shimmer-border::before {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}