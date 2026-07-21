import {
    UserRound,
    HeartPulse,
    Pill,
    Activity,
    UtensilsCrossed,
    Target,
  } from "lucide-react";
  
  export const ONBOARDING_STEPS = [
    {
      title: "Basic",
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
      title: "Meals",
      icon: UtensilsCrossed,
    },
    {
      title: "Goals",
      icon: Target,
    },
  ];
  
  export const TOTAL_STEPS = ONBOARDING_STEPS.length;