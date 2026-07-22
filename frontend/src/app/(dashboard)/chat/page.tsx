import ChatWindow from "@/features/chat/components/ChatWindow";

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-muted/20 px-4 py-6 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <ChatWindow />
      </div>
    </div>
  );
}