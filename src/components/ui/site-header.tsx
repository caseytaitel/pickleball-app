"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

const links = [
  { href: "#features", label: "Features" },
  { href: "#science", label: "Science" },
  { href: "#join", label: "Join" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 backdrop-blur border-b border-white/10 z-50 w-full">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-base font-semibold text-white hover:opacity-90">
          pkkle
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-white/90 hover:text-white brand-underline focus:outline-none focus:ring-2 focus:ring-gold/60 rounded-sm"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="brand" className="relative overflow-hidden group">
            <Link href="#join">
              <span className="relative z-10">Join</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
            </Link>
          </Button>
        </div>

        {/* Mobile nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            aria-label="Open menu"
            className="md:hidden inline-flex items-center rounded px-3 py-2 border border-white/10 text-sm text-white/90 hover:text-white"
          >
            Menu
          </SheetTrigger>
          <SheetContent side="right" className="w-64 bg-surface border-l border-white/10">
            <nav className="mt-8 flex flex-col gap-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-white/90 hover:text-white brand-underline"
                >
                  {l.label}
                </Link>
              ))}
              <Button asChild variant="brand" className="mt-2">
                <Link href="#join" onClick={() => setOpen(false)}>
                  Join
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export { SiteHeader }