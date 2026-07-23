import { initialMeals } from "@/features/meal/mockData";

import type {
  Meal,
  MealType,
} from "@/features/meal/types";

export type CreateMealPayload = {
  name: string;
  mealType: MealType;
  time: string;
  notes?: string;
};

export type UpdateMealPayload = Partial<{
  name: string;
  mealType: MealType;
  time: string;
  notes: string;
  completed: boolean;
}>;

const delay = (milliseconds: number) =>
  new Promise((resolve) =>
    setTimeout(resolve, milliseconds)
  );

let meals: Meal[] = [...initialMeals];

export const mealService = {
  async getMeals(): Promise<Meal[]> {
    await delay(300);

    return [...meals];
  },

  async createMeal(
    payload: CreateMealPayload
  ): Promise<Meal> {
    await delay(300);

    const newMeal: Meal = {
      id: crypto.randomUUID(),
      name: payload.name,
      type: payload.mealType,
      time: payload.time,
      description:
        payload.notes ||
        "Meal logged by the user.",
      calories: 0,
      carbohydrates: 0,
      protein: 0,
      fat: 0,
      ingredients: [],
      tags: [],
      completed: true,
    };

    meals = [newMeal, ...meals];

    return newMeal;
  },

  async updateMeal(
    id: string,
    payload: UpdateMealPayload
  ): Promise<Meal> {
    await delay(200);

    const mealIndex = meals.findIndex(
      (meal) => meal.id === id
    );

    if (mealIndex === -1) {
      throw new Error("Meal not found");
    }

    const currentMeal = meals[mealIndex];

    const updatedMeal: Meal = {
      ...currentMeal,
      ...(payload.name !== undefined && {
        name: payload.name,
      }),
      ...(payload.mealType !== undefined && {
        type: payload.mealType,
      }),
      ...(payload.time !== undefined && {
        time: payload.time,
      }),
      ...(payload.notes !== undefined && {
        description: payload.notes,
      }),
      ...(payload.completed !== undefined && {
        completed: payload.completed,
      }),
    };

    meals[mealIndex] = updatedMeal;

    return updatedMeal;
  },

  async deleteMeal(
    id: string
  ): Promise<void> {
    await delay(200);

    meals = meals.filter(
      (meal) => meal.id !== id
    );
  },
};