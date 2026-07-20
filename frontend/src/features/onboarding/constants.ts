import {
    UserRound,
    HeartPulse,
    Pill,
    Activity,
    Target,
  } from "lucide-react";
  
  export const ONBOARDING_STEPS = [
    {
      title: "Basic Information",
      icon: UserRound,
    },
    {
      title: "Diabetes",
      icon: HeartPulse,
    },
    {
      title: "Treatment",
      icon: Pill,
    },
    {
      title: "Lifestyle",
      icon: Activity,
    },
    {
      title: "Goals",
      icon: Target,
    },
  ];
  
  export const TOTAL_STEPS = ONBOARDING_STEPS.length;