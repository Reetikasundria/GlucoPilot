"use client";

type Props = {
  label: string;
  icon?: string;
  selected: boolean;
  onClick: () => void;
};

export default function Chip({
  label,
  icon,
  selected,
  onClick,
}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        flex items-center gap-2
        rounded-full
        border
        px-4
        py-2
        text-sm
        font-medium
        transition-all
        ${
          selected
            ? "bg-emerald-500 text-white border-emerald-500"
            : "bg-background border-border hover:border-emerald-400 hover:bg-emerald-50"
        }
      `}
    >
      {icon && <span>{icon}</span>}
      {label}
    </button>
  );
}