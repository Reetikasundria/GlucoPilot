"use client";

import {
  FormEvent,
  useState,
} from "react";

import { ArrowUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type ChatInputProps = {
  onSend: (message: string) => void;
  disabled?: boolean;
};

export default function ChatInput({
  onSend,
  disabled = false,
}: ChatInputProps) {
  const [message, setMessage] =
    useState("");

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const trimmedMessage =
      message.trim();

    if (
      !trimmedMessage ||
      disabled
    ) {
      return;
    }

    onSend(trimmedMessage);

    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-3 border-t p-4"
    >
      <Input
        value={message}
        onChange={(event) =>
          setMessage(event.target.value)
        }
        disabled={disabled}
        placeholder="Ask GlucoPilot anything..."
        className="h-12 rounded-xl"
      />

      <Button
        type="submit"
        size="icon"
        disabled={disabled || !message.trim()}
        className="h-12 w-12 shrink-0 rounded-xl"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </form>
  );
}