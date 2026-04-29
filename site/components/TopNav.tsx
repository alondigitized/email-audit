"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
}: {
  isAdmin?: boolean;
  chatEnabled?: boolean;
  hasPersonas?: boolean;
}) {
  const pathname = usePathname() || "/";

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
  const WORDMARK_ONLY_PATHS = ["/terms", "/privacy"];
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
  // Chat tab: shown to non-admins only when the app flag is on AND they own
  // a persona. Shown to admins regardless, with an "(off)" suffix when the
  // flag is off so they can still validate before flipping the public switch.
  if (chatEnabled && hasPersonas) {
    tabs.push({ href: "/chat", label: "Chat" });
  } else if (isAdmin && hasPersonas) {
    tabs.push({ href: "/chat", label: "Chat", suffix: "(off)" });
  }
  // Analysis is admin-curated for now — no user-facing way to create one,
  // so non-admins just see "No analyses yet". Hide the tab from them.
  if (isAdmin) {
    tabs.push({ href: "/analysis", label: "Analysis" });
    tabs.push({ href: "/admin", label: "Admin" });
  }

  return (
    <>
      <div className="mb-5 pt-2 text-center">
        <Link href="/" className="inline-block">
          <Wordmark />
        </Link>
      </div>
      <nav className="flex items-center justify-between mb-6">
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
