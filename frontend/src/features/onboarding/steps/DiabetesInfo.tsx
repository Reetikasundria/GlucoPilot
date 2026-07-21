"use client";

import { HeartPulse } from "lucide-react";
import { useFormContext } from "react-hook-form";

import CardContainer from "../components/CardContainer";
import DiabetesCard from "../components/DiabetesCard";
import FormGrid from "../components/FormGrid";
import FormInput from "../components/FormInput";
import SectionTitle from "../components/SectionTitle";

export default function DiabetesInfo() {
  const { watch, setValue } = useFormContext();

  const selected = watch("diabetesType");

  const options = [
    {
      value: "type1",
      title: "Type 1 Diabetes",
      subtitle: "Usually autoimmune and insulin dependent.",
      icon: "💉",
    },
    {
      value: "type2",
      title: "Type 2 Diabetes",
      subtitle: "Most common form of diabetes.",
      icon: "🩺",
    },
    {
      value: "prediabetes",
      title: "Prediabetes",
      subtitle: "Higher-than-normal blood sugar levels.",
      icon: "🌱",
    },
    {
      value: "gestational",
      title: "Gestational Diabetes",
      subtitle: "Occurs during pregnancy.",
      icon: "🤰",
    },
  ];

  return (
    <CardContainer>
      <div className="space-y-8">
        <SectionTitle
          title="Diabetes Information"
          subtitle="Tell us about your condition."
        />

        <div className="grid gap-4">
          {options.map((option) => (
            <DiabetesCard
              key={option.value}
              title={option.title}
              subtitle={option.subtitle}
              icon={option.icon}
              selected={selected === option.value}
              onClick={() =>
                setValue("diabetesType", option.value, {
                  shouldDirty: true,
                  shouldValidate: true,
                })
              }
            />
          ))}
        </div>

        <FormGrid>
          <FormInput
            name="diagnosedSince"
            label="Diagnosed Year"
            type="number"
            placeholder="2022"
          />

          <FormInput
            name="hba1c"
            label="Latest HbA1c (%)"
            type="number"
            placeholder="7.2"
          />
        </FormGrid>

        <FormGrid>
          <FormInput
            name="targetGlucoseMin"
            label="Target Min (mg/dL)"
            type="number"
            placeholder="80"
          />

          <FormInput
            name="targetGlucoseMax"
            label="Target Max (mg/dL)"
            type="number"
            placeholder="180"
          />
        </FormGrid>
      </div>
    </CardContainer>
  );
}