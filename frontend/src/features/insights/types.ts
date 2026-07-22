export type GlucoseTrendPoint = {
    date: string;
    day: string;
    average: number;
    highest: number;
    lowest: number;
  };
  
  export type TimeInRangeData = {
    inRange: number;
    high: number;
    low: number;
  };
  
  export type PatternType =
    | "meal"
    | "stress"
    | "activity"
    | "sleep"
    | "general";
  
  export type Pattern = {
    id: string;
    type: PatternType;
    title: string;
    description: string;
    impact: "positive" | "negative" | "neutral";
    confidence: number;
  };
  
  export type WeeklyOverviewData = {
    averageGlucose: number;
    previousAverageGlucose: number;
    timeInRange: number;
    previousTimeInRange: number;
    readings: number;
    activeDays: number;
  };