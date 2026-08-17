import Link from "next/link";

const offerings = [
  "Product Engineering",
  "Generative AI",
  "Cloud Engineering",
  "Quality Engineering",
  "Data Analytics & BI",
  "User Experience Engineering",
];

const expertise = [
  "E-Commerce & Retail",
  "Healthcare",
  "Transportation And Logistics",
  "Ed-Tech & E-Learning",
  "Finance",
  "Travel & Booking",
];

const resources = ["Blogs", "Partnership", "Case Studies"];

function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M4 12 12 4" />
      <path d="M5 4h7v7" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M6.5 8.2A2.2 2.2 0 1 0 6.5 3.8a2.2 2.2 0 0 0 0 4.4ZM4.6 20.2h3.8V9.7H4.6v10.5ZM10.5 9.7h3.7v1.4h.1c.5-.9 1.7-1.9 3.6-1.9 3.8 0 4.5 2.5 4.5 5.8v5.2h-3.8v-4.6c0-1.1 0-2.6-1.6-2.6s-1.9 1.2-1.9 2.5v4.7h-3.8V9.7Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M20.2 11.5a8.2 8.2 0 0 1-12.1 7.2L4 20l1.4-4a8.2 8.2 0 1 1 14.8-4.5Z" />
      <path d="M9.2 8.3c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.3.1.5-.1.7l-.5.6c.7 1.2 1.7 2.1 3 2.7l.6-.7c.2-.2.4-.2.7-.1l1.5.7c.3.1.4.3.3.6-.2 1-.8 1.5-1.7 1.5-2.2 0-5.5-2.7-6.5-5.4-.3-.8-.1-1.6.3-2.2Z" />
    </svg>
  );
}

function FooterLink({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Link
      href="#"
      className="group flex w-fit items-center gap-2 text-[15px] text-white/55 transition-all duration-300 hover:translate-x-1 hover:text-white"
    >
      <span>{children}</span>

      <span className="translate-x-[-4px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <ArrowUpRight />
      </span>
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#080812] text-white">

      {/* Animated background glow */}
      <div
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-600/15 blur-[120px] animate-footer-glow"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px] animate-footer-glow-delay"
        aria-hidden="true"
      />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative mx-auto max-w-[1500px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">

        {/* Top brand row */}
        <div className="mb-16 flex flex-col gap-8 border-b border-white/10 pb-12 lg:flex-row lg:items-end lg:justify-between">

          <div className="max-w-xl">
            <Link
              href="/"
              className="group inline-flex items-center gap-3"
            >
              {/* STAR */}
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-xl transition-all duration-500 group-hover:rotate-90 group-hover:border-violet-400/50 group-hover:bg-violet-500/10">
                ✦
              </span>

              <span className="font-display text-3xl font-bold tracking-tight">
                STARFII
              </span>
            </Link>

            <p className="mt-6 max-w-md text-[15px] leading-7 text-white/50">
              Product engineering, AI, data and cloud solutions for modern
              businesses.
            </p>

            <a
              href="mailto:techteam@starfii.com"
              className="mt-5 inline-block text-[15px] text-white/70 transition-colors duration-300 hover:text-white"
            >
              techteam@starfii.com
            </a>
          </div>

          {/* CTA */}
          <Link
            href="#contact"
            className="group relative flex w-fit items-center gap-4 overflow-hidden rounded-full border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-medium transition-all duration-500 hover:border-violet-400/50 hover:bg-violet-500/10"
          >
            <span className="relative z-10">Start a conversation</span>

            <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-transform duration-500 group-hover:rotate-45">
              <ArrowUpRight />
            </span>

            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-violet-600/20 to-blue-500/20 transition-transform duration-700 group-hover:translate-x-0" />
          </Link>
        </div>

        {/* Main columns */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand / intro */}
          <div className="group">
            <div className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
              Build better
            </div>

            <h3 className="max-w-xs font-display text-2xl font-semibold leading-tight text-white">
              Turning ideas into
              <span className="block bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                digital products.
              </span>
            </h3>
          </div>

          {/* Offerings */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Offerings
            </h3>

            <div className="space-y-4">
              {offerings.map((item) => (
                <FooterLink key={item}>{item}</FooterLink>
              ))}
            </div>
          </div>

          {/* Expertise */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Expertise
            </h3>

            <div className="space-y-4">
              {expertise.map((item) => (
                <FooterLink key={item}>{item}</FooterLink>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Resources
            </h3>

            <div className="space-y-4">
              {resources.map((item) => (
                <FooterLink key={item}>{item}</FooterLink>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom area */}
        <div className="mt-16 border-t border-white/10 pt-8">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            {/* Copyright */}
            <p className="text-sm text-white/40">
              © 2025 Starfii Technology Pvt. Ltd. All Rights Reserved.
            </p>

            {/* Legal */}
            <div className="flex flex-wrap gap-6 text-sm text-white/40">
              <Link
                href="#"
                className="transition-colors duration-300 hover:text-white"
              >
                Terms and conditions
              </Link>

              <Link
                href="#"
                className="transition-colors duration-300 hover:text-white"
              >
                Refund policy
              </Link>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">

              <a
                href="#"
                aria-label="WhatsApp"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-green-400/40 hover:bg-green-400/10 hover:text-green-400"
              >
                <WhatsAppIcon />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-400/10 hover:text-blue-400"
              >
                <LinkedInIcon />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-pink-400/40 hover:bg-pink-400/10 hover:text-pink-400"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Huge decorative text */}
        <div className="pointer-events-none mt-16 overflow-hidden border-t border-white/[0.04] pt-6">
          <div className="whitespace-nowrap font-display text-[clamp(5rem,15vw,14rem)] font-bold leading-none tracking-[-0.08em] text-white/[0.025]">
            STARFII
          </div>
        </div>

      </div>
    </footer>
  );
}