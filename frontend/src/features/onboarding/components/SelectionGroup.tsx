"use client";

type Option = {
  value: string;
  title: string;
  icon?: string;
};

type Props = {
  value: string;
  options: Option[];
  onChange: (value: string) => void;
};

export default function SelectionGroup({
  value,
  options,
  onChange,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((option) => {
        const selected = value === option.value;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`rounded-full border px-5 py-3 transition-all ${
              selected
                ? "border-emerald-500 bg-emerald-500 text-white"
                : "border-border hover:border-emerald-400"
            }`}
          >
            <span className="mr-2">
              {option.icon}
            </span>

            {option.title}
          </button>
        );
      })}
    </div>
  );
}