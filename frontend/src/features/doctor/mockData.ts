import { DoctorReportData } from "./types";

export const doctorReportData: DoctorReportData = {
  overview: {
    reportPeriod: "July 16 – July 22, 2026",

    generatedAt: "July 22, 2026, 8:30 PM",

    totalEvents: 42,

    totalMeals: 21,

    totalGlucoseReadings: 98,

    keyObservations: [
      "Average glucose was lower compared with the previous week.",
      "Glucose was generally more stable on days with post-meal walking.",
      "Higher glucose readings were observed after some high-carbohydrate meals.",
      "Some higher readings occurred during periods of increased study-related stress.",
    ],

    questionsToDiscuss: [
      "Discuss recurring glucose increases after specific meals.",
      "Review the pattern of glucose fluctuations during stressful periods.",
      "Discuss whether current monitoring and treatment routines should be reviewed.",
    ],
  },

  glucose: {
    averageGlucose: 126,

    highestGlucose: 194,

    lowestGlucose: 74,

    timeInRange: 72,

    highReadings: 23,

    lowReadings: 5,

    totalReadings: 98,
  },

  meals: [
    {
      mealName: "Rice-based meals",

      occurrences: 7,

      averageAfterMealGlucose: 168,

      glucoseChange: 52,

      observation:
        "Glucose tended to rise more after meals containing larger portions of rice.",
    },

    {
      mealName: "Oats, fruit & nuts",

      occurrences: 5,

      averageAfterMealGlucose: 132,

      glucoseChange: 24,

      observation:
        "Glucose appeared relatively stable after these breakfasts.",
    },

    {
      mealName: "Dal & vegetables",

      occurrences: 6,

      averageAfterMealGlucose: 138,

      glucoseChange: 28,

      observation:
        "Moderate glucose increase was observed after these meals.",
    },

    {
      mealName: "Snacks",

      occurrences: 3,

      averageAfterMealGlucose: 151,

      glucoseChange: 35,

      observation:
        "Some snack entries were followed by a noticeable glucose increase.",
    },
  ],
};