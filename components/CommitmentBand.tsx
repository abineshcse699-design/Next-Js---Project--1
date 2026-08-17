import Reveal from "./Reveal";

export default function CommitmentBand() {
  return (
    <section className="relative overflow-hidden bg-base py-20 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#0B0B14 1px, transparent 1px), linear-gradient(90deg, #0B0B14 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-signal-blue">
            How we work
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Our commitment to shipping with care
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-body text-lg leading-relaxed text-slate">
            Every engagement is staffed for the long run — not just the
            launch. We build in guardrails for reliability, cost, and your
            team&apos;s ability to own the codebase after we hand it off.
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-9">
          <a
            href="#poc"
            className="inline-flex items-center gap-2 rounded-full bg-signal-gradient px-8 py-3.5 font-body text-[15px] font-semibold text-white shadow-[0_12px_28px_-10px_rgba(108,76,241,0.6)] transition-transform hover:scale-[1.03]"
          >
            Talk to our team
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