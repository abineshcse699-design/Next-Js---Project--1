import Reveal from "./Reveal";

const differences = [
  {
    number: "01",
    title: "Move Fast",
    description:
      "Focused teams and practical engineering help turn ideas into production without unnecessary layers.",
  },
  {
    number: "02",
    title: "Scale Smart",
    description:
      "Architecture evolves with the business, giving your product room to grow without constant rewrites.",
  },
  {
    number: "03",
    title: "Build Secure",
    description:
      "Security, reliability, testing, and observability are treated as engineering fundamentals.",
  },
  {
    number: "04",
    title: "Stay Flexible",
    description:
      "We adapt our people, process, and technology choices around your product and business goals.",
  },
];

export default function StarfiiDifference() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-signal-blue" />

            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal-blue">
              The STARFII difference
            </span>
          </div>

          <div className="mt-6 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="max-w-3xl font-display text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
              Better engineering.
              <br />
              <span className="text-ink/30">Better outcomes.</span>
            </h2>

            <p className="max-w-sm font-body text-sm leading-6 text-ink/50">
              We combine technical depth with business context to make
              technology work harder for your organization.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-5 lg:grid-cols-4">
          {differences.map((item, index) => (
            <Reveal key={item.number} delay={index * 100}>
              <div className="group relative min-h-[390px] overflow-hidden rounded-[28px] border border-ink/10 bg-base p-8 transition-all duration-500 hover:-translate-y-2 hover:border-signal-violet/30 hover:shadow-[0_30px_70px_-35px_rgba(108,76,241,0.5)]">
                <span className="font-display text-7xl font-bold tracking-[-0.07em] text-ink transition-colors duration-500 group-hover:text-signal-violet/20">
                  {item.number}
                </span>

                <div className="absolute left-8 right-8 top-[155px] h-px bg-ink/10">
                  <div className="h-full w-0 bg-signal-gradient transition-all duration-700 group-hover:w-full" />
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-ink">
                    {item.title}
                  </h3>

                  <p className="mt-4 font-body text-sm leading-6 text-ink/50">
                    {item.description}
                  </p>
                </div>

                <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-signal-blue/10 opacity-0 blur-[70px] transition-opacity duration-700 group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}