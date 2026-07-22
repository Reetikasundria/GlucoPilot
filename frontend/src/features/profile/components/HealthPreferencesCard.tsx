"use client";

import { useState } from "react";
import {
  Apple,
  Clock3,
  Dumbbell,
  MapPin,
  Pencil,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function HealthPreferencesCard() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <section className="rounded-2xl border bg-card p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">
            Health Preferences
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Preferences that help personalize recommendations.
          </p>
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsEditing(!isEditing)}
        >
          <Pencil className="mr-2 h-4 w-4" />

          {isEditing ? "Cancel" : "Edit"}
        </Button>
      </div>

      {isEditing ? (
        <div className="mt-6 space-y-4">
          <div className="rounded-xl border border-dashed p-4">
            <p className="text-sm font-medium">
              Personalization preferences
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              Food preferences, daily routine, goals and activity preferences will be editable here.
            </p>
          </div>

          <Button
            onClick={() => setIsEditing(false)}
          >
            Save Changes
          </Button>
        </div>
      ) : (
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <PreferenceItem
            icon={Apple}
            label="Food preference"
            value="Vegetarian"
          />

          <PreferenceItem
            icon={MapPin}
            label="Region"
            value="India"
          />

          <PreferenceItem
            icon={Clock3}
            label="Daily routine"
            value="Student schedule"
          />

          <PreferenceItem
            icon={Dumbbell}
            label="Activity"
            value="Moderate"
          />
        </div>
      )}
    </section>
  );
}

type PreferenceItemProps = {
  icon: React.ElementType;
  label: string;
  value: string;
};

function PreferenceItem({
  icon: Icon,
  label,
  value,
}: PreferenceItemProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="rounded-lg bg-muted p-2">
        <Icon className="h-4 w-4" />
      </div>

      <div>
        <p className="text-xs text-muted-foreground">
          {label}
        </p>

        <p className="mt-1 text-sm font-medium">
          {value}
        </p>
      </div>
    </div>
  );
}