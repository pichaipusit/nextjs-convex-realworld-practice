// data/fake-messages.ts

export type Reaction = {
  emoji: string;
  userId: string;
};

export type Message = {
  id: number;
  text: string;
  userId: string;
  username: string;
  timestamp: string;
  pinned: boolean;
  reactions: Reaction[];
};

const fakeMessages: Message[] = [
  {
    id: 1,
    text: "Hello class! 👋",
    userId: "user-1",
    username: "Alice",
    timestamp: new Date().toISOString(),
    pinned: false,
    reactions: [],
  },
  {
    id: 2,
    text: "Who's ready to lead?",
    userId: "user-2",
    username: "Bob",
    timestamp: new Date().toISOString(),
    pinned: true,
    reactions: [
      { emoji: "🔥", userId: "user-3" },
      { emoji: "👍", userId: "user-1" },
    ],
  },
];

export const getMessages = async (): Promise<Message[]> => {
  // You can only await something that is a Promise or "thenable".
  await new Promise((res) => setTimeout(res, 300));
  return fakeMessages;
};
