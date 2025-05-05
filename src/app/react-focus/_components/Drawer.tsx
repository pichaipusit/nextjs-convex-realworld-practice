"use client";
import React, { useState } from "react";

type DrawerPlacement = "left" | "right" | "top" | "bottom";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  placement?: DrawerPlacement;
}

const Drawer = ({ isOpen, onClose, placement = "left" }: DrawerProps) => {
  const placementStyles: Record<
    DrawerPlacement,
    { position: string; transform: string }
  > = {
    left: {
      position: "top-0 left-0 h-full w-64",
      transform: isOpen ? "translate-x-0" : "-translate-x-full",
    },
    right: {
      position: "top-0 right-0 h-full w-64",
      transform: isOpen ? "translate-x-0" : "translate-x-full",
    },
    top: {
      position: "top-0 left-0 w-full h-64",
      transform: isOpen ? "translate-y-0" : "-translate-y-full",
    },
    bottom: {
      position: "bottom-0 left-0 w-full h-64",
      transform: isOpen ? "translate-y-0" : "translate-y-full",
    },
  };

  const styles = placementStyles[placement];

  return (
    <div
      className={`fixed bg-gray-800 text-white p-4 transition-transform duration-300 ease-in-out ${styles.position} ${styles.transform}`}
    >
      <button onClick={onClose} className="text-xl">
        X
      </button>
      <h2>Drawer Content</h2>
    </div>
  );
};

const RightDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      <button
        onClick={() => setIsDrawerOpen(true)}
        className="bg-blue-500 text-white py-2 px-6 rounded-lg mt-8 ml-8"
      >
        Open Drawer
      </button>

      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        placement="right" // Change this to "left", "right", "top", or "bottom"
      />
    </div>
  );
};

export default RightDrawer;
