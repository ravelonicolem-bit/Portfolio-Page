import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { profile } from "@/data/profile";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: `${profile.headline} — ${profile.displayName}`,
    template: `%s — ${profile.displayName}`,
  },
  description: profile.shortDescription,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <Navbar />
        <main className="relative z-[1] flex-1 overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
