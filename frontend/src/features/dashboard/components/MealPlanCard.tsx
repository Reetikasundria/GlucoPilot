"use client";

import {
  Coffee,
  Soup,
  Apple,
  UtensilsCrossed,
} from "lucide-react";

const meals = [
  {
    icon: Coffee,
    title: "Breakfast",
    meal: "Oats + Eggs + Milk",
    time: "8:00 AM",
  },
  {
    icon: Soup,
    title: "Lunch",
    meal: "Dal, Rice, Salad",
    time: "1:00 PM",
  },
  {
    icon: Apple,
    title: "Snack",
    meal: "Apple + Almonds",
    time: "5:00 PM",
  },
  {
    icon: UtensilsCrossed,
    title: "Dinner",
    meal: "Paneer + Roti",
    time: "8:30 PM",
  },
];

export default function MealPlanCard() {
  return (
    <div className="rounded-3xl border bg-card p-6 shadow-sm">
      <h2 className="text-xl font-semibold">
        Today's Meal Plan
      </h2>

      <div className="mt-6 space-y-4">
        {meals.map((meal) => {
          const Icon = meal.icon;

          return (
            <div
              key={meal.title}
              className="flex items-center justify-between rounded-xl border p-4"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-emerald-100 p-3">
                  <Icon className="h-5 w-5 text-emerald-600" />
                </div>

                <div>
                  <p className="font-medium">
                    {meal.title}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    {meal.meal}
                  </p>
                </div>
              </div>

              <span className="text-sm text-muted-foreground">
                {meal.time}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}