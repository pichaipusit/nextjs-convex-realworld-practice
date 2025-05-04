"use client";

import { getMessages, Message } from "@/lib/fake-db";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export default function ChatScreen() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState("");

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
      const initialMessages = await getMessages();
      setMessages(initialMessages);
    };

    fetchMessages();
  }, []);

  return (
    <div className="container mx-auto">
      <ul className="space-y-2">
        {messages.map((msg) => (
          <li
            key={msg.id}
            className={cn(
              "p-2 w-fit",
              msg.userId === "user-1" ? "bg-gray-200" : "bg-sky-200 ml-auto"
            )}
          >
            {msg.text}
          </li>
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
