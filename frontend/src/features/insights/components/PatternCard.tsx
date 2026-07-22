import {
    Activity,
    Brain,
    Coffee,
    Moon,
    Sparkles,
  } from "lucide-react";
  
  import { Pattern } from "../types";
  
  type PatternCardProps = {
    pattern: Pattern;
  };
  
  const icons = {
    meal: Coffee,
    stress: Brain,
    activity: Activity,
    sleep: Moon,
    general: Sparkles,
  };
  
  export default function PatternCard({
    pattern,
  }: PatternCardProps) {
    const Icon = icons[pattern.type];
  
    const isPositive =
      pattern.impact === "positive";
  
    return (
      <div className="rounded-2xl border bg-card p-5">
        <div className="flex gap-4">
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
              isPositive
                ? "bg-emerald-100 text-emerald-700"
                : "bg-orange-100 text-orange-700"
            }`}
          >
            <Icon className="h-5 w-5" />
          </div>
  
          <div className="min-w-0 flex-1">
            <div className="flex flex-col justify-between gap-2 sm:flex-row">
              <h3 className="font-medium">
                {pattern.title}
              </h3>
  
              <span className="shrink-0 text-xs text-muted-foreground">
                {pattern.confidence}% confidence
              </span>
            </div>
  
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {pattern.description}
            </p>
  
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-foreground"
                style={{
                  width: `${pattern.confidence}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }