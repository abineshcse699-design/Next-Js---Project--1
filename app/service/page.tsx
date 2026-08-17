import PageHero from "@/components/PageHero";
import ServiceCard from "@/app/data/ServiceCard";
import { services } from "@/app/data/services";

export const metadata = {
  title: "Services — STARFII",
  description:
    "Enterprise product engineering, AI, cloud, data, cybersecurity and software modernization services.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#171717] text-white">
      <PageHero
        eyebrow="WHAT WE DO"
        title="Our Services"
        description="From enterprise product engineering and AI to cloud, data, cybersecurity and modernization, we build technology that moves businesses forward."
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        {/* Section heading */}
        <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_2fr]">
          <div>
            <span className="font-body text-xs font-bold tracking-[0.2em] text-[#A78BFA]">
              CAPABILITIES
            </span>
          </div>

          <div>
            <h2 className="font-display text-4xl font-black uppercase leading-none tracking-[-0.03em] md:text-5xl">
              Engineering for{" "}
              <span className="text-white/35">real business impact.</span>
            </h2>
          </div>
        </div>

        {/* Service grid */}
        <div className="grid gap-x-16 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#222325] px-8 py-14 md:px-14 md:py-20">
          <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-[#7C3AED]/20 blur-[100px]" />

          <div className="relative max-w-3xl">
            <p className="font-body text-sm font-bold tracking-[0.15em] text-[#A78BFA]">
              READY WHEN YOU ARE
            </p>

            <h2 className="mt-5 font-display text-4xl font-black uppercase leading-[0.95] tracking-[-0.03em] md:text-6xl">
              Have a complex
              <br />
              problem?
            </h2>

            <p className="mt-6 max-w-xl font-body leading-7 text-white/55">
              Tell us what you're building. We'll help you find the right
              technology, architecture and engineering approach.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-[#7657F5] px-7 py-3.5 font-body text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-[#8B70FF]"
            >
              Let's talk ↗
            </a>
          </div>
        </div>
      </section>
    </main>

  );

}
