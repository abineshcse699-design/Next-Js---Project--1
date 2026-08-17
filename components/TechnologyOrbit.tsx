// "use client";

// import Reveal from "./Reveal";

// const technologies = [
//   "AI / ML",
//   "Next.js",
//   "React",
//   "Python",
//   "Node.js",
//   "AWS",
//   "Azure",
//   "Docker",
//   "Kubernetes",
//   "PostgreSQL",
//   "OpenAI",
//   "Data Engineering",
// ];

// export default function TechnologyOrbit() {
//   return (
//     <section className="overflow-hidden bg-base py-24 lg:py-32">
//       <div className="mx-auto max-w-7xl px-6 lg:px-10">
//         <Reveal className="text-center">
//           <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal-violet">
//             Modern technology
//           </span>

//           <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
//             The right technology
//             <br />
//             <span className="text-ink/30">for the right problem.</span>
//           </h2>
//         </Reveal>

//         <Reveal delay={150}>
//           <div className="relative mx-auto mt-16 max-w-5xl overflow-hidden rounded-[32px] border border-ink/10 bg-white py-16">
//             <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal-violet/10 blur-[100px]" />

//             <div className="relative flex flex-wrap justify-center gap-3 px-6 sm:px-12">
//               {technologies.map((technology, index) => (
//                 <div
//                   key={technology}
//                   className="animate-tech-float rounded-full border border-ink/10 bg-base px-5 py-3 font-mono text-xs text-ink/65 transition-all duration-300 hover:border-signal-violet hover:bg-signal-violet hover:text-white"
//                   style={{
//                     animationDelay: `${index * 180}ms`,
//                   }}
//                 >
//                   {technology}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   );
// }