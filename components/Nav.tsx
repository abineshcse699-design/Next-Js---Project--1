"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const [solutionsOpen, setSolutionsOpen] = useState(false);

  // FIX: li element -> HTMLLIElement
  const menuRef = useRef<HTMLLIElement>(null);

  // Close mega menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setSolutionsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mega menu with Escape
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSolutionsOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className="sticky top-0 z-[100] border-b border-black/5 bg-base/90 backdrop-blur-xl">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">

        {/* ================= LOGO ================= */}
        <Link
          href="/"
          className="group flex items-center gap-2"
          aria-label="STARFII Home"
        >
          <StarMark className="h-7 w-7 transition-transform duration-500 group-hover:rotate-90" />

          <span className="font-display text-lg font-bold tracking-tight text-ink">
            STARFII
          </span>
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <ul className="hidden items-center gap-9 md:flex">

          {/* SERVICES */}
          <li>
            <Link
              href="/services"
              className={`group relative flex items-center gap-1 font-body text-[15px] font-medium transition-colors duration-300 ${
                pathname === "/services"
                  ? "text-ink"
                  : "text-ink/70 hover:text-ink"
              }`}
            >
              Services

              <NavUnderline
                active={pathname === "/services"}
              />
            </Link>
          </li>

          {/* ================= SOLUTIONS ================= */}
          <li
            ref={menuRef}
            className="relative"
          >
            <button
              type="button"
              onClick={() =>
                setSolutionsOpen((current) => !current)
              }
              aria-expanded={solutionsOpen}
              aria-haspopup="true"
              className={`group relative flex items-center gap-2 font-body text-[15px] font-medium transition-colors duration-300 ${
                solutionsOpen
                  ? "text-ink"
                  : "text-ink/70 hover:text-ink"
              }`}
            >
              Solutions

              {/* Arrow */}
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                aria-hidden="true"
                className={`transition-transform duration-300 ${
                  solutionsOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  d="M1 1.5L6 6.5L11 1.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* Active underline */}
              <span
                className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-signal-gradient transition-all duration-300 ${
                  solutionsOpen
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </button>

            {/* Mega menu */}
            <SolutionsMegaMenu open={solutionsOpen} />
          </li>

          {/* EXPERTISE */}
          <li>
            <Link
              href="/expertise"
              className="group relative flex items-center gap-1 font-body text-[15px] font-medium text-ink/70 transition-colors duration-300 hover:text-ink"
            >
              Expertise

              <NavUnderline active={false} />
            </Link>
          </li>
        </ul>

        {/* ================= CONTACT ================= */}
        <Link
          href="/contact"
          className="rounded-full bg-signal-gradient px-6 py-2.5 font-body text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(108,76,241,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.04] hover:shadow-[0_12px_30px_-8px_rgba(108,76,241,0.7)]"
        >
          Get in touch
        </Link>
      </nav>
    </header>
  );
}

/* ================================================= */
/* SOLUTIONS MEGA MENU */
/* ================================================= */

function SolutionsMegaMenu({
  open,
}: {
  open: boolean;
}) {
  return (
    <div
      className={`absolute left-1/2 top-[calc(100%+18px)] z-[200] w-[760px] -translate-x-1/2 transition-all duration-300 ${
        open
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-3 opacity-0"
      }`}
    >
      <div className="overflow-hidden rounded-[22px] border border-black/10 bg-white shadow-[0_30px_80px_-25px_rgba(0,0,0,0.35)]">

        <div className="grid grid-cols-[1.45fr_0.85fr]">

          {/* ================= LEFT ================= */}
          <div className="p-8">

            <p className="text-[15px] font-medium text-black/50">
              Smart Business Solutions
            </p>

            {/* TURBODEV */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 text-3xl font-bold text-white shadow-lg">
                1
              </div>

              <div>
                <h3 className="font-display text-[22px] font-semibold text-[#20242b]">
                  Turbodev
                </h3>

                <p className="mt-1 text-[16px] text-black/50">
                  WhatsApp Business API & Automations
                </p>
              </div>
            </div>

            {/* DIVIDER */}
            <div className="my-8 h-px bg-black/10" />

            {/* INTEGRATIONS */}
            <div>
              <p className="text-[15px] font-medium uppercase tracking-wide text-black/45">
                Integrations
              </p>

              <div className="mt-7 flex items-center gap-5">

                {/* Shopify */}
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-black/10 bg-[#fafafa] text-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  🛍️
                </div>

                {/* HubSpot */}
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-black/10 bg-[#fafafa] text-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  🔶
                </div>

                <span className="text-[15px] text-black/45">
                  Other tools...
                </span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="bg-[#f7f6f4] p-8">

            <p className="text-[15px] font-medium uppercase tracking-wide text-black/45">
              Communication Solutions
            </p>

            <div className="mt-8 space-y-5">

              {/* AI Chat Bot opens ChatGPT in a new tab when clicked */}
              <SolutionItem
                icon={<BotIcon />}
                title="AI Chat Bot"
                href="https://chatgpt.com"
              />

              <SolutionItem
                icon={<BroadcastIcon />}
                title="Broadcast"
              />

              <SolutionItem
                icon={<MessageIcon />}
                title="Team inbox"
              />

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

/* ================================================= */
/* SOLUTION ITEM */
/* ================================================= */

function SolutionItem({
  icon,
  title,
  href,
  onClick,
}: {
  icon: ReactNode;
  title: string;
  // Optional: if provided, clicking the item opens this URL in a new tab.
  href?: string;
  // Optional: custom click handler, runs in addition to href navigation.
  onClick?: () => void;
}) {
  const handleClick = () => {
    onClick?.();
    if (href) {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="group flex w-full items-center gap-4 text-left"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#181818] text-white transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-signal-violet">
        {icon}
      </span>

      <span className="font-display text-[20px] font-medium text-[#252930] transition-colors duration-300 group-hover:text-signal-violet">
        {title}
      </span>
    </button>
  );
}

/* ================================================= */
/* NAV UNDERLINE */
/* ================================================= */

function NavUnderline({
  active,
}: {
  active: boolean;
}) {
  return (
    <span
      className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-signal-gradient transition-all duration-300 ${
        active
          ? "w-full"
          : "w-0 group-hover:w-full"
      }`}
    />
  );
}

/* ================================================= */
/* BOT ICON */
/* ================================================= */

function BotIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="7"
        width="16"
        height="12"
        rx="3"
      />

      <path d="M12 3V7" />

      <circle
        cx="9"
        cy="13"
        r="1"
      />

      <circle
        cx="15"
        cy="13"
        r="1"
      />

      <path d="M9 16H15" />
    </svg>
  );
}

/* ================================================= */
/* BROADCAST ICON */
/* ================================================= */

function BroadcastIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M4 8V16" />

      <path d="M4 12H8L18 6V18L8 12" />

      <path d="M8 16L10 21" />
    </svg>
  );
}

/* ================================================= */
/* MESSAGE ICON */
/* ================================================= */

function MessageIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M5 5H19C20.1 5 21 5.9 21 7V15C21 16.1 20.1 17 19 17H12L7 20V17H5C3.9 17 3 16.1 3 15V7C3 5.9 3.9 5 5 5Z" />

      <path d="M8 10H16" />

      <path d="M8 13H13" />
    </svg>
  );
}

/* ================================================= */
/* STAR MARK */
/* ================================================= */

function StarMark({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M16 2L18.4 13.2L29.5 15.5L18.4 17.9L16 29L13.6 17.9L2.5 15.5L13.6 13.2L16 2Z"
        fill="url(#navStarGradient)"
      />

      <defs>
        <linearGradient
          id="navStarGradient"
          x1="2.5"
          y1="2"
          x2="29.5"
          y2="29"
        >
          <stop stopColor="#6C4CF1" />
          <stop offset="1" stopColor="#3E8BFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}