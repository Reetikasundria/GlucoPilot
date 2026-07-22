import {
    Activity,
    CalendarDays,
    ClipboardList,
    Droplets,
    Utensils,
  } from "lucide-react";
  
  import { ReportOverviewData } from "../types";
  
  type ReportOverviewProps = {
    data: ReportOverviewData;
  };
  
  export default function ReportOverview({
    data,
  }: ReportOverviewProps) {
    return (
      <section className="space-y-5">
        <div className="rounded-2xl border bg-card p-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
            <div>
              <h2 className="text-lg font-semibold">
                Report overview
              </h2>
  
              <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                <CalendarDays className="h-4 w-4" />
  
                {data.reportPeriod}
              </div>
            </div>
  
            <span className="text-sm text-muted-foreground">
              Generated {data.generatedAt}
            </span>
          </div>
  
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-muted/60 p-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Activity className="h-4 w-4" />
  
                Total events
              </div>
  
              <p className="mt-2 text-2xl font-semibold">
                {data.totalEvents}
              </p>
            </div>
  
            <div className="rounded-xl bg-muted/60 p-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Droplets className="h-4 w-4" />
  
                Glucose readings
              </div>
  
              <p className="mt-2 text-2xl font-semibold">
                {data.totalGlucoseReadings}
              </p>
            </div>
  
            <div className="rounded-xl bg-muted/60 p-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Utensils className="h-4 w-4" />
  
                Meals logged
              </div>
  
              <p className="mt-2 text-2xl font-semibold">
                {data.totalMeals}
              </p>
            </div>
          </div>
        </div>
  
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border bg-card p-6">
            <div className="flex items-center gap-2">
              <ClipboardList className="h-5 w-5" />
  
              <h2 className="font-semibold">
                Key observations
              </h2>
            </div>
  
            <ul className="mt-4 space-y-3">
              {data.keyObservations.map(
                (observation, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-sm leading-6 text-muted-foreground"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
  
                    {observation}
                  </li>
                )
              )}
            </ul>
          </div>
  
          <div className="rounded-2xl border bg-card p-6">
            <h2 className="font-semibold">
              Topics to discuss with your doctor
            </h2>
  
            <ul className="mt-4 space-y-3">
              {data.questionsToDiscuss.map(
                (question, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-sm leading-6 text-muted-foreground"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium text-foreground">
                      {index + 1}
                    </span>
  
                    {question}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </section>
    );
  }