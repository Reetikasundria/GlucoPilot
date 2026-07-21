"use client";

import {
  GraduationCap,
  Dumbbell,
  BookOpen,
  Moon,
} from "lucide-react";

const schedule = [
  {
    icon: GraduationCap,
    title: "College",
    time: "10:00 AM",
  },
  {
    icon: BookOpen,
    title: "DSA Practice",
    time: "3:00 PM",
  },
  {
    icon: Dumbbell,
    title: "30 min Walk",
    time: "6:00 PM",
  },
  {
    icon: Moon,
    title: "Sleep",
    time: "11:00 PM",
  },
];

export default function ScheduleCard() {
  return (
    <div className="rounded-3xl border bg-card p-6 shadow-sm">
      <h2 className="text-xl font-semibold">
        Today's Schedule
      </h2>

      <div className="mt-6 space-y-4">
        {schedule.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-center justify-between rounded-xl border p-4"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-blue-100 p-3">
                  <Icon className="h-5 w-5 text-blue-600" />
                </div>

                <span className="font-medium">
                  {item.title}
                </span>
              </div>

              <span className="text-sm text-muted-foreground">
                {item.time}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}