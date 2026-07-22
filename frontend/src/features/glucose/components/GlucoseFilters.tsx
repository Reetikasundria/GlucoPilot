"use client";

import { Filter } from "lucide-react";

import { GlucoseFilter } from "../types";

type GlucoseFiltersProps = {
  filters: GlucoseFilter;
  onChange: (filters: GlucoseFilter) => void;
};

export default function GlucoseFilters({
  filters,
  onChange,
}: GlucoseFiltersProps) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border bg-card p-4 sm:flex-row sm:items-center">
      <div className="flex items-center gap-2 text-sm font-medium">
        <Filter className="h-4 w-4 text-emerald-600" />

        Filters
      </div>

      <select
        value={filters.timeRange}
        onChange={(event) =>
          onChange({
            ...filters,
            timeRange:
              event.target.value as GlucoseFilter["timeRange"],
          })
        }
        className="h-10 rounded-lg border bg-background px-3 text-sm"
      >
        <option value="today">
          Today
        </option>

        <option value="7d">
          Last 7 days
        </option>

        <option value="14d">
          Last 14 days
        </option>

        <option value="30d">
          Last 30 days
        </option>
      </select>

      <select
        value={filters.context}
        onChange={(event) =>
          onChange({
            ...filters,
            context:
              event.target.value as GlucoseFilter["context"],
          })
        }
        className="h-10 rounded-lg border bg-background px-3 text-sm"
      >
        <option value="all">
          All readings
        </option>

        <option value="fasting">
          Fasting
        </option>

        <option value="before_meal">
          Before meal
        </option>

        <option value="after_meal">
          After meal
        </option>

        <option value="bedtime">
          Bedtime
        </option>

        <option value="random">
          Random
        </option>
      </select>
    </div>
  );
}