"use client";

import { BrainCircuit, Sparkles } from "lucide-react";

export default function AIRecommendationCard() {
  return (
    <div className="rounded-3xl border bg-card p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="rounded-full bg-violet-100 p-3">
          <BrainCircuit className="h-6 w-6 text-violet-600" />
        </div>

        <div>
          <h2 className="text-xl font-semibold">
            AI Recommendation
          </h2>

          <p className="text-sm text-muted-foreground">
            Personalized using your history
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-violet-50 p-5">
        <p className="font-medium leading-7">
          🍳 Today choose a protein-rich breakfast.
          Yesterday's breakfast caused a
          <span className="font-bold text-violet-700">
            {" "}+42 mg/dL{" "}
          </span>
          spike.
        </p>
      </div>

      <div className="mt-5 flex items-center gap-2 text-violet-600">
        <Sparkles className="h-5 w-5" />
        <span className="text-sm font-medium">
          Confidence 92%
        </span>
      </div>
    </div>
  );
}