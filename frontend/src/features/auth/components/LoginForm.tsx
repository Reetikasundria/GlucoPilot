"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import AuthLayout from "@/components/layout/AuthLayout";
import { Button } from "@/components/ui/button";

import AuthInput from "./AuthInput";

export default function LoginForm() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO:
    // Later we'll call FastAPI here.

    router.push("/onboarding");
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to continue your journey"
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <AuthInput
          id="email"
          label="Email"
          type="email"
          placeholder="Enter your email"
        />

        <AuthInput
          id="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
        />

        <Button
          type="submit"
          className="w-full"
        >
          Login
        </Button>

        <p className="text-center text-sm text-slate-600">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-emerald-600 hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}