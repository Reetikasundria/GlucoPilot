"use client";

import { Bell } from "lucide-react";

export default function DashboardHeader() {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 17) greeting = "Good Afternoon";

  let user = "User";

  if (typeof window !== "undefined") {
    const raw = localStorage.getItem("glucopilot-user");

    if (raw) {
      const data = JSON.parse(raw);
      user = data.fullName || "User";
    }
  }

  return (
    <header className="flex items-center justify-between">
      <div>
        <p className="text-muted-foreground text-sm">
          {greeting}
        </p>

        <h1 className="text-3xl font-bold">
          {user} 👋
        </h1>

        <p className="mt-2 text-sm text-emerald-600">
          Let's keep your glucose stable today.
        </p>
      </div>

      <button className="rounded-full border p-3 hover:bg-muted transition">
        <Bell className="h-5 w-5" />
      </button>
    </header>
  );
}