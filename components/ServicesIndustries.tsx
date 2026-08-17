"use client";

import Reveal from "@/components/Reveal";

const industries = [
  "E-Commerce & Retail",
  "Healthcare",
  "Finance & FinTech",
  "Transportation",
  "Ed-Tech",
  "Travel & Booking",
  "Automotive",
  "Enterprise Software",
];

export default function ServicesIndustries() {
  return (
    <section className="bg-ink px-6 py-24 lg:px-10 lg:py-32">

      <div className="mx-auto max-w-7xl">

        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">

            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-signal-blue">
                Industry expertise
              </span>

              <h2 className="mt-5 font-display text-4xl font-bold text-white sm:text-5xl">
                Built for
                <span className="block text-white/30">
                  real businesses.
                </span>
              </h2>

              <p className="mt-6 max-w-md leading-7 text-white/45">
                We combine engineering expertise with industry context to
                create solutions that solve real operational and customer
                problems.
              </p>
            </div>

            <div className="grid grid-cols-1 border-l border-white/10 sm:grid-cols-2">

              {industries.map((industry, index) => (
                <div
                  key={industry}
                  className="group flex items-center justify-between border-b border-white/10 px-6 py-6 transition-all duration-300 hover:bg-white/[0.04]"
                >
                  <span className="text-sm text-white/60 transition-colors group-hover:text-white">
                    {industry}
                  </span>

                  <span className="text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-signal-violet">
                    ↗
                  </span>
                </div>
              ))}

            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}