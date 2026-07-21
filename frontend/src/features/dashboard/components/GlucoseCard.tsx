"use client";

import {
  ArrowUp,
  Activity,
} from "lucide-react";

export default function GlucoseCard() {
  return (
    <div className="rounded-3xl border bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-muted-foreground text-sm">
            Current Glucose
          </p>

          <h2 className="mt-3 text-5xl font-bold">
            108
          </h2>

          <p className="mt-2 text-muted-foreground">
            mg/dL
          </p>
        </div>

        <div className="rounded-full bg-emerald-100 p-5">
          <Activity className="h-10 w-10 text-emerald-600" />
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div className="rounded-full bg-emerald-100 px-4 py-2">
          <span className="font-semibold text-emerald-700">
            In Range
          </span>
        </div>

        <div className="flex items-center gap-2 text-emerald-600">
          <ArrowUp className="h-4 w-4" />
          Stable
        </div>
      </div>

      <div className="mt-6 h-3 rounded-full bg-muted overflow-hidden">
        <div className="h-full w-[62%] rounded-full bg-emerald-500" />
      </div>

      <div className="mt-3 flex justify-between text-xs text-muted-foreground">
        <span>70</span>

        <span>Target</span>

        <span>180</span>
      </div>

      <p className="mt-5 text-xs text-muted-foreground">
        Updated 5 minutes ago
      </p>
    </div>
  );
}