"use client";

import { useState } from "react";
import {
  Database,
  Eye,
  ShieldCheck,
} from "lucide-react";

export default function PrivacySettings() {
  const [shareWithDoctor, setShareWithDoctor] =
    useState(false);

  const [analytics, setAnalytics] =
    useState(true);

  return (
    <section className="rounded-2xl border bg-card p-6">
      <div>
        <h2 className="text-lg font-semibold">
          Privacy & Data
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Control how your health information is used within GlucoPilot.
        </p>
      </div>

      <div className="mt-6 space-y-4">
        <PrivacyItem
          icon={ShieldCheck}
          title="Your health data is private"
          description="Your personal health history belongs to your account and should not be shared with other users."
        />

        <PrivacyItem
          icon={Database}
          title="Personalized AI memory"
          description="Your recommendations are based on your own health history and preferences."
        />

        <PrivacyToggle
          icon={Eye}
          title="Share data with doctor"
          description="Allow a connected healthcare professional to access selected health reports."
          enabled={shareWithDoctor}
          onChange={() =>
            setShareWithDoctor(!shareWithDoctor)
          }
        />

        <PrivacyToggle
          icon={Database}
          title="Anonymous product analytics"
          description="Allow anonymous usage data to help improve the application."
          enabled={analytics}
          onChange={() =>
            setAnalytics(!analytics)
          }
        />
      </div>
    </section>
  );
}

type PrivacyItemProps = {
  icon: React.ElementType;
  title: string;
  description: string;
};

function PrivacyItem({
  icon: Icon,
  title,
  description,
}: PrivacyItemProps) {
  return (
    <div className="flex gap-3 rounded-xl bg-muted/50 p-4">
      <Icon className="mt-0.5 h-5 w-5 shrink-0" />

      <div>
        <p className="text-sm font-medium">
          {title}
        </p>

        <p className="mt-1 text-sm text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}

type PrivacyToggleProps = PrivacyItemProps & {
  enabled: boolean;
  onChange: () => void;
};

function PrivacyToggle({
  icon: Icon,
  title,
  description,
  enabled,
  onChange,
}: PrivacyToggleProps) {
  return (
    <div className="flex items-center justify-between gap-4 border-t pt-4">
      <div className="flex gap-3">
        <Icon className="mt-0.5 h-5 w-5 shrink-0" />

        <div>
          <p className="text-sm font-medium">
            {title}
          </p>

          <p className="mt-1 text-sm text-muted-foreground">
            {description}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={onChange}
        className={`relative h-6 w-11 shrink-0 rounded-full transition ${
          enabled
            ? "bg-foreground"
            : "bg-muted"
        }`}
      >
        <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-background transition ${
            enabled
              ? "left-6"
              : "left-1"
          }`}
        />
      </button>
    </div>
  );
}