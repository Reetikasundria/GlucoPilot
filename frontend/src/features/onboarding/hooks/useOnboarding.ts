"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { defaultValues } from "../defaultValues";
import {
  onboardingSchema,
  OnboardingFormData,
} from "../schema";

export default function useOnboarding() {
  const [currentStep, setCurrentStep] = useState(1);

  const methods = useForm({
    resolver: zodResolver(onboardingSchema),
    defaultValues,
    mode: "onTouched",
  });

  const nextStep = async () => {
    const fieldsByStep: Record<number, (keyof OnboardingFormData)[]> = {
      1: ["fullName", "age", "gender", "height", "weight"],
      2: ["diabetesType", "diagnosedSince","targetGlucoseMin","targetGlucoseMax","hba1c",],
      3: ["usesCGM", "usesInsulin", "medications"],
      4: [
        "wakeTime",
        "sleepTime",
        "occupation",
        "foodPreference",
        "activityLevel",
        "country",
        "state",
      ],
      5: ["goals"],
    };
  
    const isValid = await methods.trigger(fieldsByStep[currentStep]);
  
    if (!isValid) return;
  
    setCurrentStep((prev) => Math.min(prev + 1, 5));
  };
  const previousStep = () =>
    setCurrentStep((prev) => Math.max(prev - 1, 1));

  return {
    methods,
    currentStep,
    nextStep,
    previousStep,
  };
}