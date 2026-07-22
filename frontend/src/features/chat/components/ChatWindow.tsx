"use client";

import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import SuggestedQuestions from "./SuggestedQuestions";

import useChat from "../hooks/useChat";

export default function ChatWindow() {
  const {
    messages,
    isLoading,
    sendMessage,
  } = useChat();

  return (
    <div className="flex min-h-[calc(100vh-3rem)] flex-col overflow-hidden rounded-3xl border bg-card shadow-sm">
      <ChatHeader />

      <div className="flex-1 space-y-6 overflow-y-auto p-6">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
          />
        ))}

        {isLoading && (
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
              <span className="text-sm">
                AI
              </span>
            </div>

            <div className="rounded-2xl rounded-tl-sm bg-muted px-4 py-3">
              <div className="flex gap-1">
                <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground" />

                <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:150ms]" />

                <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:300ms]" />
              </div>
            </div>
          </div>
        )}

        {messages.length === 2 && (
          <div className="mx-auto max-w-2xl pt-6">
            <div className="mb-4 text-center">
              <h2 className="font-semibold">
                What would you like help with?
              </h2>

              <p className="mt-1 text-sm text-muted-foreground">
                Choose a question or type your own.
              </p>
            </div>

            <SuggestedQuestions
              onSelect={sendMessage}
            />
          </div>
        )}
      </div>

      <ChatInput
        onSend={sendMessage}
        disabled={isLoading}
      />
    </div>
  );
}