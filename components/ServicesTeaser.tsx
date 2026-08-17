import Link from "next/link";
import Reveal from "./Reveal";

export default function ServicesTeaser() {
  return (
    <section className="border-t border-black/5 bg-base py-20 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 lg:flex-row lg:items-center lg:px-10">
        <Reveal className="max-w-lg">
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-signal-violet">
            What we do
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Product, data, AI, and DevOps — one team, full stack
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full bg-signal-gradient px-8 py-3.5 font-body text-[15px] font-semibold text-white shadow-[0_12px_28px_-10px_rgba(108,76,241,0.6)] transition-transform hover:scale-[1.03]"
          >
            See all capabilities
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3.5 8h9M8.5 3.5 13 8l-4.5 4.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}