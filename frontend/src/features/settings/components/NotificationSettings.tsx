"use client";

import { useState } from "react";

type ToggleProps = {
  title: string;
  description: string;
  enabled: boolean;
  onChange: () => void;
};

export default function NotificationSettings() {
  const [notifications, setNotifications] = useState({
    glucoseAlerts: true,
    mealReminders: true,
    dailyPlan: true,
    weeklyInsights: true,
  });

  const updateSetting = (
    key: keyof typeof notifications
  ) => {
    setNotifications((previous) => ({
      ...previous,
      [key]: !previous[key],
    }));
  };

  return (
    <section className="rounded-2xl border bg-card p-6">
      <div>
        <h2 className="text-lg font-semibold">
          Notifications
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Choose which reminders and updates you want to receive.
        </p>
      </div>

      <div className="mt-6 divide-y">
        <NotificationToggle
          title="Glucose alerts"
          description="Receive important alerts related to glucose readings."
          enabled={notifications.glucoseAlerts}
          onChange={() =>
            updateSetting("glucoseAlerts")
          }
        />

        <NotificationToggle
          title="Meal reminders"
          description="Receive reminders to log meals and follow your planned routine."
          enabled={notifications.mealReminders}
          onChange={() =>
            updateSetting("mealReminders")
          }
        />

        <NotificationToggle
          title="Daily plan"
          description="Receive your personalized daily plan."
          enabled={notifications.dailyPlan}
          onChange={() =>
            updateSetting("dailyPlan")
          }
        />

        <NotificationToggle
          title="Weekly insights"
          description="Receive a summary of your recent patterns."
          enabled={notifications.weeklyInsights}
          onChange={() =>
            updateSetting("weeklyInsights")
          }
        />
      </div>
    </section>
  );
}

function NotificationToggle({
  title,
  description,
  enabled,
  onChange,
}: ToggleProps) {
  return (
    <div className="flex items-center justify-between gap-4 py-5">
      <div>
        <p className="text-sm font-medium">
          {title}
        </p>

        <p className="mt-1 text-sm text-muted-foreground">
          {description}
        </p>
      </div>

      <button
        type="button"
        onClick={onChange}
        aria-label={`Toggle ${title}`}
        className={`relative h-6 w-11 shrink-0 rounded-full transition ${
          enabled
            ? "bg-foreground"
            : "bg-muted"
        }`}
      >
        <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-background transition ${
            enabled
              ? "left-6"
              : "left-1"
          }`}
        />
      </button>
    </div>
  );
}