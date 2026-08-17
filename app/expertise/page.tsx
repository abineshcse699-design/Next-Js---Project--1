import type { Metadata } from "next";

import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

import {
  Store,
  HeartPulse,
  GraduationCap,
  TrendingUp,
  Truck,
  Plane,
  ArrowUpRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Expertise | STARFII",
  description:
    "Industry-specific software expertise across e-commerce, healthcare, ed-tech, finance, logistics and travel.",
};

type ExpertiseItem = {
  icon: React.ElementType;
  title: string;
  description: string;
  points: string[];
  accent: string;
};

const expertise: ExpertiseItem[] = [
  {
    icon: Store,
    title: "E-Commerce & Retail",
    description:
      "Custom e-commerce software with a powerful admin panel, payment integrations, inventory management, real-time reporting, shipping automation, loyalty program, and more.",
    points: [
      "Mobile Application",
      "Marketplaces",
      "Store Inventory Software",
      "Order Management Solutions",
    ],
    accent: "#8B5CF6",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Increase patient engagement and get positive healthcare outcomes with digital products and technology services for healthcare practitioners and organizations.",
    points: [
      "Health Tracking Applications",
      "Patient Portals",
      "PPS for Clinics, Pharmacies, and Medical Centers",
      "Telemedicine Software",
    ],
    accent: "#F2597F",
  },
  {
    icon: GraduationCap,
    title: "Ed-Tech & E-Learning",
    description:
      "Set out to bridge the gap between academia and industry by creating a platform for students, professionals, and educators to learn, teach, and upskill.",
    points: [
      "E-Learning Web Application",
      "Educators to Upload and Sell Courses",
      "Corporates to Train Bulk Users with Custom Solutions",
      "Students to Access Industry-Focused Training",
    ],
    accent: "#F2C66D",
  },
  {
    icon: TrendingUp,
    title: "Finance",
    description:
      "We design and develop secure and compliant software with microservices technology that improves the financial experience.",
    points: [
      "Digital Banking and Neobank Software",
      "Personal Finance Management Apps",
      "E-Wallets",
      "Leasing Software",
    ],
    accent: "#3E8BFF",
  },
  {
    icon: Truck,
    title: "Transportation and Logistics",
    description:
      "Scalable software with intuitive interfaces and interactive maps to help clients get fast and easy access to transportation and logistics services.",
    points: [
      "Supply Chain Management Solutions",
      "Warehouse Management Software",
      "Delivery and Taxi Apps",
      "Vehicle Sharing and Rental Apps",
    ],
    accent: "#4ADE80",
  },
  {
    icon: Plane,
    title: "Travel & Booking",
    description:
      "Software for advanced traveler's experience and agency sales growth.",
    points: [
      "Travel Agency Portals",
      "Booking Apps",
      "Hotel Management Systems",
      "Trip Planning Software",
    ],
    accent: "#A78BFA",
  },
];

export default function ExpertisePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#171717] text-white">
      <Nav />

      <PageHero
        eyebrow="EXPERTISE"
        title="Industry - Specific Software"
        description="Our multidisciplinary teams bring together product, design, cloud, AI, data and engineering expertise to build technology that lasts."
      />

      <section className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        {/* Ambient background glow */}
        <div className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-[#8B5CF6]/10 blur-[150px]" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-[#3E8BFF]/10 blur-[150px]" />

        <div className="relative grid gap-6 md:grid-cols-2">
          {expertise.map(({ icon: Icon, title, description, points, accent }, index) => (
            <div
              key={title}
              style={{
                animationDelay: `${index * 100}ms`,
                // @ts-expect-error custom property for accent glow
                "--accent": accent,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#1C1C1C] p-8 opacity-0 animate-fade-up transition-all duration-500 hover:-translate-y-2 hover:border-[color:var(--accent)]/50 hover:shadow-[0_30px_60px_-25px_var(--accent)]"
            >
              {/* Gradient glow on hover */}
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-30"
                style={{ background: accent }}
              />

              {/* Index number watermark */}
              <span className="pointer-events-none absolute right-6 top-6 font-mono text-6xl font-black text-white/[0.03] transition-all duration-500 group-hover:text-white/[0.06]">
                {(index + 1).toString().padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-6">
                <Icon
                  className="h-7 w-7 transition-colors duration-500"
                  style={{ color: accent }}
                />
              </div>

              {/* Title */}
              <h2 className="relative font-display text-2xl font-bold uppercase tracking-tight text-white">
                {title}
              </h2>

              {/* Animated underline */}
              <div
                className="mt-3 h-[3px] w-10 rounded-full transition-all duration-500 group-hover:w-20"
                style={{ background: accent }}
              />

              {/* Description */}
              <p className="mt-5 font-body leading-7 text-white/60">
                {description}
              </p>

              {/* Points */}
              <ul className="mt-7 space-y-3 border-t border-white/10 pt-6">
                {points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 font-body text-[15px] text-white/80 transition-all duration-300 hover:translate-x-1 hover:text-white"
                  >
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:rotate-45"
                      style={{ color: accent }}
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />

      <Footer />
    </main>
  );
}