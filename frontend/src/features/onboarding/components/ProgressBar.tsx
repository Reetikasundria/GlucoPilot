import { Progress } from "@/components/ui/progress";

type Props = {
  currentStep: number;
  totalSteps: number;
};

export default function ProgressBar({
  currentStep,
  totalSteps,
}: Props) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>
          Step {currentStep} of {totalSteps}
        </span>

        <span>
          {Math.round(currentStep / totalSteps * 100)}%
        </span>
      </div>

      <Progress
        value={(currentStep / totalSteps) * 100}
      />
    </div>
  );
}