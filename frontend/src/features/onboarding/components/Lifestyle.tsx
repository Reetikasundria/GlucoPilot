"use client";

import { useFormContext } from "react-hook-form";

import CardContainer from "../components/CardContainer";
import FormGrid from "../components/FormGrid";
import FormInput from "../components/FormInput";
import SectionTitle from "../components/SectionTitle";
import SelectionGroup from "../components/SelectionGroup";

export default function Lifestyle() {
  const { watch, setValue } = useFormContext();

  return (
    <CardContainer>
      <div className="space-y-8">
        <SectionTitle
          title="Daily Lifestyle"
          subtitle="Help us understand your daily routine."
        />

        <FormGrid>
          <FormInput
            name="wakeTime"
            label="Wake Time"
            type="text"
            placeholder="06:30"
          />

          <FormInput
            name="sleepTime"
            label="Sleep Time"
            type="text"
            placeholder="23:00"
          />
        </FormGrid>

        <div>
          <h3 className="mb-4 font-semibold">
            Occupation
          </h3>

          <SelectionGroup
            value={watch("occupation")}
            onChange={(v) =>
              setValue("occupation", v)
            }
            options={[
              {
                value: "student",
                title: "Student",
                icon: "🎓",
              },
              {
                value: "working",
                title: "Working Professional",
                icon: "💼",
              },
              {
                value: "shift",
                title: "Shift Worker",
                icon: "🌙",
              },
              {
                value: "homemaker",
                title: "Homemaker",
                icon: "🏡",
              },
            ]}
          />
        </div>

        <div>
          <h3 className="mb-4 font-semibold">
            Food Preference
          </h3>

          <SelectionGroup
            value={watch("foodPreference")}
            onChange={(v) =>
              setValue("foodPreference", v)
            }
            options={[
              {
                value: "veg",
                title: "Vegetarian",
                icon: "🥦",
              },
              {
                value: "egg",
                title: "Eggetarian",
                icon: "🥚",
              },
              {
                value: "nonveg",
                title: "Non Vegetarian",
                icon: "🍗",
              },
              {
                value: "vegan",
                title: "Vegan",
                icon: "🌱",
              },
            ]}
          />
        </div>

        <div>
          <h3 className="mb-4 font-semibold">
            Activity Level
          </h3>

          <SelectionGroup
            value={watch("activityLevel")}
            onChange={(v) =>
              setValue("activityLevel", v)
            }
            options={[
              {
                value: "low",
                title: "Sedentary",
                icon: "🪑",
              },
              {
                value: "medium",
                title: "Moderately Active",
                icon: "🚶",
              },
              {
                value: "high",
                title: "Very Active",
                icon: "🏃",
              },
            ]}
          />
        </div>
      </div>
    </CardContainer>
  );
}