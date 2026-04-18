import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TopNav } from "@/components/TopNav";
import { currentUser } from "@/lib/dal";
import { isAppEnabled } from "@/lib/apps";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Experience Intelligence",
  description: "AI-powered reviews of brand experiences",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await currentUser();
  const chatEnabled = user ? await isAppEnabled("chat") : false;
  const hasPersonas = user
    ? user.isAdmin || user.personas.length > 0
    : false;
  return (
    <html lang="en" className={inter.className}>
      <body>
        <main className="max-w-[980px] mx-auto px-5 pt-8 pb-16 overflow-hidden">
          <TopNav
            isAdmin={user?.isAdmin ?? false}
            chatEnabled={chatEnabled}
            hasPersonas={hasPersonas}
          />
          {children}
        </main>
      </body>
    </html>
  );
}
