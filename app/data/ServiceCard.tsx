import Link from "next/link";
import type { Service } from "@/app/data/services";

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative block overflow-hidden border-t border-white/20 py-8 transition-all duration-500 hover:border-[#A78BFA]"
    >
      {/* Hover background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#7C3AED]/0 via-[#7C3AED]/[0.06] to-[#F2C66D]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="flex items-start justify-between gap-6">
        
        {/* Left content */}
        <div className="flex min-w-0 gap-5">
          
          {/* Number */}
          <span className="pt-1 font-mono text-xs text-white/25 transition-colors duration-300 group-hover:text-[#A78BFA]">
            {service.number}
          </span>

          {/* Text */}
          <div className="min-w-0">
            
            {/* Category */}
            <p className="mb-3 font-body text-xs font-bold tracking-[0.15em] text-[#A78BFA]">
              {service.eyebrow}
            </p>

            {/* Title */}
            <h2 className="font-display text-xl font-bold uppercase leading-tight text-white transition-colors duration-300 group-hover:text-[#C4B5FD] md:text-2xl">
              {service.title}
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-xl font-body text-[15px] leading-7 text-white/55 transition-colors duration-300 group-hover:text-white/75">
              {service.description}
            </p>
          </div>
        </div>

        {/* Arrow */}
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/50 transition-all duration-500 group-hover:rotate-45 group-hover:border-[#A78BFA] group-hover:bg-[#A78BFA] group-hover:text-white">
          ↗
        </span>
      </div>

      {/* Bottom hover line */}
      <div className="mt-6 h-px w-0 bg-gradient-to-r from-[#8B5CF6] to-[#F2C66D] transition-all duration-700 group-hover:w-full" />
    </Link>
  );
}