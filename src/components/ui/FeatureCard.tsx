"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

type FeatureCardProps = {
  title: string;
  body: string;
  imgSrc?: string;
};

export default function FeatureCard({ title, body, imgSrc }: FeatureCardProps) {
  return (
    <Card className="p-6 h-full bg-surface/80 border border-white/10 hover:border-sea/40 hover:shadow-glow transition-all">
      <div className="space-y-4">
        {imgSrc ? (
          <div className="relative h-28 w-full overflow-hidden rounded-lg">
            <Image src={imgSrc} alt="" fill className="object-cover" />
          </div>
        ) : null}
        <h3 className="text-lg font-semibold tracking-tight text-white">{title}</h3>
        <p className="text-sm text-muted">{body}</p>
      </div>
    </Card>
  );
}


