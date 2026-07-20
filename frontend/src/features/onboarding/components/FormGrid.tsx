import { ReactNode } from "react";

type FormGridProps = {
  children: ReactNode;
};

export default function FormGrid({
  children,
}: FormGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {children}
    </div>
  );
}