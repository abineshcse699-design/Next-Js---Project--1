"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function ServicesConsultation() {
  return (
    <section className="relative overflow-hidden bg-base px-6 py-28 lg:px-10 lg:py-36">

      <div className="mx-auto max-w-7xl">

        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-black/10 bg-white p-8 shadow-[0_30px_100px_-45px_rgba(0,0,0,.35)] lg:p-14">

            {/* Gradient glow */}
            <div className="absolute right-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-signal-violet/15 blur-[100px]" />

            <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">

              <div>

                <span className="font-mono text-xs uppercase tracking-[0.2em] text-signal-violet">
                  Free consultation
                </span>

                <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
                  Not sure where
                  <span className="block bg-signal-gradient bg-clip-text text-transparent">
                    to start?
                  </span>
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate">
                  Tell us what you&apos;re trying to build, improve or solve.
                  Our team will help you identify the right technology,
                  architecture and delivery approach.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">

                  <Link
                    href="/contact"
                    className="rounded-full bg-signal-gradient px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    Book a consultation →
                  </Link>

                  <a
                    href="mailto:techteam@starfii.com"
                    className="rounded-full border border-black/10 px-7 py-4 font-semibold text-ink transition-all duration-300 hover:-translate-y-1 hover:border-signal-violet"
                  >
                    Email our team
                  </a>

                </div>

              </div>

              {/* Side visual */}
              <div className="relative hidden h-56 w-56 lg:block">

                <div className="absolute inset-0 rounded-full border border-black/10 animate-spin-slow" />

                <div className="absolute inset-8 rounded-full border border-black/10" />

                <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal-gradient shadow-[0_20px_70px_-15px_rgba(108,76,241,.7)]" />

              </div>

            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}