"use client";

import { AlertTriangle, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function DangerZone() {
  return (
    <section className="rounded-2xl border border-red-200 bg-card p-6">
      <div className="flex gap-3">
        <AlertTriangle className="mt-0.5 h-5 w-5 text-red-600" />

        <div>
          <h2 className="font-semibold text-red-700">
            Danger Zone
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            These actions can permanently affect your account and health data.
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col justify-between gap-4 rounded-xl border border-red-100 p-4 sm:flex-row sm:items-center">
        <div>
          <p className="font-medium">
            Delete account
          </p>

          <p className="mt-1 text-sm text-muted-foreground">
            Permanently delete your account and associated personal health data.
          </p>
        </div>

        <Button
          variant="destructive"
          onClick={() => {
            alert(
              "Account deletion will be connected to the backend later."
            );
          }}
        >
          <Trash2 className="mr-2 h-4 w-4" />

          Delete Account
        </Button>
      </div>
    </section>
  );
}