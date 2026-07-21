import { OnboardingFormData } from "./schema";

export const defaultValues: OnboardingFormData = {
  fullName: "",

  age: 18,

  gender: "",

  height: 170,

  weight: 70,

  diabetesType: "",

  diagnosedSince: new Date().getFullYear(),

  targetGlucoseMin: undefined,

  targetGlucoseMax: undefined,

  hba1c: undefined,

  usesCGM: false,

  usesInsulin: false,

  usesPump: false,

  usesMedicine: false,

  dietControlled: false,

  medications: [],

  activityLevel: "",

  wakeTime: "",

  sleepTime: "",

  occupation: "",

  foodPreference: "",

  favoriteCuisines: [],

  mealsPerDay: "",

  breakfastTime: "",

  lunchTime: "",

  dinnerTime: "",

  snacks: false,

  country: "",

  state: "",

  goals: [],
};