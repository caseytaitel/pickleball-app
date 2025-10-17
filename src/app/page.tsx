import{Button} from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Toaster, toast} from "@/components/ui/sonner"

export default function Page() {
  return (
    <main className="min-h-dvh mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Pickleball App</h1>
      <p className="text-muted-foreground mt-2">Landing skeleton is live.</p>
      <form className="flex gap-2">
        <Label htmlFor="email" className="sr-only">Email</Label>
        <Input id="email" type="email" placeholder="you@example.com" />
        <Button type="button" onClick={() => toast("Thanks! You’re on the list.")}>Notify me</Button>
      </form>
      <Toaster />
    </main>
  );
}
