"use client";

import {
  Activity,
  Apple,
  Footprints,
  Utensils,
} from "lucide-react";

const events = [
  {
    title: "Glucose was stable",
    description: "Your level remained within your target range.",
    time: "11:30 AM",
    icon: Activity,
  },
  {
    title: "Breakfast logged",
    description: "Oats, eggs and milk",
    time: "8:10 AM",
    icon: Utensils,
  },
  {
    title: "Glucose increased",
    description: "Level increased after breakfast.",
    time: "9:05 AM",
    icon: Apple,
  },
  {
    title: "Walk completed",
    description: "30 minutes of walking.",
    time: "7:00 AM",
    icon: Footprints,
  },
];

export default function RecentEvents() {
  return (
    <div className="rounded-3xl border bg-card p-6 shadow-sm">
      <div>
        <h2 className="text-xl font-semibold">
          Recent Events
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Your recent health activity
        </p>
      </div>

      <div className="mt-6 space-y-5">
        {events.map((event, index) => {
          const Icon = event.icon;

          return (
            <div
              key={event.title}
              className="flex gap-4"
            >
              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <Icon className="h-5 w-5" />
                </div>

                {index !== events.length - 1 && (
                  <div className="absolute left-1/2 top-10 h-6 w-px -translate-x-1/2 bg-border" />
                )}
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium">
                      {event.title}
                    </p>

                    <p className="mt-1 text-sm text-muted-foreground">
                      {event.description}
                    </p>
                  </div>

                  <span className="whitespace-nowrap text-xs text-muted-foreground">
                    {event.time}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}