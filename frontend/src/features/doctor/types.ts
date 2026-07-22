export type GlucoseReport = {
    averageGlucose: number;
  
    highestGlucose: number;
  
    lowestGlucose: number;
  
    timeInRange: number;
  
    highReadings: number;
  
    lowReadings: number;
  
    totalReadings: number;
  };
  
  export type MealReportItem = {
    mealName: string;
  
    occurrences: number;
  
    averageAfterMealGlucose: number;
  
    glucoseChange: number;
  
    observation: string;
  };
  
  export type ReportOverviewData = {
    reportPeriod: string;
  
    generatedAt: string;
  
    totalEvents: number;
  
    totalMeals: number;
  
    totalGlucoseReadings: number;
  
    keyObservations: string[];
  
    questionsToDiscuss: string[];
  };
  
  export type DoctorReportData = {
    overview: ReportOverviewData;
  
    glucose: GlucoseReport;
  
    meals: MealReportItem[];
  };