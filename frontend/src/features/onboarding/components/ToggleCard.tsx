"use client";

type Props = {
  title: string;
  description: string;
  icon: string;
  checked: boolean;
  onClick: () => void;
};

export default function ToggleCard({
  title,
  description,
  icon,
  checked,
  onClick,
}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-2xl border p-5 transition-all text-left ${
        checked
          ? "border-emerald-500 bg-emerald-50"
          : "border-border hover:border-emerald-300"
      }`}
    >
      <div className="flex gap-4 items-start">
        <div className="text-3xl">
          {icon}
        </div>

        <div className="flex-1">
          <h3 className="font-semibold">
            {title}
          </h3>

          <p className="text-sm text-muted-foreground mt-1">
            {description}
          </p>
        </div>

        <div className="text-2xl">
          {checked ? "✅" : "⬜"}
        </div>
      </div>
    </button>
  );
}