export type GlucoseReading = {
    id: string;
    value: number;
    unit: "mg/dL";
    timestamp: string;
    date: string;
    time: string;
    context:
      | "fasting"
      | "before_meal"
      | "after_meal"
      | "bedtime"
      | "random";
    source: "manual" | "cgm";
    note?: string;
  };
  
  export type GlucoseTimeRange =
    | "today"
    | "7d"
    | "14d"
    | "30d";
  
  export type GlucoseFilter = {
    timeRange: GlucoseTimeRange;
    context: "all" | GlucoseReading["context"];
  };