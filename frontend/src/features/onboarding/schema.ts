import { z } from "zod";

export const onboardingSchema = z.object({
  // Basic Info
  fullName: z
    .string()
    .trim()
    .min(3, "Please enter your full name")
    .max(50),

  age: z.coerce
    .number()
    .min(5, "Minimum age is 5")
    .max(120),

  gender: z.string().min(1, "Please select your gender"),

  height: z.coerce
    .number()
    .min(50)
    .max(250),

  weight: z.coerce
    .number()
    .min(10)
    .max(300),

  // Diabetes
  diabetesType: z.string().min(1, "Please select diabetes type"),

  diagnosedSince: z.coerce
    .number()
    .min(1950)
    .max(new Date().getFullYear()),

  targetGlucoseMin: z.coerce.number().optional(),

  targetGlucoseMax: z.coerce.number().optional(),

  hba1c: z.coerce.number().optional(),

  // Treatment
  usesCGM: z.boolean(),

  usesInsulin: z.boolean(),

  usesPump: z.boolean(),

  usesMedicine: z.boolean(),

  dietControlled: z.boolean(),

  medications: z.array(z.string()),

  // Lifestyle
  wakeTime: z.string(),

  sleepTime: z.string(),

  occupation: z.string(),

  foodPreference: z.string(),

  activityLevel: z.string(),

  country: z.string(),

  state: z.string(),

  // Goals
  goals: z.array(z.string()),
});

export type OnboardingFormInput = z.input<typeof onboardingSchema>;
export type OnboardingFormData = z.output<typeof onboardingSchema>;