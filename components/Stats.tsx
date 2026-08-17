"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

type Stat = {
  target: number | null;
  prefix?: string;
  suffix: string;
  label: string;
};

const stats: Stat[] = [
  { target: 3, suffix: "+", label: "Global delivery studios" },
  { target: 80, suffix: "+", label: "Engineers shipping in production" },
  { target: 20, suffix: "+", label: "Enterprise partnerships live" },
  { target: null, suffix: "24/7", label: "Coverage across time zones" },
];

function useCountUp(target: number | null, start: boolean, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start || target === null) return;
    let startTime: number | null = null;
    let frame: number;

    const tick = (t: number) => {
      if (startTime === null) startTime = t;
      const progress = Math.min((t - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, target, duration]);

  return value;
}

function StatItem({ stat, start, delay }: { stat: Stat; start: boolean; delay: number }) {
  const count = useCountUp(stat.target, start);

  return (
    <Reveal delay={delay} className="border-t border-white/10 pt-6">
      <div className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {stat.target !== null ? (
          <span className="bg-signal-gradient bg-clip-text text-transparent">
            {count}
            {stat.suffix}
          </span>
        ) : (
          <span className="bg-signal-gradient bg-clip-text text-transparent">{stat.suffix}</span>
        )}
      </div>
      <p className="mt-2 font-body text-sm text-white/60">{stat.label}</p>
    </Reveal>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-ink py-20 lg:py-28">
      <div
        className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-signal-violet/25 blur-[110px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-signal-blue/20 blur-[110px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-signal-blue">
            Track record
          </span>
          <h2 className="mt-3 max-w-lg font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
            Your tech partner for the next big leap
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} start={start} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}