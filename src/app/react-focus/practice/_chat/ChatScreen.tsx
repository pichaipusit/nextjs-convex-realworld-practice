"use client";

import { getMessages, Message } from "@/lib/fake-db";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import ChatBubble from "./ChatBubble";

export default function ChatScreen() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const addNewMessage = () => {
    if (!text) return;

    const newMessage: Message = {
      id: Date.now(),
      text,
      userId: "user-2",
      username: "Bob",
      timestamp: new Date().toISOString(),
      pinned: false,
      reactions: [],
    };

    setMessages([...messages, newMessage]);
    setText("");
  };

  useEffect(() => {
    const fetchMessages = async () => {
      setIsLoading(true);
      const initialMessages = await getMessages();
      setMessages(initialMessages);
      setIsLoading(false);
    };

    fetchMessages();

    return () => {};
  }, []);

  if (isLoading) {
    return <div className="container mx-auto">...Loading</div>;
  }

  return (
    <div className="container mx-auto">
      <ul className="space-y-2">
        {messages.map((msg) => (
          <ChatBubble key={msg.id} message={msg} />
        ))}
      </ul>

      <div className="mt-3 flex">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="type.."
          className="w-full p-2"
          onKeyUp={(e) => {
            if (e.key === "Enter") addNewMessage();
          }}
        />
        <button
          onClick={addNewMessage}
          className="absolute right-5 bg-sky-300 p-2"
        >
          Send
        </button>
      </div>
    </div>
  );
}
