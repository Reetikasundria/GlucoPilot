"use client";

import { useState } from "react";
import {
  Mail,
  Lock,
  UserRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AccountSettings() {
  const [email, setEmail] = useState(
    "reetika@example.com"
  );

  const [name, setName] = useState(
    "Reetika Sundria"
  );

  return (
    <section className="rounded-2xl border bg-card p-6">
      <div>
        <h2 className="text-lg font-semibold">
          Account
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Manage your account credentials and basic account information.
        </p>
      </div>

      <div className="mt-6 space-y-5">
        <div className="space-y-2">
          <Label htmlFor="account-name">
            Name
          </Label>

          <div className="relative">
            <UserRound className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              id="account-name"
              value={name}
              onChange={(event) =>
                setName(event.target.value)
              }
              className="pl-9"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="account-email">
            Email
          </Label>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              id="account-email"
              type="email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              className="pl-9"
            />
          </div>
        </div>

        <Button>
          Save Account Changes
        </Button>

        <div className="border-t pt-5">
          <Button variant="outline">
            <Lock className="mr-2 h-4 w-4" />

            Change Password
          </Button>
        </div>
      </div>
    </section>
  );
}