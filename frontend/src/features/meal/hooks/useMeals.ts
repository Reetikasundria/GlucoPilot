"use client";

import { useState } from "react";

import { initialMeals } from "../mockData";
import { Meal, MealType } from "../types";

export default function useMeals() {
  const [meals, setMeals] =
    useState<Meal[]>(initialMeals);

  const [selectedMeal, setSelectedMeal] =
    useState<Meal | null>(null);

  const [isLogFormOpen, setIsLogFormOpen] =
    useState(false);

  const toggleMealCompleted = (
    mealId: string
  ) => {
    setMeals((previousMeals) =>
      previousMeals.map((meal) =>
        meal.id === mealId
          ? {
              ...meal,
              completed: !meal.completed,
            }
          : meal
      )
    );
  };

  const logMeal = (data: {
    name: string;
    mealType: MealType;
    time: string;
    notes?: string;
  }) => {
    console.log("Meal logged:", data);

    setIsLogFormOpen(false);
  };

  return {
    meals,
    selectedMeal,
    isLogFormOpen,

    setSelectedMeal,
    setIsLogFormOpen,

    toggleMealCompleted,
    logMeal,
  };
}