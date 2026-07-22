"use client";

import { useMemo, useState } from "react";
import {
  CalendarDays,
  Plus,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import EventFilters from "@/features/timeline/components/EventFilters";
import Timeline from "@/features/timeline/components/Timeline";

import { timelineEvents } from "@/features/timeline/mockData";

import {
  TimelineFilter,
} from "@/features/timeline/types";

export default function TimelinePage() {
  const [activeFilter, setActiveFilter] =
    useState<TimelineFilter>("all");

  const filteredEvents = useMemo(() => {
    if (activeFilter === "all") {
      return timelineEvents;
    }

    return timelineEvents.filter(
      (event) =>
        event.type === activeFilter
    );
  }, [activeFilter]);

  return (
    <main className="min-h-screen bg-muted/20 px-4 py-6 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <div className="flex items-center gap-2">
              <CalendarDays className="h-6 w-6 text-emerald-600" />

              <h1 className="text-2xl font-semibold">
                Daily Timeline
              </h1>
            </div>

            <p className="mt-1 text-sm text-muted-foreground">
              See the events that shape your health throughout the day.
            </p>
          </div>

          <Button>
            <Plus className="mr-2 h-4 w-4" />

            Add Event
          </Button>
        </div>

        <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
          <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />

          <div>
            <p className="font-medium text-emerald-900">
              Context helps GlucoPilot understand your patterns
            </p>

            <p className="mt-1 text-sm text-emerald-800">
              A glucose reading becomes much more useful when we know what you ate, how active you were, how you slept, and how stressed you felt.
            </p>
          </div>
        </div>

        <EventFilters
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <div className="rounded-2xl border bg-card p-5">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">
                Today
              </h2>

              <p className="mt-1 text-sm text-muted-foreground">
                {filteredEvents.length} events recorded
              </p>
            </div>

            <span className="rounded-lg bg-muted px-3 py-1.5 text-sm text-muted-foreground">
              July 22, 2026
            </span>
          </div>

          <Timeline
            events={filteredEvents}
          />
        </div>
      </div>
    </main>
  );
}