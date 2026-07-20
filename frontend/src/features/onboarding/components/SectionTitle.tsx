import { UserRound } from "lucide-react";

type Props = {
  title: string;
  subtitle: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <div className="rounded-full bg-emerald-100 p-3">
          <UserRound className="text-emerald-600" />
        </div>

        <div>
          <h2 className="text-3xl font-bold">
            {title}
          </h2>

          <p className="text-muted-foreground">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}