"use client";

import {
  FileText,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

import GenerateReportButton from "@/features/doctor/components/GenerateReportButton";
import GlucoseReport from "@/features/doctor/components/GlucoseReport";
import MealReport from "@/features/doctor/components/MealReport";
import ReportOverview from "@/features/doctor/components/ReportOverview";

import { doctorReportData } from "@/features/doctor/mockData";

export default function DoctorPage() {
  return (
    <main className="min-h-screen bg-muted/20 px-4 py-6 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <div className="flex items-center gap-2">
              <Stethoscope className="h-6 w-6" />

              <h1 className="text-2xl font-semibold">
                Doctor Report
              </h1>
            </div>

            <p className="mt-1 text-sm text-muted-foreground">
              A structured summary of your recent health data to help you prepare for a conversation with your healthcare professional.
            </p>
          </div>

          <GenerateReportButton />
        </div>

        <div className="flex items-start gap-3 rounded-2xl border border-blue-200 bg-blue-50 p-4">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />

          <div>
            <p className="font-medium text-blue-900">
              Your health data belongs to you
            </p>

            <p className="mt-1 text-sm text-blue-800">
              This report is designed to help organize your personal health information for discussion with your doctor. It does not replace professional medical advice or diagnosis.
            </p>
          </div>
        </div>

        <ReportOverview
          data={doctorReportData.overview}
        />

        <GlucoseReport
          data={doctorReportData.glucose}
        />

        <MealReport
          meals={doctorReportData.meals}
        />

        <div className="rounded-2xl border bg-card p-6">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5" />

            <h2 className="font-semibold">
              Future report capabilities
            </h2>
          </div>

          <div className="mt-4 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            <p>
              • Export report as PDF
            </p>

            <p>
              • Share report securely with a doctor
            </p>

            <p>
              • Include medication history
            </p>

            <p>
              • Include activity and stress patterns
            </p>

            <p>
              • Compare different time periods
            </p>

            <p>
              • Generate report using the user's complete health timeline
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}