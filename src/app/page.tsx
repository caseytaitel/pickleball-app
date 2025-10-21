'use client' 

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import FeatureCard from "@/components/ui/FeatureCard"
import EmailForm from "@/components/ui/EmailForm"
import Image from "next/image"

export default function Page() {
  return (
    <div className="space-y-24">
      {/* Hero */}
      <section id="home" className="min-h-screen flex items-center mx-auto max-w-6xl px-4">
        <div className="grid gap-12 md:grid-cols-2 items-center w-full">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight uppercase text-white">
              Win the mental game.
            </h1>
            <p className="text-lg text-muted max-w-lg">
              Focus, confidence, and clutch routines for pickleball players.
            </p>
            <div className="flex gap-4">
              <Button size="lg" variant="brand" className="group relative overflow-hidden">
                <span className="relative z-10">Join waitlist</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
              </Button>
              <Button variant="outline" size="lg" className="border-sky/40 hover:bg-sky/10 text-white hover:border-sky/60">
                See features
              </Button>
            </div>
          </div>
          <div className="relative">
            <Card className="h-80 md:h-96 flex items-center justify-center bg-surface/80 border border-white/10 hover:border-sea/40 hover:shadow-glow transition-all animate-float">
              <div className="relative h-64 w-full">
                <Image src="/assets/hero-illustration.png" alt="Hero" fill className="object-contain" />
              </div>
            </Card>
          </div>
        </div>
        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#features" className="text-white/60 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      <Separator />

      {/* Features */}
      <section id="features" className="scroll-mt-24 py-20 mx-auto max-w-6xl px-4">
        <div className="space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sea via-sky to-gold text-center">
            Features
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <FeatureCard title="Pre-point routines" body="Lock in with consistent breath and cue words." imgSrc="/assets/feature-train.png" />
            <FeatureCard title="In-match coaching" body="Real-time guidance for momentum swings and pressure moments." imgSrc="/assets/feature-track.png" />
            <FeatureCard title="Post-match review" body="Reflect, tag patterns, and build confidence reps." imgSrc="/assets/feature-connect.png" />
          </div>
        </div>
      </section>

      {/* Science */}
      <section id="science" className="scroll-mt-24 py-20 mx-auto max-w-6xl px-4">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sea via-sky to-gold text-center">
            Built on sport psychology
          </h2>
          <p className="text-muted text-center max-w-3xl mx-auto text-lg">Our methods blend attention control, imagery, and self-talk protocols validated across racket sports.</p>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="a1" className="bg-surface/80 border border-white/10 rounded-lg mb-4">
                <AccordionTrigger className="text-white hover:text-sea transition-colors px-6 py-4">Attention control</AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted">Brief copy on cues, breath, and focus resets.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="a2" className="bg-surface/80 border border-white/10 rounded-lg">
                <AccordionTrigger className="text-white hover:text-sea transition-colors px-6 py-4">Imagery + self-talk</AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted">Short evidence blurb and references.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Join */}
      <section id="join" className="scroll-mt-24 py-20 mx-auto max-w-6xl px-4">
        <div className="space-y-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sea via-sky to-gold">
            Get early access
          </h2>
          <div className="max-w-md mx-auto">
            <EmailForm />
            <p className="text-sm text-muted mt-4">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

