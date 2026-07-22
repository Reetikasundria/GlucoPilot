export type TimelineEventType =
  | "glucose"
  | "meal"
  | "activity"
  | "medication"
  | "stress"
  | "sleep"
  | "note";

export type TimelineEvent = {
  id: string;

  type: TimelineEventType;

  title: string;

  description?: string;

  timestamp: string;

  date: string;

  time: string;

  metadata?: {
    glucoseValue?: number;

    mealName?: string;

    activityName?: string;

    medicationName?: string;

    stressLevel?: "low" | "medium" | "high";

    duration?: string;
  };
};

export type TimelineFilter =
  | "all"
  | TimelineEventType;