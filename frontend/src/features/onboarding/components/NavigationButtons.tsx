import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

type Props = {
  isFirst: boolean;
  isLast: boolean;
  loading?: boolean;
  onNext: () => void;
  onPrevious: () => void;
};

export default function NavigationButtons({
  isFirst,
  isLast,
  loading = false,
  onNext,
  onPrevious,
}: Props) {
  return (
    <div className="mt-10 flex justify-between">
      <Button
        variant="outline"
        disabled={isFirst || loading}
        onClick={onPrevious}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>

      <Button
        disabled={loading}
        onClick={onNext}
      >
        {loading
          ? "Checking..."
          : isLast
          ? "Finish"
          : "Continue"}

        {!loading && !isLast && (
          <ArrowRight className="ml-2 h-4 w-4" />
        )}
      </Button>
    </div>
  );
}