export type MealType =
  | "breakfast"
  | "lunch"
  | "snack"
  | "dinner";

export type Meal = {
  id: string;
  name: string;
  type: MealType;
  time: string;
  description: string;
  calories: number;
  carbohydrates: number;
  protein: number;
  fat: number;
  ingredients: string[];
  tags: string[];
  completed: boolean;
};

export type LoggedMeal = {
  id: string;
  name: string;
  mealType: MealType;
  time: string;
  notes?: string;
};