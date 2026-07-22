import {
    ArrowDown,
    ArrowUp,
    Droplets,
    Minus,
  } from "lucide-react";
  
  import { GlucoseReport as GlucoseReportType } from "../types";
  
  type GlucoseReportProps = {
    data: GlucoseReportType;
  };
  
  export default function GlucoseReport({
    data,
  }: GlucoseReportProps) {
    return (
      <section className="rounded-2xl border bg-card p-6">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Droplets className="h-5 w-5" />
  
              <h2 className="text-lg font-semibold">
                Glucose summary
              </h2>
            </div>
  
            <p className="mt-1 text-sm text-muted-foreground">
              Summary of recorded glucose readings during the report period.
            </p>
          </div>
  
          <span className="rounded-lg bg-muted px-3 py-1.5 text-sm">
            {data.totalReadings} readings
          </span>
        </div>
  
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border p-4">
            <p className="text-sm text-muted-foreground">
              Average
            </p>
  
            <p className="mt-2 text-2xl font-semibold">
              {data.averageGlucose}
  
              <span className="ml-1 text-sm font-normal text-muted-foreground">
                mg/dL
              </span>
            </p>
  
            <div className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
              <Minus className="h-4 w-4" />
  
              Average reading
            </div>
          </div>
  
          <div className="rounded-xl border p-4">
            <p className="text-sm text-muted-foreground">
              Highest
            </p>
  
            <p className="mt-2 text-2xl font-semibold">
              {data.highestGlucose}
  
              <span className="ml-1 text-sm font-normal text-muted-foreground">
                mg/dL
              </span>
            </p>
  
            <div className="mt-2 flex items-center gap-1 text-sm text-orange-600">
              <ArrowUp className="h-4 w-4" />
  
              Highest recorded
            </div>
          </div>
  
          <div className="rounded-xl border p-4">
            <p className="text-sm text-muted-foreground">
              Lowest
            </p>
  
            <p className="mt-2 text-2xl font-semibold">
              {data.lowestGlucose}
  
              <span className="ml-1 text-sm font-normal text-muted-foreground">
                mg/dL
              </span>
            </p>
  
            <div className="mt-2 flex items-center gap-1 text-sm text-blue-600">
              <ArrowDown className="h-4 w-4" />
  
              Lowest recorded
            </div>
          </div>
        </div>
  
        <div className="mt-6 rounded-xl bg-muted/50 p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">
              Time in target range
            </span>
  
            <span className="font-semibold">
              {data.timeInRange}%
            </span>
          </div>
  
          <div className="mt-3 h-3 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-foreground"
              style={{
                width: `${data.timeInRange}%`,
              }}
            />
          </div>
  
          <p className="mt-2 text-xs text-muted-foreground">
            This summary is based on recorded readings and should be interpreted by a healthcare professional in the context of the patient's complete medical history.
          </p>
        </div>
      </section>
    );
  }