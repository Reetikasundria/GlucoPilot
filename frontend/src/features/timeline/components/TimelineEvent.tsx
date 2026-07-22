"use client";

import {
  Activity,
  Brain,
  Coffee,
  Droplets,
  Moon,
  Pill,
  StickyNote,
} from "lucide-react";

import { TimelineEvent as TimelineEventType } from "../types";

type TimelineEventProps = {
  event: TimelineEventType;
};

const eventIcons = {
  glucose: Droplets,
  meal: Coffee,
  activity: Activity,
  medication: Pill,
  stress: Brain,
  sleep: Moon,
  note: StickyNote,
};

const eventLabels = {
  glucose: "Glucose",
  meal: "Meal",
  activity: "Activity",
  medication: "Medication",
  stress: "Stress",
  sleep: "Sleep",
  note: "Note",
};

export default function TimelineEvent({
  event,
}: TimelineEventProps) {
  const Icon = eventIcons[event.type];

  return (
    <div className="relative flex gap-4">
      <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-background">
        <Icon className="h-5 w-5 text-emerald-600" />
      </div>

      <div className="min-w-0 flex-1 rounded-2xl border bg-card p-4">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-medium">
                {event.title}
              </h3>

              <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                {eventLabels[event.type]}
              </span>
            </div>

            {event.description && (
              <p className="mt-1 text-sm text-muted-foreground">
                {event.description}
              </p>
            )}
          </div>

          <span className="shrink-0 text-sm text-muted-foreground">
            {event.time}
          </span>
        </div>

        {event.metadata && (
          <div className="mt-3 flex flex-wrap gap-2">
            {event.metadata.glucoseValue !==
              undefined && (
              <span className="rounded-lg bg-muted px-3 py-1.5 text-sm font-medium">
                {event.metadata.glucoseValue} mg/dL
              </span>
            )}

            {event.metadata.mealName && (
              <span className="rounded-lg bg-muted px-3 py-1.5 text-sm">
                {event.metadata.mealName}
              </span>
            )}

            {event.metadata.activityName && (
              <span className="rounded-lg bg-muted px-3 py-1.5 text-sm">
                {event.metadata.activityName}
              </span>
            )}

            {event.metadata.duration && (
              <span className="rounded-lg bg-muted px-3 py-1.5 text-sm">
                {event.metadata.duration}
              </span>
            )}

            {event.metadata.stressLevel && (
              <span className="rounded-lg bg-muted px-3 py-1.5 text-sm capitalize">
                Stress:{" "}
                {event.metadata.stressLevel}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}