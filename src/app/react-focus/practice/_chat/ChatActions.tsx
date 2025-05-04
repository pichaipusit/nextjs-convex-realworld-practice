import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

type ChatActionsProps = {
  onClose: () => void;
  isOpen: boolean;
  userId: string;
};
export default function ChatActions({
  onClose,
  isOpen,
  userId,
}: ChatActionsProps) {
  const menus = ["Delete", "Edit"];

  const actionsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        actionsRef.current &&
        !actionsRef.current?.contains(e.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div>
      <ul
        ref={actionsRef}
        className={cn(
          " p-2 transition-transform w-fit absolute z-50 ",
          isOpen ? "scale-100" : "scale-0",
          userId === "user-1" ? "left-1/4" : "right-1/4"
        )}
      >
        {menus.map((menu) => (
          <li key={menu} className="w-full ">
            <button className="w-full cursor-pointer p-2 text-left bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">
              {menu}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
