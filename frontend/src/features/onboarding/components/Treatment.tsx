"use client";

import { useFormContext } from "react-hook-form";

import CardContainer from "../components/CardContainer";
import SectionTitle from "../components/SectionTitle";
import ToggleCard from "../components/ToggleCard";

type TreatmentField =
  | "usesCGM"
  | "usesInsulin"
  | "usesPump"
  | "usesMedicine"
  | "dietControlled";

const items: {
  field: TreatmentField;
  title: string;
  description: string;
  icon: string;
}[] = [
  {
    field: "usesCGM",
    title: "CGM Sensor",
    description: "Continuous Glucose Monitor",
    icon: "📈",
  },
  {
    field: "usesInsulin",
    title: "Insulin Pen",
    description: "Daily insulin injections",
    icon: "💉",
  },
  {
    field: "usesPump",
    title: "Insulin Pump",
    description: "Automated insulin delivery",
    icon: "⚙️",
  },
  {
    field: "usesMedicine",
    title: "Oral Medicines",
    description: "Metformin or other diabetes medicines",
    icon: "💊",
  },
  {
    field: "dietControlled",
    title: "Diet & Exercise",
    description: "Managing diabetes through lifestyle",
    icon: "🥗",
  },
];

export default function Treatment() {
  const { watch, setValue } = useFormContext();

  return (
    <CardContainer>
      <div className="space-y-6">
        <SectionTitle
          title="Treatment & Devices"
          subtitle="Select every option that applies to you."
        />

        <div className="space-y-4">
          {items.map((item) => {
            const checked = Boolean(watch(item.field));

            return (
              <ToggleCard
                key={item.field}
                title={item.title}
                description={item.description}
                icon={item.icon}
                checked={checked}
                onClick={() =>
                  setValue(item.field, !checked, {
                    shouldDirty: true,
                    shouldValidate: true,
                  })
                }
              />
            );
          })}
        </div>
      </div>
    </CardContainer>
  );
}