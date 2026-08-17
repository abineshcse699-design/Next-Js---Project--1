"use client";

import { useEffect, useRef } from "react";

const reasons = [
  {
    number: "01",
    title: "Fast Launch",
    description: "And Revenue",
  },
  {
    number: "02",
    title: "Built For",
    description: "Scalability",
  },
  {
    number: "03",
    title: "Secure And",
    description: "Safe",
  },
  {
    number: "04",
    title: "Flexible",
    description: "Solutions",
  },
];

export default function WhyStarfii() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("why-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-base px-6 py-24 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <span className="mb-4 block font-mono text-xs uppercase tracking-[0.25em] text-signal-violet">
            Why choose us
          </span>

          <h1 className="font-display text-5xl font-bold tracking-tight text-ink sm:text-6xl lg:text-7xl">
            WHY STARFII
          </h1>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item, index) => (
            <div
              key={item.number}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="why-card group relative min-h-[360px] overflow-hidden border border-black/10 bg-white p-8 opacity-0 transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl"
              style={{
                transitionDelay: `${index * 120}ms`,
              }}
            >
              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-signal-gradient transition-transform duration-500 group-hover:scale-x-100" />

              <div className="flex h-full flex-col justify-end">
                <div className="mb-auto">
                  <span className="font-display text-7xl font-bold tracking-tight text-ink">
                    {item.number}
                  </span>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-ink">
                    {item.title}
                  </h2>

                  <p className="mt-1 font-display text-2xl font-bold text-ink">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-signal-violet/10 blur-3xl transition-all duration-700 group-hover:scale-150" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}