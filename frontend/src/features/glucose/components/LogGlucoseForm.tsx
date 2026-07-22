"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { GlucoseReading } from "../types";

type LogGlucoseFormProps = {
  onSubmit: (data: {
    value: number;
    context: GlucoseReading["context"];
    time: string;
    note?: string;
  }) => void;

  onCancel: () => void;
};

export default function LogGlucoseForm({
  onSubmit,
  onCancel,
}: LogGlucoseFormProps) {
  const [value, setValue] =
    useState("");

  const [context, setContext] =
    useState<GlucoseReading["context"]>(
      "random"
    );

  const [time, setTime] =
    useState("");

  const [note, setNote] =
    useState("");

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const glucoseValue =
      Number(value);

    if (
      !glucoseValue ||
      glucoseValue <= 0 ||
      !time
    ) {
      return;
    }

    onSubmit({
      value: glucoseValue,
      context,
      time,
      note,
    });
  };

  return (
    <div className="rounded-2xl border bg-card p-5">
      <h3 className="text-lg font-semibold">
        Log Glucose Reading
      </h3>

      <p className="mt-1 text-sm text-muted-foreground">
        Add a reading to help build your personal glucose history.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-5 space-y-4"
      >
        <div className="space-y-2">
          <Label htmlFor="glucose-value">
            Glucose level
          </Label>

          <div className="flex gap-2">
            <Input
              id="glucose-value"
              type="number"
              value={value}
              onChange={(event) =>
                setValue(event.target.value)
              }
              placeholder="e.g. 120"
            />

            <div className="flex items-center rounded-md border bg-muted px-3 text-sm text-muted-foreground">
              mg/dL
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="glucose-context">
            When was this reading taken?
          </Label>

          <select
            id="glucose-context"
            value={context}
            onChange={(event) =>
              setContext(
                event.target.value as GlucoseReading["context"]
              )
            }
            className="h-10 w-full rounded-md border bg-background px-3 text-sm"
          >
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

        <div className="space-y-2">
          <Label htmlFor="glucose-time">
            Time
          </Label>

          <Input
            id="glucose-time"
            type="time"
            value={time}
            onChange={(event) =>
              setTime(event.target.value)
            }
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="glucose-note">
            Note
          </Label>

          <Input
            id="glucose-note"
            value={note}
            onChange={(event) =>
              setNote(event.target.value)
            }
            placeholder="e.g. After breakfast"
          />
        </div>

        <div className="flex justify-end gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
          >
            Cancel
          </Button>

          <Button type="submit">
            Save Reading
          </Button>
        </div>
      </form>
    </div>
  );
}