"use client";

import {
  Activity,
  ArrowDown,
  ArrowUp,
  Minus,
} from "lucide-react";

import type { GlucoseReading } from "@/features/glucose/types";

type GlucoseCardProps = {
  readings: GlucoseReading[];
};

export default function GlucoseCard({
  readings,
}: GlucoseCardProps) {
  const latestReading = readings[0];

  if (!latestReading) {
    return (
      <div className="rounded-3xl border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-emerald-100 p-4">
            <Activity className="h-7 w-7 text-emerald-600" />
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              Current Glucose
            </h2>

            <p className="text-sm text-muted-foreground">
              No glucose readings yet
            </p>
          </div>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Log your first glucose reading to start tracking your patterns.
        </p>
      </div>
    );
  }

  const previousReading = readings[1];

  const difference = previousReading
    ? latestReading.value - previousReading.value
    : 0;

  const trend =
    difference > 5
      ? "rising"
      : difference < -5
        ? "falling"
        : "stable";

  const TrendIcon =
    trend === "rising"
      ? ArrowUp
      : trend === "falling"
        ? ArrowDown
        : Minus;

  const trendLabel =
    trend === "rising"
      ? "Rising"
      : trend === "falling"
        ? "Falling"
        : "Stable";

  const isInRange =
    latestReading.value >= 70 &&
    latestReading.value <= 180;

  const rangePercentage = Math.min(
    Math.max(
      ((latestReading.value - 70) / 110) * 100,
      0
    ),
    100
  );

  return (
    <div className="rounded-3xl border bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">
            Current Glucose
          </p>

          <h2 className="mt-3 text-5xl font-bold">
            {latestReading.value}
          </h2>

          <p className="mt-2 text-muted-foreground">
            {latestReading.unit}
          </p>
        </div>

        <div className="rounded-full bg-emerald-100 p-5">
          <Activity className="h-10 w-10 text-emerald-600" />
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div
          className={`rounded-full px-4 py-2 ${
            isInRange
              ? "bg-emerald-100"
              : "bg-amber-100"
          }`}
        >
          <span
            className={`font-semibold ${
              isInRange
                ? "text-emerald-700"
                : "text-amber-700"
            }`}
          >
            {isInRange
              ? "In Range"
              : "Outside Range"}
          </span>
        </div>

        <div className="flex items-center gap-2 text-muted-foreground">
          <TrendIcon className="h-4 w-4" />

          {trendLabel}
        </div>
      </div>

      <div className="mt-6 h-3 overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-emerald-500 transition-all"
          style={{
            width: `${rangePercentage}%`,
          }}
        />
      </div>

      <div className="mt-3 flex justify-between text-xs text-muted-foreground">
        <span>70</span>

        <span>Target Range</span>

        <span>180</span>
      </div>

      <p className="mt-5 text-xs text-muted-foreground">
        Last reading: {latestReading.date} at{" "}
        {latestReading.time}
      </p>
    </div>
  );
}