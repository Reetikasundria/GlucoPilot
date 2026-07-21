"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FormProvider } from "react-hook-form";

import NavigationButtons from "@/features/onboarding/components/NavigationButtons";
import ProgressBar from "@/features/onboarding/components/ProgressBar";
import StepIndicator from "@/features/onboarding/components/StepIndicator";

import {
  ONBOARDING_STEPS,
  TOTAL_STEPS,
} from "@/features/onboarding/constants";

import useOnboarding from "@/features/onboarding/hooks/useOnboarding";

import BasicInfo from "@/features/onboarding/steps/BasicInfo";
import DiabetesInfo from "@/features/onboarding/steps/DiabetesInfo";
import Goals from "@/features/onboarding/steps/Goals";
import Lifestyle from "@/features/onboarding/steps/Lifestyle";
import Treatment from "@/features/onboarding/steps/Treatment";
import MealPreferences from "@/features/onboarding/steps/MealPreferences";

export default function OnboardingPage() {
  const {
    methods,
    currentStep,
    nextStep,
    previousStep,
  } = useOnboarding();

  const current = ONBOARDING_STEPS[currentStep - 1];

  const steps = [
    <BasicInfo key={1} />,
    <DiabetesInfo key={2} />,
    <Treatment key={3} />,
    <Lifestyle key={4} />,
    <MealPreferences key={5} />,
    <Goals key={6} />,
  ];

  return (
    <FormProvider {...methods}>
      <main className="mx-auto flex min-h-screen max-w-3xl items-center px-6 py-10">
        <div className="w-full space-y-8">
          <ProgressBar
            currentStep={currentStep}
            totalSteps={TOTAL_STEPS}
          />

          <StepIndicator
            title={current.title}
            icon={current.icon}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{
                opacity: 0,
                x: 30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -30,
              }}
              transition={{
                duration: 0.25,
              }}
            >
              {steps[currentStep - 1]}
            </motion.div>
          </AnimatePresence>

          <NavigationButtons
            isFirst={currentStep === 1}
            isLast={currentStep === TOTAL_STEPS}
            onNext={nextStep}
            onPrevious={previousStep}
          />
        </div>
      </main>
    </FormProvider>
  );
}