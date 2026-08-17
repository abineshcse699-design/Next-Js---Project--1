// import PageHero from "@/components/PageHero";


// const solutions = [
//   {
//     title: "AI-Powered Business Solutions",
//     text: "Turn complex business processes into intelligent, automated workflows using modern AI.",
//   },
//   {
//     title: "Digital Product Transformation",
//     text: "Modernize products, platforms and customer experiences with scalable engineering.",
//   },
//   {
//     title: "Enterprise Cloud Solutions",
//     text: "Build secure, resilient and cost-efficient cloud platforms for enterprise workloads.",
//   },
//   {
//     title: "Data & Intelligence",
//     text: "Transform fragmented data into reliable intelligence that supports faster decisions.",
//   },

// ];



// export default function SolutionsPage() {
//   return (
//     <main className="min-h-screen bg-[#171717] text-white">
//       <PageHero
//         eyebrow="SOLUTIONS"
//         title="Technology That Solves"
//         description="We combine product thinking, engineering depth and AI capabilities to solve high-value business problems."
//       />

//       <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
//         <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
//           {solutions.map((solution, index) => (
//             <article
//               key={solution.title}
//               className="group bg-[#1A1A1A] p-8 transition-colors duration-500 hover:bg-[#222325] md:p-12"
//             >
//               <span className="font-mono text-xs text-[#A78BFA]">
//                 0{index + 1}
//               </span>

//               <h2 className="mt-10 font-display text-2xl font-black uppercase leading-tight md:text-3xl">
//                 {solution.title}
//               </h2>

//               <p className="mt-5 max-w-lg font-body leading-7 text-white/50 group-hover:text-white/65">
//                 {solution.text}
//               </p>

//               <div className="mt-10 text-xl text-white/30 transition-all duration-500 group-hover:translate-x-2 group-hover:text-[#A78BFA]">
//                 →
//               </div>
//             </article>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }