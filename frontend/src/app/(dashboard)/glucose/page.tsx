"use client";

import {
  Plus,
  Activity,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import GlucoseChart from "@/features/glucose/components/GlucoseChart";
import GlucoseFilters from "@/features/glucose/components/GlucoseFilters";
import GlucoseSummary from "@/features/glucose/components/GlucoseSummary";
import LogGlucoseForm from "@/features/glucose/components/LogGlucoseForm";

import useGlucose from "@/features/glucose/hooks/useGlucose";

export default function GlucosePage() {
  const {
    filteredReadings,
    filters,

    averageGlucose,
    highestGlucose,
    lowestGlucose,
    inRangePercentage,

    isLogFormOpen,

    setFilters,
    setIsLogFormOpen,

    addReading,
  } = useGlucose();

  return (
    <main className="min-h-screen bg-muted/20 px-4 py-6 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <div className="flex items-center gap-2">
              <Activity className="h-6 w-6 text-emerald-600" />

              <h1 className="text-2xl font-semibold">
                Glucose Tracking
              </h1>
            </div>

            <p className="mt-1 text-sm text-muted-foreground">
              Understand your glucose patterns and how your daily choices affect them.
            </p>
          </div>

          <Button
            onClick={() =>
              setIsLogFormOpen(
                !isLogFormOpen
              )
            }
          >
            <Plus className="mr-2 h-4 w-4" />

            Log Reading
          </Button>
        </div>

        <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
          <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />

          <div>
            <p className="font-medium text-emerald-900">
              Your glucose history is the foundation of GlucoPilot
            </p>

            <p className="mt-1 text-sm text-emerald-800">
              Over time, your glucose readings will be connected with meals, activities, stress, sleep, and other events to understand your personal patterns.
            </p>
          </div>
        </div>

        {isLogFormOpen && (
          <LogGlucoseForm
            onSubmit={addReading}
            onCancel={() =>
              setIsLogFormOpen(false)
            }
          />
        )}

        <GlucoseFilters
          filters={filters}
          onChange={setFilters}
        />

        <GlucoseSummary
          average={averageGlucose}
          highest={highestGlucose}
          lowest={lowestGlucose}
          inRangePercentage={
            inRangePercentage
          }
        />

        <GlucoseChart
          readings={filteredReadings}
        />
      </div>
    </main>
  );
}