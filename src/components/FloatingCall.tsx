"use client";

import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export default function FloatingCall() {
  return (
    <a
      href={site.facebook}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Message ${site.name} on Facebook`}
      className="bg-grad pulsedot fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-md text-white shadow-xl shadow-ember/40 transition-transform hover:scale-105"
    >
      <MessageCircle size={22} />
    </a>
  );
}
