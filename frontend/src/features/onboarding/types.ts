export interface OnboardingData {
    fullName: string;
    age: number;
    gender: string;
  
    height: number;
    weight: number;
  
    diabetesType: string;
    diagnosedSince: number;
  
    usesCGM: boolean;
  
    usesInsulin: boolean;
  
    medications: string[];
  
    wakeTime: string;
    sleepTime: string;
  
    occupation: string;
  
    foodPreference: string;
  
    country: string;
    state: string;
  
    goals: string[];
  }