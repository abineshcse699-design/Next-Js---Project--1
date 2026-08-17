"use client";

const testimonials = [
  {
    name: "Utsav Bisaria",
    role: "CEO, Dr.Doodley",
    text: "We have engaged Starfii for more than 2 years now. I am very pleased to closely work with them on several projects. They are responsive, accommodating and can deliver great result!, Thank you team",
  },
  {
    name: "Anand",
    role: "Business Owner",
    text: "They have an incredibly hardworking team at affordable pricing. Starfii has built the website earlier than expected, and they continue to complete new tasks within the client's budget and timeline.",
  },
];

export default function ClientTestimonials() {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-24 text-white sm:py-32 lg:px-12">
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-signal-violet/20 blur-[140px]" />

      <div className="relative mx-auto max-w-5xl">
        <div className="mb-20 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-signal-blue">
            Testimonials
          </span>

          <h1 className="mt-5 font-display text-5xl font-bold sm:text-6xl">
            CLIENTS ARE SAYING
          </h1>
        </div>

        <div className="space-y-8">
          {testimonials.map((item, index) => (
            <article
              key={item.name}
              className="testimonial-card group relative mx-auto max-w-2xl rounded-3xl border border-white/10 bg-black/40 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-signal-violet/50 hover:bg-black/60 sm:p-12"
              style={{
                animation: `testimonialIn 700ms ease ${index * 180}ms both`,
              }}
            >
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-3xl text-ink">
                  ●
                </div>

                <div>
                  <h2 className="font-display text-lg font-bold">
                    {item.name}
                  </h2>

                  <p className="mt-1 text-sm text-white/50">{item.role}</p>
                </div>
              </div>

              <div className="mb-5 text-5xl leading-none text-signal-violet">
                “
              </div>

              <p className="text-lg leading-relaxed text-white/75">
                {item.text}
              </p>

              <div className="mt-8 flex gap-1 text-signal-violet">
                ★ ★ ★ ★ ★
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}