import { Meal } from "./types";

export const initialMeals: Meal[] = [
  {
    id: "breakfast-1",
    name: "Vegetable Besan Chilla",
    type: "breakfast",
    time: "8:00 AM",
    description:
      "A protein-rich breakfast with vegetables and minimal refined carbohydrates.",
    calories: 280,
    carbohydrates: 32,
    protein: 16,
    fat: 9,
    ingredients: [
      "Besan",
      "Onion",
      "Tomato",
      "Capsicum",
      "Coriander",
    ],
    tags: ["High Protein", "Low GI", "Vegetarian"],
    completed: false,
  },

  {
    id: "lunch-1",
    name: "Dal, Roti & Mixed Vegetables",
    type: "lunch",
    time: "1:00 PM",
    description:
      "A balanced meal combining protein, complex carbohydrates and vegetables.",
    calories: 450,
    carbohydrates: 58,
    protein: 20,
    fat: 12,
    ingredients: [
      "Dal",
      "Multigrain Roti",
      "Mixed Vegetables",
      "Salad",
    ],
    tags: ["Balanced", "High Fiber", "Vegetarian"],
    completed: false,
  },

  {
    id: "snack-1",
    name: "Apple with Roasted Chana",
    type: "snack",
    time: "4:30 PM",
    description:
      "A balanced snack combining natural carbohydrates with protein and fiber.",
    calories: 180,
    carbohydrates: 28,
    protein: 8,
    fat: 4,
    ingredients: [
      "Apple",
      "Roasted Chana",
    ],
    tags: ["High Fiber", "Quick Snack"],
    completed: false,
  },

  {
    id: "dinner-1",
    name: "Paneer & Vegetable Bowl",
    type: "dinner",
    time: "8:00 PM",
    description:
      "A protein-focused dinner with vegetables to support a balanced evening meal.",
    calories: 380,
    carbohydrates: 25,
    protein: 26,
    fat: 18,
    ingredients: [
      "Paneer",
      "Broccoli",
      "Capsicum",
      "Cucumber",
    ],
    tags: ["High Protein", "Low Carb", "Vegetarian"],
    completed: false,
  },
];