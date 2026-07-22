"use client";

import { useState } from "react";
import {
  Activity,
  CalendarDays,
  Pencil,
  Syringe,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function DiabetesInfoCard() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <section className="rounded-2xl border bg-card p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">
            Diabetes Information
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Information used to personalize your GlucoPilot experience.
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
              Diabetes information editing
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              Detailed editing will be connected to the onboarding profile and backend database.
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
          <InfoItem
            icon={Activity}
            label="Diabetes type"
            value="Type 1"
          />

          <InfoItem
            icon={CalendarDays}
            label="Diagnosed"
            value="2018"
          />

          <InfoItem
            icon={Syringe}
            label="Insulin"
            value="Using insulin"
          />

          <InfoItem
            icon={Activity}
            label="Glucose monitoring"
            value="CGM connected"
          />
        </div>
      )}
    </section>
  );
}

type InfoItemProps = {
  icon: React.ElementType;
  label: string;
  value: string;
};

function InfoItem({
  icon: Icon,
  label,
  value,
}: InfoItemProps) {
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