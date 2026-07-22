import { ChatMessage } from "./types";

export const initialChatMessages: ChatMessage[] = [
  {
    id: "message-1",
    role: "assistant",
    content:
      "Good morning, Reetika. I am GlucoPilot, your personal health companion.",
    createdAt: "9:00 AM",
  },
  {
    id: "message-2",
    role: "assistant",
    content:
      "You can tell me how you are feeling, what you ate, your current glucose level, or ask me what you should do next.",
    createdAt: "9:00 AM",
  },
];