"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { defaultValues } from "../defaultValues";
import {
  onboardingSchema,
  OnboardingFormData,
} from "../schema";

export default function useOnboarding() {
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState(1);

  const methods = useForm({
    resolver: zodResolver(onboardingSchema),
    defaultValues,
    mode: "onTouched",
  });

  const nextStep = async () => {
    const fieldsByStep: Record<number, (keyof OnboardingFormData)[]> = {
      1: ["fullName", "age", "gender", "height", "weight"],
      2: ["diabetesType", "diagnosedSince"],
      3: ["usesCGM", "usesInsulin", "medications"],
      4: [
        "wakeTime",
        "sleepTime",
        "occupation",
        "foodPreference",
        "country",
        "state",
      ],
      5: [
        "favoriteCuisines",
        "breakfastTime",
        "lunchTime",
        "dinnerTime",
      ],
      6: ["goals"],
    };

    const valid = await methods.trigger(fieldsByStep[currentStep]);

    if (!valid) return;

    // Last step
    if (currentStep === 6) {
      const data = methods.getValues();

      localStorage.setItem(
        "glucopilot-user",
        JSON.stringify(data)
      );

      router.push("/initializing");

      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const previousStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  return {
    methods,
    currentStep,
    nextStep,
    previousStep,
  };
}