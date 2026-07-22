"use client";

import { useMemo, useState } from "react";

import {
  CalendarDays,
  Plus,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import FoodSearch from "./FoodSearch";
import LogMealForm from "./LogMealForm";
import MealCard from "./MealCard";
import MealDetails from "./MealDetails";

import useMeals from "../hooks/useMeals";

export default function MealPlan() {
  const {
    meals,
    selectedMeal,
    isLogFormOpen,

    setSelectedMeal,
    setIsLogFormOpen,

    toggleMealCompleted,
    logMeal,
  } = useMeals();

  const [searchQuery, setSearchQuery] =
    useState("");

  const filteredMeals = useMemo(() => {
    const query =
      searchQuery.toLowerCase().trim();

    if (!query) {
      return meals;
    }

    return meals.filter((meal) => {
      return (
        meal.name
          .toLowerCase()
          .includes(query) ||
        meal.ingredients.some(
          (ingredient) =>
            ingredient
              .toLowerCase()
              .includes(query)
        )
      );
    });
  }, [meals, searchQuery]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <div className="flex items-center gap-2">
            <CalendarDays className="h-5 w-5 text-emerald-600" />

            <h1 className="text-2xl font-semibold">
              Today's Meal Plan
            </h1>
          </div>

          <p className="mt-1 text-sm text-muted-foreground">
            A plan designed around your personal health patterns.
          </p>
        </div>

        <Button
          onClick={() =>
            setIsLogFormOpen(
              !isLogFormOpen
            )
          }
        >
          <Plus className="mr-2 h-4 w-4" />
          Log Meal
        </Button>
      </div>

      <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
        <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />

        <div>
          <p className="font-medium text-emerald-900">
            Your plan will become more personal over time
          </p>

          <p className="mt-1 text-sm text-emerald-800">
            GlucoPilot will learn how your glucose responds to different meals and use those patterns to improve future recommendations.
          </p>
        </div>
      </div>

      {isLogFormOpen && (
        <LogMealForm
          onSubmit={logMeal}
          onCancel={() =>
            setIsLogFormOpen(false)
          }
        />
      )}

      <FoodSearch
        value={searchQuery}
        onChange={setSearchQuery}
      />

      <div className="space-y-4">
        {filteredMeals.map((meal) => (
          <MealCard
            key={meal.id}
            meal={meal}
            onSelect={setSelectedMeal}
            onToggleComplete={
              toggleMealCompleted
            }
          />
        ))}

        {filteredMeals.length === 0 && (
          <div className="rounded-2xl border border-dashed p-10 text-center">
            <p className="font-medium">
              No meals found
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              Try searching for another meal or ingredient.
            </p>
          </div>
        )}
      </div>

      {selectedMeal && (
        <MealDetails
          meal={selectedMeal}
          onClose={() =>
            setSelectedMeal(null)
          }
        />
      )}
    </div>
  );
}