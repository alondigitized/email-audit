"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { href: "/", label: "Audits" },
  { href: "/analysis", label: "Analysis" },
];

export function TopNav() {
  const pathname = usePathname() || "/";

  // Hide on login — the gate isn't part of the app UI
  if (pathname.startsWith("/login")) return null;

  function isActive(href: string): boolean {
    if (href === "/") {
      return (
        pathname === "/" ||
        pathname.startsWith("/audits")
      );
    }
    return pathname === href || pathname.startsWith(href + "/");
  }

  return (
    <nav className="flex gap-1 mb-6">
      {TABS.map((tab) => {
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
          </Link>
        );
      })}
    </nav>
  );
}
