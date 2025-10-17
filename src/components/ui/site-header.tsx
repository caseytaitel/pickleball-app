"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

const links = [
  { href: "#features", label: "Features" },
  { href: "#science", label: "Science" },
  { href: "#join", label: "Join waitlist" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-base font-semibold hover:opacity-90">
          Pickleball App
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring rounded-sm"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild>
            <Link href="#join">Join waitlist</Link>
          </Button>
        </div>

        {/* Mobile nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            aria-label="Open menu"
            className="md:hidden inline-flex items-center rounded px-3 py-2 border text-sm"
          >
            Menu
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <nav className="mt-8 flex flex-col gap-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-foreground/90 hover:text-foreground"
                >
                  {l.label}
                </Link>
              ))}
              <Button asChild className="mt-2">
                <Link href="#join" onClick={() => setOpen(false)}>
                  Join waitlist
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