import { TimeInRangeData } from "../types";

type TimeInRangeProps = {
  data: TimeInRangeData;
};

export default function TimeInRange({
  data,
}: TimeInRangeProps) {
  return (
    <div className="rounded-2xl border bg-card p-6">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-lg font-semibold">
            Time in range
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            How your glucose was distributed this week.
          </p>
        </div>

        <span className="text-2xl font-semibold">
          {data.inRange}%
        </span>
      </div>

      <div className="mt-6 h-4 overflow-hidden rounded-full bg-muted">
        <div className="flex h-full">
          <div
            className="bg-emerald-500"
            style={{
              width: `${data.inRange}%`,
            }}
          />

          <div
            className="bg-orange-400"
            style={{
              width: `${data.high}%`,
            }}
          />

          <div
            className="bg-blue-400"
            style={{
              width: `${data.low}%`,
            }}
          />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />

            <span className="text-sm text-muted-foreground">
              In range
            </span>
          </div>

          <p className="mt-1 text-lg font-semibold">
            {data.inRange}%
          </p>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-orange-400" />

            <span className="text-sm text-muted-foreground">
              High
            </span>
          </div>

          <p className="mt-1 text-lg font-semibold">
            {data.high}%
          </p>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />

            <span className="text-sm text-muted-foreground">
              Low
            </span>
          </div>

          <p className="mt-1 text-lg font-semibold">
            {data.low}%
          </p>
        </div>
      </div>
    </div>
  );
}