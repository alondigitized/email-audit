"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SignOutButton } from "./SignOutButton";
import { Wordmark } from "./Wordmark";

type Tab = { href: string; label: string; suffix?: string };

const BASE_TABS: Tab[] = [
  { href: "/", label: "Audits" },
];

export function TopNav({
  isAdmin = false,
  chatEnabled = false,
  hasPersonas = false,
  hasTenant = false,
}: {
  isAdmin?: boolean;
  chatEnabled?: boolean;
  hasPersonas?: boolean;
  hasTenant?: boolean;
}) {
  const pathname = usePathname() || "/";
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Auth-flow / wizard routes — fully hidden header so the user focuses on
  // the form/funnel.
  const HIDDEN_NAV_PATHS = ["/login", "/signup", "/auth/", "/r/", "/onboarding"];
  if (
    HIDDEN_NAV_PATHS.some(
      (p) => pathname === p.replace(/\/$/, "") || pathname.startsWith(p)
    )
  )
    return null;

  // Legal pages — render the wordmark only (clickable home link), no tabs.
  // Visitors may be unauthed (linked from the footer on the login page),
  // and we don't want to imply an authed UI with tabs + Sign out.
  const WORDMARK_ONLY_PATHS = ["/terms", "/privacy", "/scoring"];
  if (
    WORDMARK_ONLY_PATHS.some(
      (p) => pathname === p || pathname.startsWith(p + "/")
    )
  ) {
    return (
      <div className="mb-5 pt-2 text-center">
        <Link href="/" className="inline-block">
          <Wordmark />
        </Link>
      </div>
    );
  }

  function isActive(href: string): boolean {
    if (href === "/") {
      return pathname === "/" || pathname.startsWith("/audits");
    }
    return pathname === href || pathname.startsWith(href + "/");
  }

  const tabs: Tab[] = [...BASE_TABS];
  if (chatEnabled && hasPersonas) {
    tabs.push({ href: "/chat", label: "Chat" });
  } else if (isAdmin && hasPersonas) {
    tabs.push({ href: "/chat", label: "Chat", suffix: "(off)" });
  }
  if (isAdmin) {
    tabs.push({ href: "/analysis", label: "Analysis" });
    tabs.push({ href: "/admin", label: "Admin" });
  }
  if (hasTenant) {
    tabs.push({ href: "/account/team", label: "Team" });
  }

  return (
    <>
      {/* Mobile header — hamburger on the left, centered wordmark, no
          inline tabs (they overflowed once we grew past 4-5 of them).
          Hamburger opens the drawer below the bar with the same tabs
          stacked vertically + Sign out at the bottom. */}
      <div className="sm:hidden mb-5 pt-2 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setDrawerOpen((v) => !v)}
          aria-label={drawerOpen ? "Close menu" : "Open menu"}
          aria-expanded={drawerOpen}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 active:bg-gray-200 -ml-2"
        >
          <span aria-hidden className="block w-6">
            <span className="block h-0.5 bg-gray-900 mb-1.5 rounded" />
            <span className="block h-0.5 bg-gray-900 mb-1.5 rounded" />
            <span className="block h-0.5 bg-gray-900 rounded" />
          </span>
        </button>
        <Link href="/" className="inline-block" onClick={() => setDrawerOpen(false)}>
          <Wordmark />
        </Link>
        {/* Right-side spacer to balance the hamburger so the wordmark
            stays optically centered. */}
        <span aria-hidden className="w-10" />
      </div>

      {drawerOpen && (
        <div className="sm:hidden mb-5 -mt-3 bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
          <ul className="flex flex-col">
            {tabs.map((tab) => {
              const active = isActive(tab.href);
              return (
                <li key={tab.href} className="border-b border-gray-100 last:border-0">
                  <Link
                    href={tab.href}
                    onClick={() => setDrawerOpen(false)}
                    className={`block px-4 py-3 text-sm font-semibold ${
                      active
                        ? "bg-gray-900 text-white"
                        : "text-gray-800 hover:bg-gray-50"
                    }`}
                  >
                    {tab.label}
                    {tab.suffix && (
                      <span className="ml-1 text-[10px] font-normal opacity-70">
                        {tab.suffix}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
            <li className="border-t border-gray-100 px-4 py-3 flex justify-end">
              <SignOutButton />
            </li>
          </ul>
        </div>
      )}

      {/* Desktop / tablet header — unchanged */}
      <div className="hidden sm:block mb-5 pt-2 text-center">
        <Link href="/" className="inline-block">
          <Wordmark />
        </Link>
      </div>
      <nav className="hidden sm:flex items-center justify-between mb-6">
        <div className="flex gap-1">
          {tabs.map((tab) => {
            const active = isActive(tab.href);
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  active
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab.label}
                {tab.suffix && (
                  <span className="ml-1 text-[10px] font-normal opacity-70">
                    {tab.suffix}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
        <SignOutButton />
      </nav>
    </>
  );
}
