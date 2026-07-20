"use client";

import { useFormContext } from "react-hook-form";

import CardContainer from "../components/CardContainer";
import FormGrid from "../components/FormGrid";
import FormInput from "../components/FormInput";
import SectionTitle from "../components/SectionTitle";
import SelectionCard from "../components/SelectionCard";

const diabetesOptions = [
  {
    value: "type1",
    title: "Type 1 Diabetes",
    description: "Autoimmune condition requiring insulin.",
    icon: "💉",
  },
  {
    value: "type2",
    title: "Type 2 Diabetes",
    description: "Insulin resistance or reduced insulin production.",
    icon: "🩺",
  },
  {
    value: "prediabetes",
    title: "Prediabetes",
    description: "Higher-than-normal blood sugar.",
    icon: "🌱",
  },
  {
    value: "gestational",
    title: "Gestational Diabetes",
    description: "Occurs during pregnancy.",
    icon: "🤰",
  },
];

export default function DiabetesInfo() {
  const { watch, setValue } = useFormContext();

  const selected = watch("diabetesType");

  return (
    <CardContainer>
      <div className="space-y-8">
        <SectionTitle
          title="Diabetes Information"
          subtitle="Tell us more about your condition."
        />

        <div className="space-y-4">
          {diabetesOptions.map((option) => (
            <SelectionCard
              key={option.value}
              title={option.title}
              description={option.description}
              icon={option.icon}
              selected={selected === option.value}
              onClick={() =>
                setValue("diabetesType", option.value, {
                  shouldValidate: true,
                  shouldDirty: true,
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
            placeholder="2020"
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