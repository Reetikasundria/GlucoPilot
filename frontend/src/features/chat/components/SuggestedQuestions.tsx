"use client";

import {
  Activity,
  Apple,
  BrainCircuit,
  Utensils,
} from "lucide-react";

const suggestions = [
  {
    title: "My glucose is rising",
    icon: Activity,
  },
  {
    title: "What should I eat now?",
    icon: Utensils,
  },
  {
    title: "Plan my next meal",
    icon: Apple,
  },
  {
    title: "I am feeling stressed",
    icon: BrainCircuit,
  },
];

type SuggestedQuestionsProps = {
  onSelect: (question: string) => void;
};

export default function SuggestedQuestions({
  onSelect,
}: SuggestedQuestionsProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {suggestions.map((suggestion) => {
        const Icon = suggestion.icon;

        return (
          <button
            key={suggestion.title}
            type="button"
            onClick={() =>
              onSelect(suggestion.title)
            }
            className="flex items-center gap-3 rounded-2xl border bg-card p-4 text-left text-sm transition hover:border-emerald-400 hover:bg-emerald-50"
          >
            <Icon className="h-5 w-5 text-emerald-600" />

            <span>
              {suggestion.title}
            </span>
          </button>
        );
      })}
    </div>
  );
}