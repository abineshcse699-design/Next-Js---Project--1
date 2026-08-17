import Reveal from "./Reveal";

const services = [
  {
    no: "01",
    label: "PRODUCT",
    title: "Product Engineering",
    text: "From product discovery to production, we build digital products that are fast, reliable, and ready to scale.",
  },
  {
    no: "02",
    label: "INTELLIGENCE",
    title: "AI & Data Engineering",
    text: "Transform complex data into intelligent products, automation, predictive systems, and AI-powered experiences.",
  },
  {
    no: "03",
    label: "MODERNIZATION",
    title: "Legacy Modernization",
    text: "Modernize existing software with cloud-native architecture while keeping your business running.",
  },
  {
    no: "04",
    label: "CLOUD",
    title: "Cloud & DevOps",
    text: "Build dependable infrastructure with CI/CD, automation, observability, and scalable cloud systems.",
  },
];

export default function CapabilityGrid() {
  return (
    <section
      id="capabilities"
      className="relative overflow-hidden bg-base py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-signal-violet" />

            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal-violet">
              What we build
            </span>
          </div>

          <div className="mt-6 max-w-4xl">
            <h2 className="font-display text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
              Technology designed
              <br />
              <span className="text-ink/30">around your ambition.</span>
            </h2>

            <p className="mt-7 max-w-2xl font-body text-base leading-7 text-ink/50 sm:text-lg">
              A multidisciplinary engineering team covering product, AI,
              data, cloud, and modernization from one place.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid overflow-hidden rounded-[30px] border border-ink/10 bg-ink/10 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.no} delay={index * 100}>
              <article className="group relative min-h-[360px] overflow-hidden bg-white p-8 transition-all duration-500 hover:bg-ink lg:p-10">
                <div className="absolute left-0 top-0 h-[2px] w-0 bg-signal-gradient transition-all duration-700 group-hover:w-full" />

                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-ink/30 transition-colors group-hover:text-white/30">
                    {service.no}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 transition-all duration-500 group-hover:rotate-45 group-hover:border-white/20 group-hover:bg-white">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 text-ink group-hover:text-ink"
                      fill="none"
                    >
                      <path
                        d="M5 12h13M13 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div className="absolute bottom-9 left-8 right-8 lg:left-10 lg:right-10">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal-violet">
                    {service.label}
                  </span>

                  <h3 className="mt-3 max-w-lg font-display text-2xl font-bold tracking-tight text-ink transition-colors duration-500 group-hover:text-white sm:text-3xl">
                    {service.title}
                  </h3>

                  <p className="mt-4 max-w-lg font-body text-sm leading-6 text-ink/50 transition-colors duration-500 group-hover:text-white/60">
                    {service.text}
                  </p>
                </div>

                <div className="pointer-events-none absolute -bottom-28 -right-28 h-64 w-64 rounded-full bg-signal-violet/20 opacity-0 blur-[80px] transition-opacity duration-700 group-hover:opacity-100" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}