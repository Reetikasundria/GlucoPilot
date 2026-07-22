"use client";

import {
  Check,
  Clock,
  Flame,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { Meal } from "../types";

type MealCardProps = {
  meal: Meal;
  onSelect: (meal: Meal) => void;
  onToggleComplete: (mealId: string) => void;
};

export default function MealCard({
  meal,
  onSelect,
  onToggleComplete,
}: MealCardProps) {
  return (
    <div
      className={`rounded-2xl border bg-card p-5 transition ${
        meal.completed
          ? "border-emerald-300 bg-emerald-50/50"
          : "hover:border-emerald-300"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium capitalize">
              {meal.type}
            </span>

            {meal.completed && (
              <span className="flex items-center gap-1 text-xs text-emerald-600">
                <Check className="h-3.5 w-3.5" />
                Logged
              </span>
            )}
          </div>

          <h3 className="text-lg font-semibold">
            {meal.name}
          </h3>

          <p className="mt-1 text-sm text-muted-foreground">
            {meal.description}
          </p>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => onSelect(meal)}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      <div className="mt-5 flex flex-wrap gap-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Clock className="h-4 w-4" />
          {meal.time}
        </span>

        <span className="flex items-center gap-1.5">
          <Flame className="h-4 w-4" />
          {meal.calories} kcal
        </span>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {meal.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs text-emerald-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <Button
          size="sm"
          variant={
            meal.completed
              ? "outline"
              : "default"
          }
          onClick={() =>
            onToggleComplete(meal.id)
          }
        >
          {meal.completed
            ? "Undo"
            : "Log Meal"}
        </Button>
      </div>
    </div>
  );
}