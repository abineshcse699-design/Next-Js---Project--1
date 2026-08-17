import Reveal from "./Reveal";

type Capability = {
  title: string;
  description: string;
  icon: (props: { className?: string }) => React.ReactNode;
  palette: "violet" | "blue" | "solidBlue" | "night";
};

function IconLayers({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 3 3 8l9 5 9-5-9-5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m3 12 9 5 9-5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m3 16 9 5 9-5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function IconDatabase({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <ellipse cx="12" cy="6" rx="7" ry="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5 6v12c0 1.66 3.13 3 7 3s7-1.34 7-3V6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5 12c0 1.66 3.13 3 7 3s7-1.34 7-3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function IconCube({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M3 7l9 5 9-5M12 12v10" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function IconShield({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 3 4 6v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V6l-8-3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconSpark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 2c0 4.5 3 7.5 7.5 7.5-4.5 0-7.5 3-7.5 7.5 0-4.5-3-7.5-7.5-7.5C9 9.5 12 6.5 12 2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconGauge({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 15a8 8 0 1 1 16 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 15 16 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="15" r="1.3" fill="currentColor" />
    </svg>
  );
}

const capabilities: Capability[] = [
  {
    title: "Enterprise Product Engineering",
    description:
      "End-to-end product builds that pair AI-native frameworks with disciplined engineering, so scale doesn't come at the cost of stability.",
    icon: IconLayers,
    palette: "violet",
  },
  {
    title: "Data Engineering & Data Science",
    description:
      "Resilient data pipelines and modeling work that turn raw operational data into decisions your teams can act on same-day.",
    icon: IconDatabase,
    palette: "blue",
  },
  {
    title: "SaaS Product Engineering",
    description:
      "Multi-tenant, fintech, and healthcare-grade SaaS delivered for teams from early-stage startups through Fortune 500 platforms.",
    icon: IconCube,
    palette: "solidBlue",
  },
  {
    title: "Legacy Software Modernization",
    description:
      "We audit what's running today, map a phased modernization path, and migrate you onto a stack built for the next decade.",
    icon: IconShield,
    palette: "night",
  },
  {
    title: "Enterprise AI/ML, Gen AI & LLM Engineering",
    description:
      "Applied AI that removes manual work from real workflows — retrieval, agents, and fine-tuned models shipped to production.",
    icon: IconSpark,
    palette: "violet",
  },
  {
    title: "DevOps & Quality Engineering",
    description:
      "CI/CD, infrastructure-as-code, and automated test coverage that compress release cycles without compromising reliability.",
    icon: IconGauge,
    palette: "blue",
  },
];

const palettes: Record<Capability["palette"], string> = {
  violet:
    "radial-gradient(120% 90% at 20% 15%, rgba(108,76,241,0.55), transparent 60%), radial-gradient(100% 80% at 90% 100%, rgba(62,139,255,0.35), transparent 55%), #14101f",
  blue: "radial-gradient(110% 90% at 85% 10%, rgba(62,139,255,0.5), transparent 60%), radial-gradient(90% 80% at 10% 100%, rgba(108,76,241,0.35), transparent 55%), #0c1420",
  solidBlue:
    "linear-gradient(155deg, rgba(62,139,255,0.9), rgba(108,76,241,0.9))",
  night:
    "radial-gradient(140% 100% at 50% 0%, rgba(108,76,241,0.25), transparent 55%), #0B0B14",
};

export default function Capabilities() {
  return (
    <section id="services" className="bg-base py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-xl">
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-signal-violet">
            Capabilities
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Technical competencies & service capabilities
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <Reveal key={cap.title} delay={i * 90}>
                <div className="group relative flex min-h-[380px] flex-col justify-end overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-20px_rgba(62,139,255,0.45)]">
                  {/* backdrop */}
                  <div
                    className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                    style={{ background: palettes[cap.palette] }}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                      backgroundImage:
                        "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                      backgroundSize: "36px 36px",
                    }}
                    aria-hidden="true"
                  />

                  {/* icon badge, top-left like the reference photo cards' category tag position */}
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 m-7 mb-0">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* bottom fade + content, same shape as the reference case-study cards */}
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-3/4 transition-opacity duration-300 group-hover:opacity-90"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(11,11,20,0.92), rgba(11,11,20,0.55) 55%, transparent)",
                    }}
                    aria-hidden="true"
                  />

                  <div className="relative z-10 p-7 pt-10 sm:p-8 sm:pt-10">
                    {/* underline that grows in on hover, like the reference cards */}
                    <span className="block h-[2px] w-8 origin-left scale-x-100 bg-signal-blue transition-all duration-300 group-hover:w-14" />

                    <h3 className="mt-3 flex items-start gap-2 font-display text-xl font-bold uppercase tracking-tight text-white transition-colors duration-300 group-hover:text-signal-blue sm:text-2xl">
                      {cap.title}
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        className="mt-1 shrink-0 text-signal-blue transition-transform duration-300 group-hover:translate-x-1.5"
                        aria-hidden="true"
                      >
                        <path d="M5 3.5l7 5.5-7 5.5V3.5Z" fill="currentColor" />
                      </svg>
                    </h3>

                    <p className="mt-3 font-body text-[15px] leading-relaxed text-white/75 transition-colors duration-300 group-hover:text-white/90">
                      {cap.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={capabilities.length * 90} className="mt-14 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-7 py-3 font-body text-sm font-semibold text-ink transition-all hover:border-signal-violet hover:bg-signal-violet/5"
          >
            Explore more services
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3.5 8h9M8.5 3.5 13 8l-4.5 4.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
