import type { Metadata } from "next";
import { Oswald, Poppins } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/ui/site-header";
import SiteFooter from "@/components/ui/site-footer";
import { Toaster } from "@/components/ui/sonner";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "pkkle",
  description: "Mind game for pickleball.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${oswald.variable} ${poppins.variable} antialiased min-h-screen noise`}
      >
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Toaster />
      </body>
    </html>
  );
}
