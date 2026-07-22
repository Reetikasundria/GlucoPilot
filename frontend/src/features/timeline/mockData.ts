import { TimelineEvent } from "./types";

export const timelineEvents: TimelineEvent[] = [
  {
    id: "event-1",
    type: "sleep",
    title: "Woke up",
    description:
      "Started your day after a good night's sleep.",
    timestamp: "2026-07-22T07:30:00",
    date: "Today",
    time: "7:30 AM",
    metadata: {
      duration: "7h 20m",
    },
  },

  {
    id: "event-2",
    type: "glucose",
    title: "Fasting glucose reading",
    description:
      "Your glucose was within your target range.",
    timestamp: "2026-07-22T08:00:00",
    date: "Today",
    time: "8:00 AM",
    metadata: {
      glucoseValue: 108,
    },
  },

  {
    id: "event-3",
    type: "meal",
    title: "Breakfast",
    description:
      "Oats, banana and almonds.",
    timestamp: "2026-07-22T08:30:00",
    date: "Today",
    time: "8:30 AM",
    metadata: {
      mealName:
        "Oats, Banana & Almonds",
    },
  },

  {
    id: "event-4",
    type: "glucose",
    title: "After-meal glucose",
    description:
      "Glucose increased after breakfast.",
    timestamp: "2026-07-22T10:00:00",
    date: "Today",
    time: "10:00 AM",
    metadata: {
      glucoseValue: 132,
    },
  },

  {
    id: "event-5",
    type: "activity",
    title: "Study session",
    description:
      "Focused study session for placement preparation.",
    timestamp: "2026-07-22T10:30:00",
    date: "Today",
    time: "10:30 AM",
    metadata: {
      activityName:
        "DSA & Interview Preparation",
      duration: "2 hours",
    },
  },

  {
    id: "event-6",
    type: "stress",
    title: "Stress reported",
    description:
      "You reported feeling slightly stressed.",
    timestamp: "2026-07-22T12:00:00",
    date: "Today",
    time: "12:00 PM",
    metadata: {
      stressLevel: "medium",
    },
  },

  {
    id: "event-7",
    type: "glucose",
    title: "Before lunch glucose",
    description:
      "Your glucose was recorded before lunch.",
    timestamp: "2026-07-22T01:00:00",
    date: "Today",
    time: "1:00 PM",
    metadata: {
      glucoseValue: 118,
    },
  },

  {
    id: "event-8",
    type: "meal",
    title: "Lunch",
    description:
      "Rice, dal and vegetables.",
    timestamp: "2026-07-22T01:30:00",
    date: "Today",
    time: "1:30 PM",
    metadata: {
      mealName:
        "Rice, Dal & Vegetables",
    },
  },

  {
    id: "event-9",
    type: "glucose",
    title: "After-meal glucose spike",
    description:
      "Your glucose increased significantly after lunch.",
    timestamp: "2026-07-22T03:00:00",
    date: "Today",
    time: "3:00 PM",
    metadata: {
      glucoseValue: 154,
    },
  },

  {
    id: "event-10",
    type: "activity",
    title: "Walk",
    description:
      "Light walking activity.",
    timestamp: "2026-07-22T04:00:00",
    date: "Today",
    time: "4:00 PM",
    metadata: {
      activityName: "Walking",
      duration: "20 minutes",
    },
  },
];