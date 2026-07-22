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

import { GlucoseReading } from "../types";

type GlucoseChartProps = {
  readings: GlucoseReading[];
};

export default function GlucoseChart({
  readings,
}: GlucoseChartProps) {
  const chartData = [...readings]
    .reverse()
    .map((reading) => ({
      time: reading.time,
      glucose: reading.value,
    }));

  return (
    <div className="rounded-2xl border bg-card p-5">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">
          Glucose Trend
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Your recorded glucose readings over time.
        </p>
      </div>

      <div className="h-80 w-full">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <LineChart
            data={chartData}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 10,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="time"
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              domain={[50, 250]}
              tickLine={false}
              axisLine={false}
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="glucose"
              stroke="currentColor"
              strokeWidth={3}
              dot={{
                r: 4,
              }}
              className="text-emerald-500"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
        <span>
          Target range: 70–180 mg/dL
        </span>

        <span>
          Data source: Manual entries
        </span>
      </div>
    </div>
  );
}