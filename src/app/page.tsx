'use client' 

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
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
              <Button asChild size="lg" variant="brand" className="group relative overflow-hidden bg-sea text-white transition-all duration-300 hover:bg-gold hover:text-charcoal">
                <a href="#join">
                  <span className="relative z-10">Join waitlist</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-sky/50 text-white transition-colors duration-300 hover:bg-sky/20 hover:border-sky/70 hover:text-sky">
                <a href="#features">See features</a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <Card className="h-80 md:h-96 flex items-center justify-center bg-surface/80 border border-white/10 hover:border-sea/40 hover:shadow-glow transition-all animate-float">
              <div className="relative h-70 md:h-[30rem] w-full">
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

      {/* Features */}
      <section id="features" className="scroll-mt-24 py-20 mx-auto max-w-6xl px-6 md:px-8">
        <div className="space-y-10 md:space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-sea via-sky to-gold text-center pb-2">
            Features
          </h2>
          <div className="mt-2 grid gap-6 sm:gap-8 md:grid-cols-3">
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="p-6 flex flex-col gap-3">
            <div className="relative w-full h-36 md:h-40 flex items-center justify-center p-2">
              <Image src="/assets/feature-train.png" alt="Guided Training" fill className="object-contain" sizes="(min-width: 768px) 33vw, 100vw" priority={false} />
            </div>
            <h3 className="font-semibold">Guided Training</h3>
            <p className="text-sm text-muted-foreground">
              Get personalized training plans, exercises, and mindset coaching.
            </p>
          </Card>
          <Card className="p-6 flex flex-col gap-3">
            <div className="relative w-full h-36 md:h-40 flex items-center justify-center p-2">
              <Image src="/assets/feature-track.png" alt="Progress Tracking" fill className="object-contain" sizes="(min-width: 768px) 33vw, 100vw" priority={false} />
            </div>
            <h3 className="font-semibold">Progress Tracking</h3>
            <p className="text-sm text-muted-foreground">
              Track your progress, set goals, and see your improvement.
            </p>
          </Card>
          <Card className="p-6 flex flex-col gap-3">
            <div className="relative w-full h-36 md:h-40 flex items-center justify-center p-2">
              <Image src="/assets/feature-connect.png" alt="Community" fill className="object-contain" sizes="(min-width: 768px) 33vw, 100vw" priority={false} />
            </div>
            <h3 className="font-semibold">Community</h3>
            <p className="text-sm text-muted-foreground">
              Connect with other players, share tips, and get support.
            </p>
          </Card>
        </div>
      </section>

      {/* Join */}
      <section id="join" className="scroll-mt-24 py-20 mx-auto max-w-6xl px-4">
        <div className="space-y-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold leading-[1.2] pb-1 bg-clip-text text-transparent bg-gradient-to-r from-sea via-sky to-gold text text-center">
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

