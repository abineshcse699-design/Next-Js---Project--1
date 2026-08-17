// // import type { Metadata } from "next";
// // import Nav from "@/components/Nav";
// // import Hero from "@/components/Hero";
// // import ServicesTeaser from "@/components/ServicesTeaser";
// // import Stats from "@/components/Stats";
// // import TrustedClients from "@/components/TrustedClients";
// // import Capabilities from "@/components/Capabilities";
// // import CommitmentBand from "@/components/CommitmentBand";
// // import ModernTechStack from "@/components/ModernTechStack";
// // import Reveal from "@/components/Reveal";

// // export const metadata: Metadata = {
// //   title: "Services & Capabilities — STARFII",
// //   description:
// //     "Enterprise product engineering, data, AI/ML, and DevOps capabilities delivered by STARFII.",
// // };

// // export default function ServicesPage() {
// //   return (
// //     <main className="min-h-screen bg-base">
// //       <Nav />
// //        <Hero />
// //  <ServicesTeaser />

// // <Stats />

// //       <section className="relative overflow-hidden bg-ink py-24 lg:py-32">
// //         <div
// //           className="pointer-events-none absolute left-1/2 top-0 h-96 w-[640px] -translate-x-1/2 rounded-full bg-signal-violet/20 blur-[130px]"
// //           aria-hidden="true"
// //         />
// //         <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">



// //           <Reveal>
// //             <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.14em] text-signal-blue">
// //               Services & capabilities
// //             </span>
// //             <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
// //               Every capability it takes to{" "}
// //               <span className="bg-signal-gradient bg-clip-text text-transparent">
// //                 ship and scale
// //               </span>
// //             </h1>
// //             <p className="mx-auto mt-6 max-w-xl font-body text-lg leading-relaxed text-white/60">
// //               From first prototype to production infrastructure, one team
// //               covers product, data, AI, and delivery.
// //             </p>
// //           </Reveal>
// //         </div>
// //       </section>

    
// //       <TrustedClients />
// //       <Capabilities />
// //       <CommitmentBand />
// //       <ModernTechStack />
// //     </main>

// //   );

// // }


// import type { Metadata } from "next";

// import Nav from "@/components/Nav";
// import Hero from "@/components/Hero";
// import ServicesTeaser from "@/components/ServicesTeaser";
// import Stats from "@/components/Stats";
// import TrustedClients from "@/components/TrustedClients";

// import CapabilityGrid from "@/components/CapabilityGrid";
// import StarfiiDifference from "@/components/StarfiiDifference";
// import EngineeringFocus from "@/components/EngineeringFocus";
// import TechnologyOrbit from "@/components/TechnologyOrbit";
// import ProjectApproach from "@/components/ProjectApproach";
// import FinalCTA from "@/components/FinalCTA";

// export const metadata: Metadata = {
//   title: "STARFII — AI-Driven Software & Product Engineering",
//   description:
//     "Scalable, high-performance AI software and product engineering, customized for your business.",
// };

// export default function HomePage() {
//   return (
//     <main className="min-h-screen overflow-hidden bg-base">
//       <Nav />

//       <Hero />

//       <ServicesTeaser />

//       <Stats />

//       <TrustedClients />

//       <CapabilityGrid />

//       <StarfiiDifference />

//       <EngineeringFocus />

//       {/* <TechnologyOrbit /> */}

//       {/* <ProjectApproach /> */}

//       <FinalCTA />
//     </main>
//   );
// }


import type { Metadata } from "next";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ServicesTeaser from "@/components/ServicesTeaser";
import Stats from "@/components/Stats";
import TrustedClients from "@/components/TrustedClients";

import CapabilityGrid from "@/components/CapabilityGrid";
import StarfiiDifference from "@/components/StarfiiDifference";
import EngineeringFocus from "@/components/EngineeringFocus";

import ModernTechStack from "@/components/ModernTechStack";
import WhyStarfii from "@/components/WhyStarfii";
import IndustryExpertise from "@/components/IndustryExpertise";
import ClientTestimonials from "@/components/ClientTestimonials";

import ContactPage from "@/components/ContactPage";
import Footer from "@/components/Footer";

import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "STARFII — AI-Driven Software & Product Engineering",
  description:
    "Scalable, high-performance AI software and product engineering, customized for your business.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-base">

      {/* Navigation */}
      <Nav />

      {/* Hero */}
      <Hero />

      {/* Services */}
      <ServicesTeaser />

      {/* Stats */}
      <Stats />

      {/* Trusted Clients */}
      <TrustedClients />

      {/* Capabilities */}
      <CapabilityGrid />

      {/* Why STARFII */}
      <StarfiiDifference />

      {/* Engineering */}
      <EngineeringFocus />

      {/* Modern Tech Stack */}
      <ModernTechStack />

      {/* Why STARFII - detailed section */}
      <WhyStarfii />

      {/* Industry Expertise */}
      <IndustryExpertise />

      {/* Client Testimonials */}
      <ClientTestimonials />

      {/* Final CTA */}
      <FinalCTA />

      {/* Contact */}
      <ContactPage />

      {/* Footer */}
      <Footer />

    </main>
  );
}


// import type { Metadata } from "next";

// import Nav from "@/components/Nav";
// import Hero from "@/components/Hero";
// import ServicesTeaser from "@/components/ServicesTeaser";
// import Stats from "@/components/Stats";
// import TrustedClients from "@/components/TrustedClients";

// import CapabilityGrid from "@/components/CapabilityGrid";
// import StarfiiDifference from "@/components/StarfiiDifference";
// import EngineeringFocus from "@/components/EngineeringFocus";

// import ModernTechStack from "@/components/ModernTechStack";
// import WhyStarfii from "@/components/WhyStarfii";
// import IndustryExpertise from "@/components/IndustryExpertise";
// import ClientTestimonials from "@/components/ClientTestimonials";

// import FinalCTA from "@/components/FinalCTA";
// // import ContactSection from "@/components/ContactSection";
// import Footer from "@/components/Footer";

// export const metadata: Metadata = {
//   title: "STARFII — AI-Driven Software & Product Engineering",
//   description:
//     "Scalable, high-performance AI software and product engineering, customized for your business.",
// };

// export default function HomePage() {
//   return (
//     <main className="min-h-screen overflow-hidden bg-base">
//       {/* Navigation */}
//       <Nav />

//       {/* Hero */}
//       <Hero />

//       {/* Services */}
//       <ServicesTeaser />

//       {/* Stats */}
//       <Stats />

//       {/* Trusted Clients */}
//       <TrustedClients />

//       {/* Capabilities */}
//       <CapabilityGrid />

//       {/* Why STARFII */}
//       <StarfiiDifference />

//       {/* Engineering Focus */}
//       <EngineeringFocus />

//       {/* Modern Technology Stack */}
//       <ModernTechStack />

//       {/* Detailed Why STARFII */}
//       <WhyStarfii />

//       {/* Industry Expertise */}
//       <IndustryExpertise />

//       {/* Client Testimonials */}
//       <ClientTestimonials />

//       {/* Final CTA */}
//       <FinalCTA />

//       {/* Contact section on homepage */}
//       {/* <ContactSection /> */}

//       {/* Footer */}
//       <Footer />
//     </main>
//   );
// }