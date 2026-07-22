import { Loader2 } from "lucide-react";

type LoadingStateProps = {
  message?: string;
  className?: string;
};

export default function LoadingState({
  message = "Loading...",
  className = "",
}: LoadingStateProps) {
  return (
    <div
      className={`flex min-h-40 flex-col items-center justify-center gap-3 ${className}`}
    >
      <Loader2 className="h-6 w-6 animate-spin text-emerald-600" />

      <p className="text-sm text-muted-foreground">
        {message}
      </p>
    </div>
  );
}