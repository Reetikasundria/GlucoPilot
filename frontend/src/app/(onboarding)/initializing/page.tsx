"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import LoadingStep from "@/features/onboarding/components/LoadingStep";

const STEPS = [
  "Reading your profile",
  "Understanding your diabetes",
  "Learning your daily routine",
  "Building meal preferences",
  "Preparing health goals",
  "Creating your AI memory",
];

export default function InitializingPage() {
  const [current, setCurrent] = useState(0);

  const router = useRouter();

  useEffect(() => {
    if (current >= STEPS.length) {
      const timeout = setTimeout(() => {
        router.push("/dashboard");
      }, 1200);

      return () => clearTimeout(timeout);
    }

    const interval = setTimeout(() => {
      setCurrent((prev) => prev + 1);
    }, 900);

    return () => clearTimeout(interval);
  }, [current, router]);

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-2xl space-y-10">
        <div className="space-y-3 text-center">
          <div className="text-6xl">🧠</div>

          <h1 className="text-4xl font-bold">
            Initializing GlucoPilot
          </h1>

          <p className="text-muted-foreground">
            Your AI companion is learning about you...
          </p>
        </div>

        <div className="space-y-4">
          {STEPS.map((step, index) => (
            <LoadingStep
              key={step}
              text={step}
              active={index === current}
              completed={index < current}
            />
          ))}
        </div>

        {current >= STEPS.length && (
          <div className="rounded-xl bg-emerald-500 p-6 text-center text-white animate-in fade-in zoom-in">
            <h2 className="text-2xl font-bold">
              ✨ Your AI Companion is Ready
            </h2>

            <p className="mt-2 text-emerald-50">
              Taking you to your dashboard...
            </p>
          </div>
        )}
      </div>
    </main>
  );
}