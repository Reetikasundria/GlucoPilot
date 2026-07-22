import MealPlan from "@/features/meal/components/MealPlan";

export default function MealsPage() {
  return (
    <main className="min-h-screen bg-muted/20 px-4 py-6 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <MealPlan />
      </div>
    </main>
  );
}