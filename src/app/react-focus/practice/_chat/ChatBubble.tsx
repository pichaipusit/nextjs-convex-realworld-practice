import { Message } from "@/lib/fake-db";
import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";
import ChatActions from "./ChatActions";

type ChatBubbleProps = {
  message: Message;
};
const ChatBubble = ({ message }: ChatBubbleProps) => {
  const { userId, text } = message;
  const [isActionsOpen, setIsActionsOpen] = useState(false);
  const holdTimeout = useRef<NodeJS.Timeout | null>(null);

  const handlePointerDown = () => {
    holdTimeout.current = setTimeout(() => {
      setIsActionsOpen(true);
    }, 800);
  };
  const handlePointerUp = () => {
    if (holdTimeout.current) {
      clearTimeout(holdTimeout.current);
      holdTimeout.current = null;
    }
  };

  return (
    <div>
      <li
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
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
