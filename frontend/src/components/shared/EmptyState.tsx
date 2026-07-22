import { Inbox } from "lucide-react";

type EmptyStateProps = {
  title?: string;
  message?: string;
  action?: React.ReactNode;
};

export default function EmptyState({
  title = "Nothing here yet",
  message = "There is no data to display at the moment.",
  action,
}: EmptyStateProps) {
  return (
    <div className="flex min-h-48 flex-col items-center justify-center rounded-xl border border-dashed p-8 text-center">
      <Inbox className="mb-4 h-10 w-10 text-muted-foreground" />

      <h3 className="font-semibold">
        {title}
      </h3>

      <p className="mt-1 max-w-sm text-sm text-muted-foreground">
        {message}
      </p>

      {action && (
        <div className="mt-4">
          {action}
        </div>
      )}
    </div>
  );
}