"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { GlucoseTrendPoint } from "../types";

type GlucoseTrendsProps = {
  data: GlucoseTrendPoint[];
};

export default function GlucoseTrends({
  data,
}: GlucoseTrendsProps) {
  return (
    <div className="rounded-2xl border bg-card p-6">
      <div>
        <h2 className="text-lg font-semibold">
          Glucose trends
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Your glucose pattern over the last 7 days.
        </p>
      </div>

      <div className="mt-6 h-80 w-full">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <LineChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              domain={[60, 220]}
              axisLine={false}
              tickLine={false}
              width={40}
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="average"
              name="Average"
              strokeWidth={3}
              dot
            />

            <Line
              type="monotone"
              dataKey="highest"
              name="Highest"
              strokeWidth={1.5}
              strokeDasharray="5 5"
              dot={false}
            />

            <Line
              type="monotone"
              dataKey="lowest"
              name="Lowest"
              strokeWidth={1.5}
              strokeDasharray="5 5"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex flex-wrap gap-5 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-foreground" />

          Average
        </div>

        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground" />

          Highest
        </div>

        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground" />

          Lowest
        </div>
      </div>
    </div>
  );
}