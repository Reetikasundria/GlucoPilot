"use client";

import Link from "next/link";

import {
  Activity,
  BarChart3,
  BrainCircuit,
  CalendarDays,
  ClipboardList,
  LayoutDashboard,
  Settings,
  UserRound,
} from "lucide-react";

const navigationItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    label: "AI Coach",
    icon: BrainCircuit,
    href: "/chat",
  },
  {
    label: "Meal Planner",
    icon: CalendarDays,
    href: "/meal",
  },
  {
    label: "Glucose History",
    icon: Activity,
    href: "/glucose",
  },
  {
    label: "Insights",
    icon: BarChart3,
    href: "/insights",
  },
  {
    label: "Timeline",
    icon: Activity,
    href: "/timeline",
  },
  {
    label: "Doctor Reports",
    icon: ClipboardList,
    href: "/doctor",
  },
];

export default function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-64 shrink-0 border-r bg-card lg:flex lg:flex-col">
      <div className="border-b px-6 py-6">
        <Link
          href="/dashboard"
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-xl">
            🩸
          </div>

          <div>
            <h1 className="font-bold">
              GlucoPilot
            </h1>

            <p className="text-xs text-muted-foreground">
              Your AI health companion
            </p>
          </div>
        </Link>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {navigationItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
            >
              <Icon className="h-5 w-5" />

              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="space-y-2 border-t p-4">
        <Link
          href="/profile"
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
        >
          <UserRound className="h-5 w-5" />

          Profile
        </Link>

        <Link
          href="/settings"
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
        >
          <Settings className="h-5 w-5" />

          Settings
        </Link>
      </div>
    </aside>
  );
}