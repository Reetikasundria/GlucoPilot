import {
    ArrowUpRight,
    Utensils,
  } from "lucide-react";
  
  import { MealReportItem } from "../types";
  
  type MealReportProps = {
    meals: MealReportItem[];
  };
  
  export default function MealReport({
    meals,
  }: MealReportProps) {
    return (
      <section className="rounded-2xl border bg-card p-6">
        <div className="flex items-center gap-2">
          <Utensils className="h-5 w-5" />
  
          <h2 className="text-lg font-semibold">
            Meal and glucose observations
          </h2>
        </div>
  
        <p className="mt-1 text-sm text-muted-foreground">
          Foods and meal patterns that were associated with notable glucose changes.
        </p>
  
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-175 text-left text-sm">
            <thead>
              <tr className="border-b text-muted-foreground">
                <th className="pb-3 pr-4 font-medium">
                  Meal pattern
                </th>
  
                <th className="pb-3 pr-4 font-medium">
                  Occurrences
                </th>
  
                <th className="pb-3 pr-4 font-medium">
                  Avg. after meal
                </th>
  
                <th className="pb-3 pr-4 font-medium">
                  Change
                </th>
  
                <th className="pb-3 font-medium">
                  Observation
                </th>
              </tr>
            </thead>
  
            <tbody>
              {meals.map((meal) => (
                <tr
                  key={meal.mealName}
                  className="border-b last:border-0"
                >
                  <td className="py-4 pr-4 font-medium">
                    {meal.mealName}
                  </td>
  
                  <td className="py-4 pr-4 text-muted-foreground">
                    {meal.occurrences}
                  </td>
  
                  <td className="py-4 pr-4">
                    {meal.averageAfterMealGlucose}{" "}
                    <span className="text-muted-foreground">
                      mg/dL
                    </span>
                  </td>
  
                  <td className="py-4 pr-4">
                    <span className="inline-flex items-center gap-1 text-orange-600">
                      <ArrowUpRight className="h-4 w-4" />
  
                      {meal.glucoseChange} mg/dL
                    </span>
                  </td>
  
                  <td className="py-4 text-muted-foreground">
                    {meal.observation}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }