"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignOutButton } from "./SignOutButton";
import { Wordmark } from "./Wordmark";

type Tab = { href: string; label: string; suffix?: string };

const BASE_TABS: Tab[] = [
  { href: "/", label: "Audits" },
  { href: "/analysis", label: "Analysis" },
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

  // Public/marketing routes — no nav. The signup funnel and the auth flow
  // shouldn't expose authed tabs (Audits, Chat, Sign out) to unauthed visitors.
  // /onboarding is also hidden — first-time users should focus on the wizard,
  // not get distracted by Audits/Analysis tabs they haven't seen yet.
  const PUBLIC_PATHS = ["/login", "/signup", "/auth/", "/r/", "/onboarding"];
  if (PUBLIC_PATHS.some((p) => pathname === p.replace(/\/$/, "") || pathname.startsWith(p)))
    return null;

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
  if (isAdmin) tabs.push({ href: "/admin", label: "Admin" });

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
