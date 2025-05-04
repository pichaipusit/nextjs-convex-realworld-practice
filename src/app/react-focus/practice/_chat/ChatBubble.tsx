import { Message } from "@/lib/fake-db";
import { cn } from "@/lib/utils";
import React from "react";

type ChatBubbleProps = {
  message: Message;
};
const ChatBubble = ({ message }: ChatBubbleProps) => {
  const { userId, text } = message;
  return (
    <div
      className={cn(
        "p-2 w-fit",
        userId === "user-1" ? "bg-gray-200" : "bg-sky-200 ml-auto"
      )}
    >
      {text}
    </div>
  );
};

export default ChatBubble;
