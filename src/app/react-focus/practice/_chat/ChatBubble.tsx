import { Message } from "@/lib/fake-db";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import ChatActions from "./ChatActions";

type ChatBubbleProps = {
  message: Message;
};
const ChatBubble = ({ message }: ChatBubbleProps) => {
  const { userId, text } = message;
  const [isActionsOpen, setIsActionsOpen] = useState(false);

  return (
    <div>
      <li
        onClick={() => setIsActionsOpen(true)}
        className={cn(
          "p-2 w-fit",
          userId === "user-1" ? "bg-gray-200" : "bg-sky-200 ml-auto"
        )}
      >
        {text}
      </li>

      <ChatActions
        onClose={() => setIsActionsOpen(false)}
        isOpen={isActionsOpen}
        userId={userId}
      />
    </div>
  );
};

export default ChatBubble;
