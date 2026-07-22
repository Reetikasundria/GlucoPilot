"use client";

import { useState } from "react";
import {
  CalendarDays,
  Mail,
  MapPin,
  Pencil,
  UserRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function PersonalInfoCard() {
  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState("Reetika Sundria");

  const [email, setEmail] = useState(
    "reetika@example.com"
  );

  const [location, setLocation] = useState(
    "India"
  );

  return (
    <section className="rounded-2xl border bg-card p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">
            Personal Information
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Basic information about you.
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
          <div className="space-y-2">
            <Label htmlFor="name">
              Full name
            </Label>

            <Input
              id="name"
              value={name}
              onChange={(event) =>
                setName(event.target.value)
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">
              Email
            </Label>

            <Input
              id="email"
              type="email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">
              Location
            </Label>

            <Input
              id="location"
              value={location}
              onChange={(event) =>
                setLocation(event.target.value)
              }
            />
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
            icon={UserRound}
            label="Full name"
            value={name}
          />

          <InfoItem
            icon={Mail}
            label="Email"
            value={email}
          />

          <InfoItem
            icon={MapPin}
            label="Location"
            value={location}
          />

          <InfoItem
            icon={CalendarDays}
            label="Age"
            value="21 years"
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