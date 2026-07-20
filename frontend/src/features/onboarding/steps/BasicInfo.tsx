"use client";

import CardContainer from "../components/CardContainer";
import FormGrid from "../components/FormGrid";
import FormInput from "../components/FormInput";
import FormRadio from "../components/FormRadio";
import SectionTitle from "../components/SectionTitle";

export default function BasicInfo() {
  return (
    <CardContainer>
      <div className="space-y-8">
        <SectionTitle
          title="Welcome 👋"
          subtitle="Let's personalize your AI companion."
        />

        <FormInput
          name="fullName"
          label="Full Name"
          placeholder="Enter your full name"
        />

        <FormGrid>
          <FormInput
            name="age"
            label="Age"
            type="number"
            placeholder="22"
          />

          <FormInput
            name="height"
            label="Height (cm)"
            type="number"
            placeholder="170"
          />
        </FormGrid>

        <FormInput
          name="weight"
          label="Weight (kg)"
          type="number"
          placeholder="70"
        />

        <FormRadio
          name="gender"
          label="Gender"
          options={[
            {
              value: "male",
              label: "Male",
              icon: "👨",
            },
            {
              value: "female",
              label: "Female",
              icon: "👩",
            },
            {
              value: "other",
              label: "Other",
              icon: "⚧",
            },
          ]}
        />
      </div>
    </CardContainer>
  );
}