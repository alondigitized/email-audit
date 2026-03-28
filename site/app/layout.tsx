import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Experience Review",
  description: "AI-powered reviews of brand experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <main className="max-w-[980px] mx-auto px-5 pt-8 pb-16 overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
