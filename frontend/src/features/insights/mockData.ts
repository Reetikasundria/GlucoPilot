import {
    GlucoseTrendPoint,
    Pattern,
    TimeInRangeData,
    WeeklyOverviewData,
  } from "./types";
  
  export const glucoseTrendData: GlucoseTrendPoint[] = [
    {
      date: "Jul 16",
      day: "Mon",
      average: 126,
      highest: 168,
      lowest: 82,
    },
    {
      date: "Jul 17",
      day: "Tue",
      average: 132,
      highest: 181,
      lowest: 76,
    },
    {
      date: "Jul 18",
      day: "Wed",
      average: 121,
      highest: 159,
      lowest: 80,
    },
    {
      date: "Jul 19",
      day: "Thu",
      average: 138,
      highest: 194,
      lowest: 74,
    },
    {
      date: "Jul 20",
      day: "Fri",
      average: 129,
      highest: 172,
      lowest: 79,
    },
    {
      date: "Jul 21",
      day: "Sat",
      average: 116,
      highest: 151,
      lowest: 85,
    },
    {
      date: "Jul 22",
      day: "Sun",
      average: 124,
      highest: 154,
      lowest: 88,
    },
  ];
  
  export const timeInRangeData: TimeInRangeData = {
    inRange: 72,
    high: 23,
    low: 5,
  };
  
  export const patterns: Pattern[] = [
    {
      id: "pattern-1",
      type: "meal",
      title: "Lunch may be causing glucose spikes",
      description:
        "Your glucose tends to rise more after meals containing a large amount of rice.",
      impact: "negative",
      confidence: 82,
    },
    {
      id: "pattern-2",
      type: "activity",
      title: "Walking helps stabilize your glucose",
      description:
        "On days when you walk after meals, your glucose tends to return to your target range faster.",
      impact: "positive",
      confidence: 76,
    },
    {
      id: "pattern-3",
      type: "stress",
      title: "Stress may be affecting your glucose",
      description:
        "Your glucose was higher on days when you reported high stress during study sessions.",
      impact: "negative",
      confidence: 68,
    },
    {
      id: "pattern-4",
      type: "sleep",
      title: "Your glucose looks more stable after better sleep",
      description:
        "Your average glucose was lower on days following more than 7 hours of sleep.",
      impact: "positive",
      confidence: 71,
    },
  ];
  
  export const weeklyOverview: WeeklyOverviewData = {
    averageGlucose: 126,
    previousAverageGlucose: 134,
    timeInRange: 72,
    previousTimeInRange: 64,
    readings: 98,
    activeDays: 7,
  };