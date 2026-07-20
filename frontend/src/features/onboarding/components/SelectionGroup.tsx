"use client";

import SelectionCard from "./SelectionCard";

type Option = {
  value: string;
  title: string;
  description?: string;
  icon?: string;
};

type Props = {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
};

export default function SelectionGroup({
  value,
  onChange,
  options,
}: Props) {
  return (
    <div className="space-y-4">
      {options.map((option) => (
        <SelectionCard
          key={option.value}
          title={option.title}
          description={option.description}
          icon={option.icon}
          selected={value === option.value}
          onClick={() => onChange(option.value)}
        />
      ))}
    </div>
  );
}