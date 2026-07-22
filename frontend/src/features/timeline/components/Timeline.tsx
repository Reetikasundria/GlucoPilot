import { TimelineEvent as TimelineEventType } from "../types";

import TimelineEvent from "./TimelineEvent";

type TimelineProps = {
  events: TimelineEventType[];
};

export default function Timeline({
  events,
}: TimelineProps) {
  if (!events.length) {
    return (
      <div className="rounded-2xl border bg-card p-10 text-center">
        <p className="font-medium">
          No events found
        </p>

        <p className="mt-1 text-sm text-muted-foreground">
          Your activities, meals, glucose readings, and other events will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="relative space-y-6">
      <div className="absolute bottom-0 left-5 top-0 w-px bg-border" />

      {events.map((event) => (
        <TimelineEvent
          key={event.id}
          event={event}
        />
      ))}
    </div>
  );
}