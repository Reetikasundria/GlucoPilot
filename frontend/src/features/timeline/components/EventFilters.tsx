"use client";

import { Filter } from "lucide-react";

import { TimelineFilter } from "../types";

type EventFiltersProps = {
  activeFilter: TimelineFilter;

  onFilterChange: (
    filter: TimelineFilter
  ) => void;
};

const filters: {
  value: TimelineFilter;
  label: string;
}[] = [
  {
    value: "all",
    label: "All events",
  },
  {
    value: "glucose",
    label: "Glucose",
  },
  {
    value: "meal",
    label: "Meals",
  },
  {
    value: "activity",
    label: "Activity",
  },
  {
    value: "stress",
    label: "Stress",
  },
  {
    value: "medication",
    label: "Medication",
  },
  {
    value: "sleep",
    label: "Sleep",
  },
];

export default function EventFilters({
  activeFilter,
  onFilterChange,
}: EventFiltersProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 rounded-2xl border bg-card p-4">
      <div className="mr-2 flex items-center gap-2 text-sm font-medium">
        <Filter className="h-4 w-4 text-emerald-600" />

        Filter
      </div>

      {filters.map((filter) => {
        const isActive =
          activeFilter === filter.value;

        return (
          <button
            key={filter.value}
            type="button"
            onClick={() =>
              onFilterChange(filter.value)
            }
            className={`rounded-lg px-3 py-2 text-sm transition-colors ${
              isActive
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/70"
            }`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}