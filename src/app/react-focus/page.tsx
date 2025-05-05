import React from "react";
import ChatScreen from "./practice/_chat/ChatScreen";
import RightDrawer from "./_components/Drawer";
import Accordion from "./_components/Accordion";
import ScrollProgress from "./_components/ScrollProgress";
import MultiStepForm from "./_components/MultiStepForm";

export default function ReactFocusPage() {
  return (
    <div>
      {/* <RightDrawer /> */}
      {/* <Accordion /> */}
      {/* <div className="h-[1500px]">
        <ScrollProgress />
      </div> */}

      <MultiStepForm />
    </div>
  );
}
