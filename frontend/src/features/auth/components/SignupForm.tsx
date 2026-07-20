"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import AuthLayout from "@/components/layout/AuthLayout";
import { Button } from "@/components/ui/button";

import AuthInput from "./AuthInput";

export default function SignupForm() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Later we'll create the account using FastAPI.

    router.push("/onboarding");
  };

  return (
    <AuthLayout
      title="Create Your Account"
      subtitle="Let's build your personal diabetes companion."
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <AuthInput
          id="name"
          label="Full Name"
          placeholder="John Doe"
        />

        <AuthInput
          id="email"
          label="Email"
          type="email"
          placeholder="john@example.com"
        />

        <AuthInput
          id="password"
          label="Password"
          type="password"
          placeholder="********"
        />

        <AuthInput
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          placeholder="********"
        />

        <Button
          type="submit"
          className="w-full"
        >
          Create Account
        </Button>

        <p className="text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-emerald-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}