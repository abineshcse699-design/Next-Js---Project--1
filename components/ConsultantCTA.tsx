import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function ConsultantCTA() {
  return (
    <section className="bg-ink px-6 pb-24 text-white lg:px-10 lg:pb-32">

      <div className="mx-auto max-w-7xl">

        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#191923] to-[#101018] p-8 sm:p-12 lg:p-16">

            {/* Glow */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-signal-violet/20 blur-[100px]" />

            <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">

              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-signal-blue">
                  Need expert guidance?
                </span>

                <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                  Not sure which service
                  <span className="block bg-signal-gradient bg-clip-text text-transparent">
                    fits your business?
                  </span>
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-7 text-white/55 lg:text-lg">
                  Talk to our technology consultants. We’ll understand your
                  business goals, identify the right technical approach and
                  help you create a practical roadmap for your next stage of
                  growth.
                </p>
              </div>

              <Link
                href="/contact"
                className="group flex w-fit items-center gap-4 rounded-full bg-white px-7 py-4 font-semibold text-ink transition-all duration-500 hover:scale-105 hover:bg-signal-violet hover:text-white"
              >
                Book a consultation

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white transition-transform duration-500 group-hover:rotate-45">
                  ↗
                </span>
              </Link>

            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}