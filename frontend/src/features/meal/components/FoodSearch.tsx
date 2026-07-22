"use client";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

type FoodSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function FoodSearch({
  value,
  onChange,
}: FoodSearchProps) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

      <Input
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        placeholder="Search meals or ingredients..."
        className="h-11 rounded-xl pl-10"
      />
    </div>
  );
}