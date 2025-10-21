"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast("Thanks!");
    setEmail("");
  };

  return (
    <form onSubmit={onSubmit} className="flex gap-2 max-w-md">
      <div className="sr-only">
        <Label htmlFor="email">Email</Label>
      </div>
      <Input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        required
      />
      <Button type="submit" variant="brand">
        Notify me
      </Button>
    </form>
  );
}


