"use client";

import {
  X,
  Flame,
  Beef,
  Wheat,
  Droplets,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { Meal } from "../types";

type MealDetailsProps = {
  meal: Meal;
  onClose: () => void;
};

export default function MealDetails({
  meal,
  onClose,
}: MealDetailsProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-lg rounded-3xl bg-background p-6 shadow-xl">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm capitalize text-muted-foreground">
              {meal.type}
            </p>

            <h2 className="mt-1 text-2xl font-semibold">
              {meal.name}
            </h2>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <p className="mt-4 text-sm leading-6 text-muted-foreground">
          {meal.description}
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <NutritionItem
            icon={Flame}
            label="Calories"
            value={`${meal.calories}`}
          />

          <NutritionItem
            icon={Wheat}
            label="Carbs"
            value={`${meal.carbohydrates}g`}
          />

          <NutritionItem
            icon={Beef}
            label="Protein"
            value={`${meal.protein}g`}
          />

          <NutritionItem
            icon={Droplets}
            label="Fat"
            value={`${meal.fat}g`}
          />
        </div>

        <div className="mt-6">
          <h3 className="font-semibold">
            Ingredients
          </h3>

          <div className="mt-3 flex flex-wrap gap-2">
            {meal.ingredients.map(
              (ingredient) => (
                <span
                  key={ingredient}
                  className="rounded-full bg-muted px-3 py-1.5 text-sm"
                >
                  {ingredient}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function NutritionItem({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Flame;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-muted p-3">
      <Icon className="h-4 w-4 text-emerald-600" />

      <p className="mt-2 text-xs text-muted-foreground">
        {label}
      </p>

      <p className="mt-1 font-semibold">
        {value}
      </p>
    </div>
  );
}