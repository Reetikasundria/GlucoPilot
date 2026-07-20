"use client";

import { useFormContext } from "react-hook-form";

type Option = {
  value: string;
  label: string;
  icon: string;
};

type Props = {
  name: string;
  label: string;
  options: Option[];
};

export default function FormRadio({
  name,
  label,
  options,
}: Props) {
  const { watch, setValue } = useFormContext();

  const selected = watch(name);

  return (
    <div className="space-y-3">
      <p className="font-medium">{label}</p>

      <div className="grid grid-cols-3 gap-4">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() =>
              setValue(name, option.value, {
                shouldValidate: true,
                shouldDirty: true,
              })
            }
            className={`rounded-2xl border p-5 transition-all ${
              selected === option.value
                ? "border-emerald-500 bg-emerald-50 shadow-md"
                : "border-gray-200 hover:border-emerald-300"
            }`}
          >
            <div className="text-3xl">{option.icon}</div>

            <div className="mt-2 font-medium">
              {option.label}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}