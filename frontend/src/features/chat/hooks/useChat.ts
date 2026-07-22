"use client";

import { useState } from "react";

import { initialChatMessages } from "../mockData";
import { ChatMessage } from "../types";

export default function useChat() {
  const [messages, setMessages] =
    useState<ChatMessage[]>(initialChatMessages);

  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (content: string) => {
    const trimmedContent = content.trim();

    if (!trimmedContent || isLoading) return;

    const now = new Date();

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmedContent,
      createdAt: now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((previousMessages) => [
      ...previousMessages,
      userMessage,
    ]);

    setIsLoading(true);

    // Temporary mock AI response.
    // Later this will call our FastAPI backend.
    await new Promise((resolve) =>
      setTimeout(resolve, 800)
    );

    const assistantMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "assistant",
      content:
        "I understand. Once your glucose data, meals, activities, and personal history are connected, I will use your own patterns to provide a more personalized response.",
      createdAt: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((previousMessages) => [
      ...previousMessages,
      assistantMessage,
    ]);

    setIsLoading(false);
  };

  return {
    messages,
    isLoading,
    sendMessage,
  };
}