import Link from "next/link";

import { Activity, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-white to-emerald-50 px-6">
      <div className="max-w-3xl text-center">
        <div className="mb-8 flex justify-center">
          <div className="rounded-full bg-emerald-100 p-5">
            <Activity
              className="text-emerald-600"
              size={42}
            />
          </div>
        </div>

        <h1 className="text-6xl font-extrabold tracking-tight text-emerald-600">
          GlucoPilot
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
          Your AI-powered diabetes companion that helps you manage glucose,
          meals, medications, stress, and daily routines with personalized
          guidance.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link href="/signup">
            <Button size="lg">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>

          <Link href="/login">
            <Button
              variant="outline"
              size="lg"
            >
              Login
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}