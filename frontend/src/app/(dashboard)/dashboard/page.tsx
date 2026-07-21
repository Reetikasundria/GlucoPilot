"use client";

import DashboardHeader from "@/features/dashboard/components/DashboardHeader";
import GlucoseCard from "@/features/dashboard/components/GlucoseCard";
import AIRecommendationCard from "@/features/dashboard/components/AIRecommendationCard";
import MealPlanCard from "@/features/dashboard/components/MealPlanCard";
import ScheduleCard from "@/features/dashboard/components/ScheduleCard";

export default function DashboardPage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-6 py-10">
      <div className="space-y-8">
        <DashboardHeader />

        <div className="grid gap-6 lg:grid-cols-2">
          <GlucoseCard />
          <AIRecommendationCard />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <MealPlanCard />
          <ScheduleCard />
        </div>
      </div>
    </main>
  );
}