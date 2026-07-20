"use client";

import { ReactNode } from "react";

type Props = {
  title: string;
  subtitle: string;
  icon: ReactNode;
  selected: boolean;
  onClick: () => void;
};

export default function DiabetesCard({
  title,
  subtitle,
  icon,
  selected,
  onClick,
}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-2xl border p-5 text-left transition-all ${
        selected
          ? "border-emerald-500 bg-emerald-50 shadow-lg"
          : "border-border hover:border-emerald-300"
      }`}
    >
      <div className="flex gap-4">
        <div className="text-3xl">
          {icon}
        </div>

        <div>
          <h3 className="font-semibold">
            {title}
          </h3>

          <p className="mt-1 text-sm text-muted-foreground">
            {subtitle}
          </p>
        </div>
      </div>
    </button>
  );
}