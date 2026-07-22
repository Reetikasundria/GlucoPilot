"use client";

import {
  BrainCircuit,
  Circle,
} from "lucide-react";

export default function ChatHeader() {
  return (
    <div className="flex items-center justify-between border-b px-6 py-5">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
          <BrainCircuit className="h-6 w-6" />
        </div>

        <div>
          <h1 className="text-xl font-semibold">
            GlucoPilot AI Coach
          </h1>

          <div className="mt-1 flex items-center gap-2">
            <Circle className="h-2.5 w-2.5 fill-emerald-500 text-emerald-500" />

            <span className="text-sm text-muted-foreground">
              Personal health companion
            </span>
          </div>
        </div>
      </div>

      <div className="hidden rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700 sm:block">
        Personalised for you
      </div>
    </div>
  );
}