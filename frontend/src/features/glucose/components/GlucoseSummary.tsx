import {
    Activity,
    ArrowDown,
    ArrowUp,
    Target,
  } from "lucide-react";
  
  type GlucoseSummaryProps = {
    average: number;
    highest: number;
    lowest: number;
    inRangePercentage: number;
  };
  
  export default function GlucoseSummary({
    average,
    highest,
    lowest,
    inRangePercentage,
  }: GlucoseSummaryProps) {
    const summaryItems = [
      {
        label: "Average",
        value: `${average} mg/dL`,
        icon: Activity,
      },
      {
        label: "Highest",
        value: `${highest} mg/dL`,
        icon: ArrowUp,
      },
      {
        label: "Lowest",
        value: `${lowest} mg/dL`,
        icon: ArrowDown,
      },
      {
        label: "In Range",
        value: `${inRangePercentage}%`,
        icon: Target,
      },
    ];
  
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {summaryItems.map((item) => {
          const Icon = item.icon;
  
          return (
            <div
              key={item.label}
              className="rounded-2xl border bg-card p-5"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  {item.label}
                </p>
  
                <Icon className="h-5 w-5 text-emerald-600" />
              </div>
  
              <p className="mt-3 text-2xl font-semibold">
                {item.value}
              </p>
            </div>
          );
        })}
      </div>
    );
  }