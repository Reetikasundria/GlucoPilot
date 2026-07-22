"use client";

import {
  BrainCircuit,
  UserRound,
} from "lucide-react";

import { ChatMessage as ChatMessageType } from "../types";

type ChatMessageProps = {
  message: ChatMessageType;
};

export default function ChatMessage({
  message,
}: ChatMessageProps) {
  const isAssistant =
    message.role === "assistant";

  return (
    <div
      className={`flex gap-3 ${
        isAssistant
          ? "justify-start"
          : "justify-end"
      }`}
    >
      {isAssistant && (
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
          <BrainCircuit className="h-5 w-5" />
        </div>
      )}

      <div
        className={`max-w-[80%] ${
          isAssistant
            ? "rounded-2xl rounded-tl-sm bg-muted"
            : "rounded-2xl rounded-tr-sm bg-emerald-500 text-white"
        } px-4 py-3`}
      >
        <p className="text-sm leading-6">
          {message.content}
        </p>

        <p
          className={`mt-2 text-xs ${
            isAssistant
              ? "text-muted-foreground"
              : "text-emerald-100"
          }`}
        >
          {message.createdAt}
        </p>
      </div>

      {!isAssistant && (
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-muted text-muted-foreground">
          <UserRound className="h-5 w-5" />
        </div>
      )}
    </div>
  );
}