import Link from "next/link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06] bg-[#171717]">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#7548ff]/10 blur-[130px]" />

      {/* Small glow */}
      <div className="pointer-events-none absolute right-[-120px] bottom-[-180px] h-[350px] w-[350px] rounded-full bg-[#3E8BFF]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-28 lg:px-10 lg:pb-32 lg:pt-36">
        
        {/* Eyebrow */}
        <div className="mb-7 flex items-center gap-4 animate-fade-up">
          <span className="h-px w-10 bg-gradient-to-r from-[#8B5CF6] to-[#F2C66D]" />

          <span className="font-body text-xs font-bold tracking-[0.22em] text-[#A78BFA]">
            {eyebrow}
          </span>
        </div>

        {/* Heading */}
        <h1 className="max-w-5xl font-display text-5xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-white animate-fade-up [animation-delay:100ms] md:text-7xl lg:text-8xl">
          {title}
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-2xl font-body text-lg leading-8 text-white/60 animate-fade-up [animation-delay:200ms] md:text-xl">
          {description}
        </p>

        {/* CTA */}
        <div className="mt-10 animate-fade-up [animation-delay:300ms]">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 font-body text-sm font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#A78BFA] hover:text-white"
          >
            Start a conversationbuhvgvjkg

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </Link>
        </div>

        {/* Decorative number */}
        <div className="pointer-events-none absolute bottom-5 right-6 hidden font-display text-[180px] font-black leading-none text-white/[0.025] lg:block">
          01
        </div>
      </div>
    </section>
  );
}