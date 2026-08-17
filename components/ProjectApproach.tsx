import Reveal from "./Reveal";

const steps = [
  {
    no: "01",
    title: "Discover",
    text: "Understand your product, users, technology landscape, and business objectives.",
  },
  {
    no: "02",
    title: "Design",
    text: "Define the architecture, experience, roadmap, and engineering strategy.",
  },
  {
    no: "03",
    title: "Build",
    text: "Ship continuously with an experienced engineering team and measurable milestones.",
  },
  {
    no: "04",
    title: "Scale",
    text: "Improve performance, reliability, automation, and infrastructure as the product grows.",
  },
];

export default function ProjectApproach() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-signal-blue" />

            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal-blue">
              How we work
            </span>
          </div>

          <h2 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.03] tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
            From first conversation
            <br />
            <span className="text-ink/30">to production.</span>
          </h2>
        </Reveal>

        <div className="mt-16">
          {steps.map((step, index) => (
            <Reveal key={step.no} delay={index * 100}>
              <div className="group grid border-t border-ink/10 py-8 transition-colors duration-300 hover:bg-base lg:grid-cols-[120px_280px_1fr] lg:items-center lg:px-6">
                <span className="font-mono text-xs text-ink/30">
                  {step.no}
                </span>

                <h3 className="mt-4 font-display text-2xl font-bold text-ink lg:mt-0">
                  {step.title}
                </h3>

                <p className="mt-4 max-w-xl font-body text-sm leading-6 text-ink/50 lg:mt-0">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}