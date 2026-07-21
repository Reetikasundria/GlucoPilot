"use client";

import { CheckCircle2, LoaderCircle } from "lucide-react";

type Props = {
  text: string;
  active: boolean;
  completed: boolean;
};

export default function LoadingStep({
  text,
  active,
  completed,
}: Props) {
  return (
    <div
      className={`flex items-center gap-4 rounded-xl border p-4 transition-all duration-500 ${
        active
          ? "border-emerald-500 bg-emerald-50"
          : completed
          ? "border-emerald-300 bg-emerald-100"
          : "border-border"
      }`}
    >
      {completed ? (
        <CheckCircle2 className="h-6 w-6 text-emerald-600" />
      ) : active ? (
        <LoaderCircle className="h-6 w-6 animate-spin text-emerald-600" />
      ) : (
        <div className="h-6 w-6 rounded-full border-2 border-muted" />
      )}

      <span
        className={`text-sm font-medium ${
          completed
            ? "text-emerald-700"
            : active
            ? "text-foreground"
            : "text-muted-foreground"
        }`}
      >
        {text}
      </span>
    </div>
  );
}