import { ReactNode } from "react";

import { Card } from "@/components/ui/card";

type AuthLayoutProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export default function AuthLayout({
  title,
  subtitle,
  children,
}: AuthLayoutProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <Card className="w-full max-w-md rounded-2xl p-8 shadow-xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-emerald-600">
            GlucoPilot
          </h1>

          <h2 className="mt-6 text-2xl font-semibold">
            {title}
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            {subtitle}
          </p>
        </div>

        {children}
      </Card>
    </main>
  );
}