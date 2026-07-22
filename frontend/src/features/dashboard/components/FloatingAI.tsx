"use client";

import { BrainCircuit, MessageCircle } from "lucide-react";

export default function FloatingAI() {
  return (
    <button
      aria-label="Open AI Assistant"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl transition hover:scale-110 hover:bg-emerald-600"
    >
      <BrainCircuit className="h-7 w-7" />

      <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-violet-500">
        <MessageCircle className="h-3 w-3" />
      </span>
    </button>
  );
}