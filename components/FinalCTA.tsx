import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#17181b] py-24 lg:py-32"
    >
      <div className="absolute left-1/3 top-0 h-[450px] w-[550px] rounded-full bg-signal-violet/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] border border-white/15 px-7 py-14 sm:px-12 lg:px-16 lg:py-20">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-signal-violet/[0.06]" />

            <div className="relative flex flex-col justify-between gap-12 lg:flex-row lg:items-center">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal-blue">
                  Let&apos;s build
                </span>

                <h2 className="mt-5 font-display text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                  Have a great idea?
                  <br />
                  <span className="text-white/35">
                    Let&apos;s discuss it.
                  </span>
                </h2>
              </div>

              <a
                href="mailto:hello@starfii.com"
                className="group inline-flex shrink-0 items-center gap-4 self-start rounded-full bg-signal-gradient px-7 py-4 font-body text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(108,76,241,0.8)] lg:self-center"
              >
                Contact Us

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
                  <svg
                    viewBox="0 0 20 20"
                    className="h-4 w-4"
                    fill="none"
                  >
                    <path
                      d="M4 10h11M11 5l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}