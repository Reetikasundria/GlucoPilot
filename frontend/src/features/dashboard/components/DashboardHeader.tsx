"use client";

import { useEffect, useState } from "react";

export default function DashboardHeader() {
  const [user, setUser] = useState("User");

  useEffect(() => {
    const storedUser = localStorage.getItem("glucopilot_user");

    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <header className="flex items-center justify-between">
      <div>
        <p className="text-sm text-muted-foreground">
          Good morning
        </p>

        <h1 className="text-3xl font-bold">
          {user} 👋
        </h1>

        <p className="mt-2 text-muted-foreground">
          Here's your personalized health overview for today.
        </p>
      </div>

      <div className="hidden rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700 sm:block">
        AI Monitoring Active
      </div>
    </header>
  );
}