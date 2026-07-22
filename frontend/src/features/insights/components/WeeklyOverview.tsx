"use client";

import {
  Activity,
  ArrowDown,
  ArrowUp,
  CalendarDays,
  Droplets,
} from "lucide-react";

import { WeeklyOverviewData } from "../types";

type WeeklyOverviewProps = {
  data: WeeklyOverviewData;
};

export default function WeeklyOverview({
  data,
}: WeeklyOverviewProps) {
  const averageChange =
    data.averageGlucose -
    data.previousAverageGlucose;

  const timeInRangeChange =
    data.timeInRange -
    data.previousTimeInRange;

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <div className="rounded-2xl border bg-card p-5">
        <div className="flex items-center justify-between">
          <div className="rounded-xl bg-muted p-2">
            <Droplets className="h-5 w-5" />
          </div>

          <span className="flex items-center gap-1 text-sm text-emerald-600">
            <ArrowDown className="h-4 w-4" />

            {Math.abs(averageChange)} mg/dL
          </span>
        </div>

        <p className="mt-4 text-sm text-muted-foreground">
          Average glucose
        </p>

        <p className="mt-1 text-2xl font-semibold">
          {data.averageGlucose}
          <span className="ml-1 text-sm font-normal text-muted-foreground">
            mg/dL
          </span>
        </p>

        <p className="mt-1 text-xs text-muted-foreground">
          Compared with last week
        </p>
      </div>

      <div className="rounded-2xl border bg-card p-5">
        <div className="flex items-center justify-between">
          <div className="rounded-xl bg-muted p-2">
            <Activity className="h-5 w-5" />
          </div>

          <span className="flex items-center gap-1 text-sm text-emerald-600">
            <ArrowUp className="h-4 w-4" />

            {timeInRangeChange}%
          </span>
        </div>

        <p className="mt-4 text-sm text-muted-foreground">
          Time in range
        </p>

        <p className="mt-1 text-2xl font-semibold">
          {data.timeInRange}%
        </p>

        <p className="mt-1 text-xs text-muted-foreground">
          Target range: 70–180 mg/dL
        </p>
      </div>

      <div className="rounded-2xl border bg-card p-5">
        <div className="rounded-xl bg-muted p-2 w-fit">
          <CalendarDays className="h-5 w-5" />
        </div>

        <p className="mt-4 text-sm text-muted-foreground">
          Active days
        </p>

        <p className="mt-1 text-2xl font-semibold">
          {data.activeDays}
          <span className="ml-1 text-sm font-normal text-muted-foreground">
            / 7
          </span>
        </p>

        <p className="mt-1 text-xs text-muted-foreground">
          Days with recorded activity
        </p>
      </div>

      <div className="rounded-2xl border bg-card p-5">
        <div className="rounded-xl bg-muted p-2 w-fit">
          <Droplets className="h-5 w-5" />
        </div>

        <p className="mt-4 text-sm text-muted-foreground">
          Glucose readings
        </p>

        <p className="mt-1 text-2xl font-semibold">
          {data.readings}
        </p>

        <p className="mt-1 text-xs text-muted-foreground">
          Recorded this week
        </p>
      </div>
    </div>
  );
}