"use client";

import { ReactNode } from "react";

type Props = {
  title: string;
  description?: string;
  icon?: ReactNode;
  selected: boolean;
  onClick: () => void;
};

export default function SelectionCard({
  title,
  description,
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
          ? "border-emerald-500 bg-emerald-50 shadow-md"
          : "border-border hover:border-emerald-300 hover:shadow-sm"
      }`}
    >
      <div className="flex gap-4">
        {icon && (
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-2xl">
            {icon}
          </div>
        )}

        <div>
          <h3 className="font-semibold">{title}</h3>

          {description && (
            <p className="mt-1 text-sm text-muted-foreground">
              {description}
            </p>
          )}
        </div>
      </div>
    </button>
  );
}