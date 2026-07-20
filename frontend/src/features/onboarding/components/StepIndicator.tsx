import { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  icon: LucideIcon;
};

export default function StepIndicator({
  title,
  icon: Icon,
}: Props) {
  return (
    <div className="flex items-center gap-4">
      <div className="rounded-full bg-emerald-100 p-3">
        <Icon className="h-6 w-6 text-emerald-600" />
      </div>

      <h2 className="text-2xl font-bold">
        {title}
      </h2>
    </div>
  );
}