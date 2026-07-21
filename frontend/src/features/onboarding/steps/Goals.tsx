"use client";

import { useFormContext } from "react-hook-form";

import CardContainer from "../components/CardContainer";
import SectionTitle from "../components/SectionTitle";

const goals = [
  {
    icon: "🩸",
    title: "Better Glucose Control",
  },
  {
    icon: "📉",
    title: "Reduce HbA1c",
  },
  {
    icon: "⚖️",
    title: "Lose Weight",
  },
  {
    icon: "💪",
    title: "Gain Muscle",
  },
  {
    icon: "😴",
    title: "Better Sleep",
  },
  {
    icon: "🧠",
    title: "Reduce Stress",
  },
  {
    icon: "🏃",
    title: "Exercise Regularly",
  },
  {
    icon: "📚",
    title: "Balance Study & Health",
  },
  {
    icon: "❤️",
    title: "Heart Health",
  },
  {
    icon: "👁",
    title: "Eye Health",
  },
  {
    icon: "🦶",
    title: "Foot Care",
  },
];

export default function Goals() {
  const { watch, setValue } = useFormContext();

  const selected = watch("goals") || [];

  const toggleGoal = (goal: string) => {
    if (selected.includes(goal)) {
      setValue(
        "goals",
        selected.filter((g: string) => g !== goal),
        {
          shouldValidate: true,
          shouldDirty: true,
        }
      );
    } else {
      setValue(
        "goals",
        [...selected, goal],
        {
          shouldValidate: true,
          shouldDirty: true,
        }
      );
    }
  };

  return (
    <CardContainer>
      <div className="space-y-8">
        <SectionTitle
          title="Your Health Goals"
          subtitle="Select everything you want GlucoPilot to help you achieve."
        />

        <div className="flex flex-wrap gap-3">
          {goals.map((goal) => {
            const active = selected.includes(goal.title);

            return (
              <button
                key={goal.title}
                type="button"
                onClick={() => toggleGoal(goal.title)}
                className={`rounded-full border px-5 py-3 transition-all ${
                  active
                    ? "border-emerald-500 bg-emerald-500 text-white"
                    : "border-border hover:border-emerald-400"
                }`}
              >
                {goal.icon} {goal.title}
              </button>
            );
          })}
        </div>

        <div className="rounded-xl border bg-muted/30 p-5">
          <p className="text-sm text-muted-foreground">
            💡 These goals help GlucoPilot personalize your daily plans,
            meal recommendations, reminders and AI insights.
          </p>
        </div>
      </div>
    </CardContainer>
  );
}