'use client' 

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"

export default function Page() {
  return (
    <div className="space-y-20 py-10">
      {/* Hero */}
      <section id="home" className="grid gap-6 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Win the mental game.</h1>
          <p className="mt-3 text-muted-foreground">
            Focus, confidence, and clutch routines for pickleball players.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#join"><Button size="lg">Join waitlist</Button></a>
            <Button variant="outline" size="lg" asChild><a href="#features">See features</a></Button>
          </div>
        </div>
        <Card className="h-64 md:h-72" />
      </section>

      <Separator />

      {/* Features */}
      <section id="features" className="scroll-mt-24 space-y-8">
        <h2 className="text-2xl font-semibold">Features</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="p-6">Pre-point routines</Card>
          <Card className="p-6">In-match coaching</Card>
          <Card className="p-6">Post-match review</Card>
        </div>
      </section>

      {/* Science */}
      <section id="science" className="scroll-mt-24 space-y-4">
        <h2 className="text-2xl font-semibold">Built on sport psychology</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="a1">
            <AccordionTrigger>Attention control</AccordionTrigger>
            <AccordionContent>Brief copy on cues, breath, and focus resets.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="a2">
            <AccordionTrigger>Imagery + self-talk</AccordionTrigger>
            <AccordionContent>Short evidence blurb and references.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Join */}
      <section id="join" className="scroll-mt-24 space-y-4">
        <h2 className="text-2xl font-semibold">Get early access</h2>
        <form className="flex gap-2 max-w-md">
          <Label htmlFor="email" className="sr-only">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" />
          <Button type="button" onClick={() => toast("Thanks! You’re on the list.")}>Notify me</Button>
        </form>
        <p className="text-xs text-muted-foreground">No spam. Unsubscribe anytime.</p>
      </section>
    </div>
  )
}

