"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { MealType } from "../types";

type LogMealFormProps = {
  onSubmit: (data: {
    name: string;
    mealType: MealType;
    time: string;
    notes?: string;
  }) => void;

  onCancel: () => void;
};

export default function LogMealForm({
  onSubmit,
  onCancel,
}: LogMealFormProps) {
  const [name, setName] =
    useState("");

  const [mealType, setMealType] =
    useState<MealType>("breakfast");

  const [time, setTime] =
    useState("");

  const [notes, setNotes] =
    useState("");

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!name.trim() || !time) {
      return;
    }

    onSubmit({
      name,
      mealType,
      time,
      notes,
    });
  };

  return (
    <div className="rounded-2xl border bg-card p-5">
      <h3 className="text-lg font-semibold">
        Log a Meal
      </h3>

      <p className="mt-1 text-sm text-muted-foreground">
        Record what you ate to help GlucoPilot learn your personal patterns.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-5 space-y-4"
      >
        <div className="space-y-2">
          <Label htmlFor="meal-name">
            What did you eat?
          </Label>

          <Input
            id="meal-name"
            value={name}
            onChange={(event) =>
              setName(event.target.value)
            }
            placeholder="e.g. Rice and dal"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="meal-type">
            Meal type
          </Label>

          <select
            id="meal-type"
            value={mealType}
            onChange={(event) =>
              setMealType(
                event.target.value as MealType
              )
            }
            className="h-10 w-full rounded-md border bg-background px-3 text-sm"
          >
            <option value="breakfast">
              Breakfast
            </option>

            <option value="lunch">
              Lunch
            </option>

            <option value="snack">
              Snack
            </option>

            <option value="dinner">
              Dinner
            </option>
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="meal-time">
            Time
          </Label>

          <Input
            id="meal-time"
            type="time"
            value={time}
            onChange={(event) =>
              setTime(event.target.value)
            }
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="meal-notes">
            Notes
          </Label>

          <Input
            id="meal-notes"
            value={notes}
            onChange={(event) =>
              setNotes(event.target.value)
            }
            placeholder="Optional"
          />
        </div>

        <div className="flex justify-end gap-3 pt-2">
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
          >
            Cancel
          </Button>

          <Button type="submit">
            Log Meal
          </Button>
        </div>
      </form>
    </div>
  );
}