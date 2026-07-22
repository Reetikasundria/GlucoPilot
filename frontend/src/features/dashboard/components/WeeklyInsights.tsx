"use client";

import {
  ArrowDown,
  ArrowUp,
  Target,
  TrendingUp,
} from "lucide-react";

export default function WeeklyInsights() {
  return (
    <div className="rounded-3xl border bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">
            Weekly Insights
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Your glucose patterns this week
          </p>
        </div>

        <TrendingUp className="h-6 w-6 text-emerald-600" />
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-muted/50 p-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Target className="h-4 w-4" />

            Time in range
          </div>

          <p className="mt-3 text-2xl font-bold">
            78%
          </p>

          <p className="mt-1 text-xs text-emerald-600">
            +6% from last week
          </p>
        </div>

        <div className="rounded-2xl bg-muted/50 p-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ArrowUp className="h-4 w-4" />

            High glucose events
          </div>

          <p className="mt-3 text-2xl font-bold">
            8
          </p>

          <p className="mt-1 text-xs text-emerald-600">
            3 fewer than last week
          </p>
        </div>

        <div className="rounded-2xl bg-muted/50 p-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ArrowDown className="h-4 w-4" />

            Low glucose events
          </div>

          <p className="mt-3 text-2xl font-bold">
            2
          </p>

          <p className="mt-1 text-xs text-emerald-600">
            Stable this week
          </p>
        </div>
      </div>
    </div>
  );
}