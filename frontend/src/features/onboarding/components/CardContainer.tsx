import { ReactNode } from "react";

type CardContainerProps = {
  children: ReactNode;
};

export default function CardContainer({
  children,
}: CardContainerProps) {
  return (
    <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
      {children}
    </div>
  );
}