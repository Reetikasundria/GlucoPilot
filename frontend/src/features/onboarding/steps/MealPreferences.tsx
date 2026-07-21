"use client";

import { useFormContext } from "react-hook-form";

import CardContainer from "../components/CardContainer";
import FormGrid from "../components/FormGrid";
import FormInput from "../components/FormInput";
import SectionTitle from "../components/SectionTitle";

const cuisines = [
  "North Indian",
  "South Indian",
  "Punjabi",
  "Gujarati",
  "Bengali",
  "Maharashtrian",
  "Rajasthani",
  "Chinese",
  "Fast Food",
  "Homemade",
];

export default function MealPreferences() {
  const { watch, setValue } = useFormContext();

  const selected = watch("favoriteCuisines") || [];

  const toggleCuisine = (item: string) => {
    if (selected.includes(item)) {
      setValue(
        "favoriteCuisines",
        selected.filter((x: string) => x !== item)
      );
    } else {
      setValue("favoriteCuisines", [...selected, item]);
    }
  };

  return (
    <CardContainer>
      <div className="space-y-8">
        <SectionTitle
          title="Meal Preferences"
          subtitle="Choose all cuisines you regularly eat."
        />

        {/* Cuisine Chips */}

        <div className="flex flex-wrap gap-3">
          {cuisines.map((cuisine) => {
            const active = selected.includes(cuisine);

            return (
              <button
                key={cuisine}
                type="button"
                onClick={() => toggleCuisine(cuisine)}
                className={`rounded-full border px-4 py-2 transition-all ${
                  active
                    ? "border-emerald-500 bg-emerald-500 text-white"
                    : "border-border hover:border-emerald-400"
                }`}
              >
                🍽 {cuisine}
              </button>
            );
          })}
        </div>

        <FormGrid>
          <FormInput
            name="breakfastTime"
            label="Breakfast Time"
            type="time"
          />

          <FormInput
            name="lunchTime"
            label="Lunch Time"
            type="time"
          />

          <FormInput
            name="dinnerTime"
            label="Dinner Time"
            type="time"
          />
        </FormGrid>
      </div>
    </CardContainer>
  );
}