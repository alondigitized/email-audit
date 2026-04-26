import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TopNav } from "@/components/TopNav";
import { TrialBanner } from "@/components/TrialBanner";
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
          />
          {children}
        </main>
      </body>
    </html>
  );
}
