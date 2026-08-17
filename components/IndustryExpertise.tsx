"use client";

import { useEffect, useRef } from "react";

const industries = [
  {
    title: "E-Commerce & Marketplaces",
    icon: "bag",
  },
  {
    title: "Travel & Booking",
    icon: "plane",
  },
  {
    title: "Healthcare & Wellness",
    icon: "heart",
  },
  {
    title: "Finance",
    icon: "chart",
  },
  {
    title: "Ed-Tech & E-Learning",
    icon: "cap",
  },
  {
    title: "Transportation And Logistics",
    icon: "truck",
  },
];

function Icon({ type }: { type: string }) {
  const common = {
    width: 25,
    height: 25,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
  };

  if (type === "plane") {
    return (
      <svg {...common} viewBox="0 0 24 24">
        <path d="M2 12h20M13 3l9 9-9 9M13 3v18" />
      </svg>
    );
  }

  if (type === "heart") {
    return (
      <svg {...common} viewBox="0 0 24 24">
        <path d="M20 12H16l-2-5-4 10-2-5H4" />
      </svg>
    );
  }

  if (type === "chart") {
    return (
      <svg {...common} viewBox="0 0 24 24">
        <path d="M4 19V5M4 19h17M7 15l4-4 3 2 5-7" />
      </svg>
    );
  }

  if (type === "cap") {
    return (
      <svg {...common} viewBox="0 0 24 24">
        <path d="M2 9l10-5 10 5-10 5L2 9Z" />
        <path d="M6 11v5c3 3 9 3 12 0v-5" />
      </svg>
    );
  }

  if (type === "truck") {
    return (
      <svg {...common} viewBox="0 0 24 24">
        <path d="M3 6h11v10H3zM14 10h4l3 3v3h-7z" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
      </svg>
    );
  }

  return (
    <svg {...common} viewBox="0 0 24 24">
      <path d="M5 4h14v16H5z" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </svg>
  );
}

export default function IndustryExpertise() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("industry-visible");
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="industry-section bg-base px-6 py-24 sm:py-32 lg:px-12"
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-signal-violet">
            Our expertise
          </span>

          <h1 className="mt-5 max-w-sm font-display text-5xl font-bold leading-[0.95] text-ink sm:text-6xl">
            INDUSTRY
            <br />
            EXPERTISE
          </h1>

          <button className="mt-10 rounded-full border border-ink px-7 py-3 text-sm font-semibold transition-all duration-300 hover:bg-ink hover:text-white">
            Learn more →
          </button>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {industries.map((industry, index) => (
            <div
              key={industry.title}
              className="industry-item flex items-center gap-5 border-b border-black/10 pb-5 pt-5 opacity-0"
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-ink text-white">
                <Icon type={industry.icon} />
              </div>

              <h2 className="font-body text-base font-medium text-ink">
                {industry.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}