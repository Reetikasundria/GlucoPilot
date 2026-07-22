"use client";

import {
  Activity,
  MessageCircle,
  Utensils,
  Zap,
} from "lucide-react";

const actions = [
  {
    title: "Log Glucose",
    description: "Record your current level",
    icon: Activity,
  },
  {
    title: "Log Meal",
    description: "Track what you ate",
    icon: Utensils,
  },
  {
    title: "Ask AI",
    description: "Get personalized guidance",
    icon: MessageCircle,
  },
  {
    title: "Quick Check",
    description: "How are you feeling?",
    icon: Zap,
  },
];

export default function QuickActions() {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold">
          Quick Actions
        </h2>

        <p className="text-sm text-muted-foreground">
          Keep your health data up to date.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              className="group rounded-2xl border bg-card p-5 text-left shadow-sm transition hover:-translate-y-1 hover:border-emerald-400 hover:shadow-md"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 transition group-hover:bg-emerald-500 group-hover:text-white">
                <Icon className="h-5 w-5" />
              </div>

              <h3 className="font-semibold">
                {action.title}
              </h3>

              <p className="mt-1 text-sm text-muted-foreground">
                {action.description}
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
}