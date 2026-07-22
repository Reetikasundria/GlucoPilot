import DashboardHeader from "@/features/dashboard/components/DashboardHeader";
import GlucoseCard from "@/features/dashboard/components/GlucoseCard";
import AIRecommendationCard from "@/features/dashboard/components/AIRecommendationCard";
import MealPlanCard from "@/features/dashboard/components/MealPlanCard";
import ScheduleCard from "@/features/dashboard/components/ScheduleCard";
import QuickActions from "@/features/dashboard/components/QuickActions";
import WeeklyInsights from "@/features/dashboard/components/WeeklyInsights";
import RecentEvents from "@/features/dashboard/components/RecentEvents";
import FloatingAI from "@/features/dashboard/components/FloatingAI";

export default function DashboardPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl space-y-8 px-6 py-10 lg:px-10">
        <DashboardHeader />

        <div className="grid gap-6 lg:grid-cols-2">
          <GlucoseCard />
          <AIRecommendationCard />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <MealPlanCard />
          <ScheduleCard />
        </div>

        <QuickActions />

        <WeeklyInsights />

        <RecentEvents />
      </div>

      <FloatingAI />
    </>
  );
}