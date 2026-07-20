"use client";

import { useFormContext } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = {
  name: string;
  label: string;
  type?: "text" | "email" | "password" | "number";
  placeholder?: string;
};

export default function FormInput({
  name,
  label,
  type = "text",
  placeholder,
}: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message as string | undefined;

  return (
    <div className="space-y-2">
      <Label
        htmlFor={name}
        className="text-sm font-medium"
      >
        {label}
      </Label>

      <Input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}