"use client";

import { useFormContext } from "react-hook-form";

import CardContainer from "../components/CardContainer";
import SectionTitle from "../components/SectionTitle";
import SelectionCard from "../components/SelectionCard";

const GOALS = [
  {
    value: "stable_glucose",
    title: "Stable Blood Sugar",
    description: "Reduce highs and lows.",
    icon: "📈",
  },
  {
    value: "reduce_hba1c",
    title: "Reduce HbA1c",
    description: "Improve long-term control.",
    icon: "🩸",
  },
  {
    value: "meal_planning",
    title: "Better Meal Planning",
    description: "Know what to eat.",
    icon: "🥗",
  },
  {
    value: "weight_loss",
    title: "Weight Loss",
    description: "Healthy fat reduction.",
    icon: "⚖️",
  },
  {
    value: "weight_gain",
    title: "Weight Gain",
    description: "Healthy muscle gain.",
    icon: "🏋️",
  },
  {
    value: "energy",
    title: "Improve Energy",
    description: "Feel energetic all day.",
    icon: "⚡",
  },
  {
    value: "sleep",
    title: "Better Sleep",
    description: "Improve sleep quality.",
    icon: "😴",
  },
  {
    value: "stress",
    title: "Stress Management",
    description: "Reduce glucose spikes caused by stress.",
    icon: "🧘",
  },
  {
    value: "exercise",
    title: "Exercise Guidance",
    description: "Workout safely with diabetes.",
    icon: "🏃",
  },
  {
    value: "doctor_reports",
    title: "Doctor Reports",
    description: "Generate weekly reports.",
    icon: "📄",
  },
];

export default function Goals() {
  const { watch, setValue } = useFormContext();

  const selectedGoals = watch("goals") || [];

  const toggleGoal = (goal: string) => {
    if (selectedGoals.includes(goal)) {
      setValue(
        "goals",
        selectedGoals.filter((g: string) => g !== goal)
      );
    } else {
      setValue("goals", [...selectedGoals, goal]);
    }
  };

  return (
    <CardContainer>
      <div className="space-y-8">
        <SectionTitle
          title="Your Health Goals"
          subtitle="Choose everything you'd like GlucoPilot to help you with."
        />

        <div className="space-y-4">
          {GOALS.map((goal) => (
            <SelectionCard
              key={goal.value}
              title={goal.title}
              description={goal.description}
              icon={goal.icon}
              selected={selectedGoals.includes(goal.value)}
              onClick={() => toggleGoal(goal.value)}
            />
          ))}
        </div>
      </div>
    </CardContainer>
  );
}