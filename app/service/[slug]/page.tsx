// import Link from "next/link";
// import { notFound } from "next/navigation";
// import { services } from "@/app/data/services";

// type ServicePageProps = {
//   params: Promise<{
//     slug: string;
//   }>;
// };

// export function generateStaticParams() {
//   return services.map((service) => ({
//     slug: service.slug,
//   }));
// }

// export async function generateMetadata({ params }: ServicePageProps) {
//   const { slug } = await params;

//   const service = services.find((item) => item.slug === slug);

//   if (!service) {
//     return {
//       title: "Service — STARFII",
//     };
//   }

//   return {
//     title: `${service.title} — STARFII`,
//     description: service.description,
//   };
// }

// export default async function ServiceDetailPage({
//   params,
// }: ServicePageProps) {
//   const { slug } = await params;

//   const service = services.find((item) => item.slug === slug);

//   if (!service) {
//     notFound();
//   }

//   return (
//     <main className="min-h-screen overflow-hidden bg-[#171717] text-white">
//       {/* Hero */}
//       <section className="relative overflow-hidden border-b border-white/[0.06]">
//         <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[550px] w-[700px] -translate-x-1/2 rounded-full bg-[#7548ff]/10 blur-[130px]" />

//         <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-28 lg:px-10 lg:pb-36 lg:pt-36">
//           <Link
//             href="/services"
//             className="mb-12 inline-flex items-center gap-2 font-body text-sm text-white/45 transition-colors hover:text-white"
//           >
//             ← All services
//           </Link>

//           <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
//             <div>
//               <p className="mb-6 font-body text-xs font-bold tracking-[0.2em] text-[#A78BFA]">
//                 {service.number} / {service.eyebrow}
//               </p>

//               <h1 className="font-display text-5xl font-black uppercase leading-[0.92] tracking-[-0.045em] md:text-7xl lg:text-8xl">
//                 {service.title}
//               </h1>

//               <p className="mt-8 max-w-2xl font-body text-lg leading-8 text-white/55 md:text-xl">
//                 {service.description}
//               </p>
//             </div>

//             <div className="hidden justify-end lg:flex">
//               <div className="text-right">
//                 <span className="font-display text-[140px] font-black leading-none text-white/[0.04]">
//                   {service.number}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Content */}
//       <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
//         <div className="grid gap-16 lg:grid-cols-[1fr_1fr]">
//           <div>
//             <p className="mb-5 font-body text-xs font-bold tracking-[0.2em] text-[#A78BFA]">
//               OUR APPROACH
//             </p>

//             <h2 className="font-display text-4xl font-black uppercase leading-tight md:text-5xl">
//               Built around
//               <br />
//               <span className="text-white/35">your outcome.</span>
//             </h2>
//           </div>

//           <div>
//             <p className="font-body text-lg leading-8 text-white/60">
//               {service.details}
//             </p>

//             <div className="mt-10 border-t border-white/15">
//               {service.bullets.map((item, index) => (
//                 <div
//                   key={item}
//                   className="flex items-center gap-5 border-b border-white/10 py-5"
//                 >
//                   <span className="font-mono text-xs text-[#A78BFA]">
//                     0{index + 1}
//                   </span>

//                   <span className="font-body text-base text-white/80">
//                     {item}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10 lg:pb-32">
//         <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#222325] px-8 py-14 md:px-14 md:py-20">
//           <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-[#7C3AED]/15 blur-[100px]" />

//           <div className="relative">
//             <p className="font-body text-xs font-bold tracking-[0.2em] text-[#A78BFA]">
//               LET'S BUILD
//             </p>

//             <h2 className="mt-5 max-w-3xl font-display text-4xl font-black uppercase leading-none tracking-[-0.04em] md:text-6xl">
//               Ready to take the
//               <br />
//               next step?
//             </h2>

//             <Link
//               href="/contact"
//               className="mt-8 inline-flex rounded-full bg-[#7657F5] px-7 py-3.5 font-body text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-[#8B70FF]"
//             >
//               Get in touchuigyixdwgdxiewd ↗
//             </Link>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }