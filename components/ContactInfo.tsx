import Reveal from "@/components/Reveal";

export default function ContactInfo() {
  return (
    <Reveal>
      <aside className="space-y-5">

        <div className="rounded-[2rem] bg-ink p-8 text-white sm:p-10">

          <span className="font-mono text-xs uppercase tracking-[0.2em] text-signal-blue">
            Direct contact
          </span>

          <h2 className="mt-4 font-display text-3xl font-bold">
            Let’s build something meaningful.
          </h2>

          <p className="mt-4 leading-7 text-white/55">
            Whether you have a defined project or just an idea, our team can
            help you find the right path forward.
          </p>

          <div className="mt-10 space-y-7">

            <div>
              <p className="text-xs uppercase tracking-wider text-white/40">
                Email
              </p>

              <a
                href="mailto:techteam@starfii.com"
                className="mt-2 block text-lg font-medium text-white transition-colors hover:text-signal-blue"
              >
                techteam@starfii.com
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-white/40">
                Availability
              </p>

              <p className="mt-2 text-white/80">
                Monday – Friday
              </p>

              <p className="text-sm text-white/45">
                9:00 AM – 6:00 PM
              </p>
            </div>

          </div>
        </div>

        <div className="rounded-[2rem] border border-black/10 bg-white p-8">
          <p className="font-display text-xl font-semibold text-ink">
            What happens next?
          </p>

          <div className="mt-7 space-y-6">

            {[
              "We understand your requirements.",
              "Our experts identify the right approach.",
              "We discuss scope, timeline and next steps.",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-4"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-signal-gradient text-sm font-bold text-white">
                  {index + 1}
                </span>

                <p className="pt-1 text-sm leading-6 text-slate">
                  {item}
                </p>
              </div>
            ))}

          </div>
        </div>

      </aside>
    </Reveal>
  );
}