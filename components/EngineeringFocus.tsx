import Reveal from "./Reveal";

const focus = [
  "AI-native product development",
  "Cloud architecture",
  "Data platforms",
  "Enterprise SaaS",
  "Automation",
  "Quality engineering",
];

export default function EngineeringFocus() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 lg:py-32">
      <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-signal-violet/15 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal-blue">
              Engineering focus
            </span>

            <h2 className="mt-6 font-display text-4xl font-bold leading-[1.03] tracking-[-0.04em] text-white sm:text-5xl">
              Built for the
              <br />
              <span className="text-white/30">next generation.</span>
            </h2>

            <p className="mt-7 max-w-lg font-body text-base leading-7 text-white/50">
              We use modern engineering practices to create systems that are
              easier to operate, easier to evolve, and harder to break.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2">
              {focus.map((item, index) => (
                <div
                  key={item}
                  className="group relative overflow-hidden bg-white/[0.035] p-7 transition-colors duration-500 hover:bg-white/[0.08]"
                >
                  <span className="font-mono text-[10px] text-white/25">
                    0{index + 1}
                  </span>

                  <h3 className="mt-10 font-display text-lg font-semibold text-white">
                    {item}
                  </h3>

                  <div className="mt-5 h-px w-8 bg-signal-violet transition-all duration-500 group-hover:w-16" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}