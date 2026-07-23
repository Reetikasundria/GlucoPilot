"use client";

import {
  useCallback,
  useEffect,
  useState,
} from "react";

import { mealService } from "@/services/meal.service";

import type {
  Meal,
  MealType,
} from "../types";

export default function useMeals() {
  const [meals, setMeals] =
    useState<Meal[]>([]);

  const [selectedMeal, setSelectedMeal] =
    useState<Meal | null>(null);

  const [isLogFormOpen, setIsLogFormOpen] =
    useState(false);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<Error | null>(null);

  const loadMeals = useCallback(
    async () => {
      try {
        setLoading(true);
        setError(null);

        const data =
          await mealService.getMeals();

        setMeals(data);
      } catch (error) {
        const normalizedError =
          error instanceof Error
            ? error
            : new Error(
                "Failed to load meals"
              );

        setError(normalizedError);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    loadMeals();
  }, [loadMeals]);

  const toggleMealCompleted = async (
    mealId: string
  ) => {
    const meal = meals.find(
      (item) => item.id === mealId
    );

    if (!meal) return;

    const updatedMeal =
      await mealService.updateMeal(
        mealId,
        {
          completed:
            !meal.completed,
        }
      );

    setMeals((previousMeals) =>
      previousMeals.map((item) =>
        item.id === mealId
          ? updatedMeal
          : item
      )
    );
  };

  const logMeal = async (data: {
    name: string;
    mealType: MealType;
    time: string;
    notes?: string;
  }) => {
    const newMeal =
      await mealService.createMeal(
        data
      );

    setMeals((previousMeals) => [
      newMeal,
      ...previousMeals,
    ]);

    setIsLogFormOpen(false);
  };

  return {
    meals,
    selectedMeal,
    isLogFormOpen,

    loading,
    error,

    setSelectedMeal,
    setIsLogFormOpen,

    toggleMealCompleted,
    logMeal,

    reloadMeals: loadMeals,
  };
}