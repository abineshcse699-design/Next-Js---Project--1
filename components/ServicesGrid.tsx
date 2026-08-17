"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";

const services = [
  {
    number: "01",
    title: "ServiceNow Consulting",
    short: "01",
    description:
      "Implement, customize and optimize ServiceNow across ITSM, ITOM, HRSD and CSM to streamline enterprise workflows and drive digital transformation.",
    tags: ["ITSM", "ITOM", "CSM"],
  },
  {
    number: "02",
    title: "Salesforce Consulting",
    short: "02",
    description:
      "Design, implement and customize Salesforce solutions across Sales Cloud, Service Cloud and Marketing Cloud to strengthen customer relationships and accelerate revenue growth.",
    tags: ["CRM", "Sales Cloud", "Automation"],
  },
  {
    number: "03",
    title: "Product Engineering",
    short: "03",
    description:
      "Transform ambitious ideas into scalable digital products with strategy, UX, architecture and full-cycle engineering.",
    tags: ["Web", "Mobile", "SaaS"],
  },
  {
    number: "04",
    title: "AI / ML & Gen AI",
    short: "04",
    description:
      "Build intelligent products using machine learning, generative AI, LLMs, automation and AI-powered workflows.",
    tags: ["LLM", "Gen AI", "ML"],
  },
  {
    number: "05",
    title: "Cloud Engineering",
    short: "05",
    description:
      "Design secure, scalable cloud infrastructure across AWS, Azure and GCP with modern DevOps practices.",
    tags: ["AWS", "Azure", "GCP"],
  },
  {
    number: "06",
    title: "Data Engineering",
    short: "06",
    description:
      "Create reliable data platforms, pipelines and analytics systems that turn complex information into decisions.",
    tags: ["Data", "BI", "Analytics"],
  },
  {
    number: "07",
    title: "Software Modernization",
    short: "07",
    description:
      "Modernize legacy applications and infrastructure while reducing technical debt and improving performance.",
    tags: ["Migration", "APIs", "Cloud"],
  },
  {
    number: "08",
    title: "UI / UX Engineering",
    short: "08",
    description:
      "Design intuitive, conversion-focused digital experiences that connect user needs with business outcomes.",
    tags: ["UX", "UI", "Design"],
  },
  {
    number: "09",
    title: "Cybersecurity",
    short: "09",
    description:
      "Strengthen your applications and infrastructure with secure engineering practices and resilient architecture.",
    tags: ["Security", "Risk", "Cloud"],
  },
  {
    number: "10",
    title: "DevOps & Quality",
    short: "10",
    description:
      "Accelerate delivery with automation, CI/CD, observability, testing and continuous quality engineering.",
    tags: ["DevOps", "QA", "CI/CD"],
  },
  {
    number: "11",
    title: "BI & Dashboards",
    short: "11",
    description:
      "Turn business data into clear, actionable dashboards using modern analytics and business intelligence platforms.",
    tags: ["Power BI", "Tableau", "Reports"],
  },
  {
    number: "12",
    title: "IT Staff Augmentation",
    short: "12",
    description:
      "Scale your engineering capacity with vetted, on-demand technology talent that integrates seamlessly into your existing teams and delivery processes.",
    tags: ["Staffing", "Remote Teams", "Scale-up"],
  },
];

export default function ServicesGrid() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#101014] px-6 py-28 lg:px-10 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <Reveal>
          <div className="mb-20 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-signal-violet">
                What we build
              </span>

              <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Technology services
                <span className="block text-white/30">
                  designed around your goals.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-base leading-7 text-white/45">
              One engineering partner across product, AI, cloud, data,
              security and experience.
            </p>

          </div>
        </Reveal>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (
            <Reveal key={service.title}>

              <article
                className={`group relative min-h-[380px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 transition-all duration-700 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.055] ${
                  index === 0
                    ? "lg:col-span-2"
                    : ""
                }`}
              >

                {/* Glow */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-signal-violet/20 blur-[80px] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                {/* Number */}
                <div className="flex items-center justify-between">

                  <span className="font-mono text-xs text-white/25">
                    {service.number}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-500 group-hover:rotate-45 group-hover:border-signal-violet group-hover:text-white">
                    ↗
                  </span>

                </div>

                {/* Content */}
                <div className="relative mt-20">

                  <h3 className="max-w-xl font-display text-2xl font-bold text-white transition-colors duration-500 group-hover:text-signal-violet sm:text-3xl">
                    {service.title}
                  </h3>

                  <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/45 transition-colors duration-500 group-hover:text-white/60">
                    {service.description}
                  </p>

                </div>

                {/* Tags */}
                <div className="absolute bottom-7 left-7 flex flex-wrap gap-2">

                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-wider text-white/35 transition-colors duration-300 group-hover:border-white/20 group-hover:text-white/55"
                    >
                      {tag}
                    </span>
                  ))}

                </div>

                {/* Bottom line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-signal-gradient transition-all duration-700 group-hover:w-full" />

              </article>

            </Reveal>
          ))}

        </div>

        {/* Small CTA */}
        <Reveal>
          <div className="mt-16 flex flex-col items-start justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:flex-row md:items-center">

            <div>
              <p className="font-semibold text-white">
                Have a complex technology challenge?
              </p>

              <p className="mt-1 text-sm text-white/40">
                Let&apos;s figure out the right engineering approach together.
              </p>
            </div>

            <Link
              href="/contact"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              Start a conversation →
            </Link>

          </div>
        </Reveal>

      </div>
    </section>
  );
}