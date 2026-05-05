import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import Link from "next/link";
import "./globals.css";
import { TopNav } from "@/components/TopNav";
import { TrialBanner } from "@/components/TrialBanner";
import { Footer } from "@/components/Footer";
import { Wordmark } from "@/components/Wordmark";
import { currentUser } from "@/lib/dal";
import { isAppEnabled } from "@/lib/apps";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "etell · Experience Intelligence",
  description: "AI-powered reviews of brand experiences",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Public share routes (/share/<token>) get a slim, logo-only chrome —
  // no nav, no trial banner, no auth-aware footer. Pathname is forwarded
  // by proxy.ts via the `x-pathname` header.
  const h = await headers();
  const pathname = h.get("x-pathname") ?? "";
  const isShareRoute = pathname.startsWith("/share/");

  if (isShareRoute) {
    return (
      <html lang="en" className={inter.className}>
        <body>
          <main className="max-w-[980px] mx-auto px-5 pt-8 pb-16 overflow-x-hidden">
            {/* Static logo — non-clickable so a public viewer can't
                accidentally bounce out of the shared report into the
                authed app. Center-aligned to match the rest of the site. */}
            <div className="mb-5 pt-2 text-center">
              <Wordmark />
            </div>
            {children}
          </main>
          <footer className="max-w-[980px] mx-auto px-5 py-6 mt-12 border-t border-gray-200 text-xs text-muted flex items-center justify-between">
            <div>© {new Date().getFullYear()} etell.app</div>
            <Link
              href="/signup"
              className="text-sky-700 hover:text-sky-900 font-medium"
            >
              Audit your own brand at etell.app →
            </Link>
          </footer>
        </body>
      </html>
    );
  }

  const user = await currentUser();
  const chatGloballyEnabled = user ? await isAppEnabled("chat") : false;
  // The Chat tab shows only when: app is on globally AND user has been
  // granted access. Admins see it regardless.
  const chatVisible = user
    ? user.isAdmin ||
      (chatGloballyEnabled && user.apps.includes("chat"))
    : false;
  const hasPersonas = user
    ? user.isAdmin || user.personas.length > 0
    : false;
  return (
    <html lang="en" className={inter.className}>
      <body>
        <TrialBanner />
        <main className="max-w-[980px] mx-auto px-5 pt-8 pb-16 overflow-x-hidden">
          <TopNav
            isAdmin={user?.isAdmin ?? false}
            chatEnabled={chatVisible}
            hasPersonas={hasPersonas}
            hasTenant={!!user?.tenantId}
          />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
