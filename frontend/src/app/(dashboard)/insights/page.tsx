"use client";

import {
  Brain,
  CalendarDays,
  Sparkles,
} from "lucide-react";

import GlucoseTrends from "@/features/insights/components/GlucoseTrends";
import PatternCard from "@/features/insights/components/PatternCard";
import TimeInRange from "@/features/insights/components/TimeInRange";
import WeeklyOverview from "@/features/insights/components/WeeklyOverview";

import {
  glucoseTrendData,
  patterns,
  timeInRangeData,
  weeklyOverview,
} from "@/features/insights/mockData";

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-muted/20 px-4 py-6 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <div className="flex items-center gap-2">
              <Brain className="h-6 w-6" />

              <h1 className="text-2xl font-semibold">
                Insights
              </h1>
            </div>

            <p className="mt-1 text-sm text-muted-foreground">
              Understand your glucose patterns and discover what affects your health.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-lg border bg-card px-3 py-2 text-sm text-muted-foreground">
            <CalendarDays className="h-4 w-4" />

            Last 7 days
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
          <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />

          <div>
            <p className="font-medium text-emerald-900">
              Your personal patterns are becoming clearer
            </p>

            <p className="mt-1 text-sm text-emerald-800">
              GlucoPilot looks at your glucose, meals, activity, sleep, and stress together to identify patterns that may be useful to discuss with your healthcare provider.
            </p>
          </div>
        </div>

        <WeeklyOverview
          data={weeklyOverview}
        />

        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <GlucoseTrends
            data={glucoseTrendData}
          />

          <TimeInRange
            data={timeInRangeData}
          />
        </div>

        <section className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold">
              Patterns we found
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              These observations are based on your recent health data.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {patterns.map((pattern) => (
              <PatternCard
                key={pattern.id}
                pattern={pattern}
              />
            ))}
          </div>
        </section>

        <div className="rounded-2xl border bg-card p-5">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">
              Important:
            </strong>{" "}
            These insights are observations from your recorded data, not medical diagnoses. Always discuss important treatment decisions with your healthcare professional.
          </p>
        </div>
      </div>
    </main>
  );
}