import React from "react";
import SideBarBtnElement from "./SideBarBtnElement";
import { FormElements } from "./FormElements";

function DesignerSidebar() {
  return (
    <aside className="w-[400px] max-w-[400px] flex flex-col flex-grow gap-2 border-l-2 border-muted p-4 bg-background overflow-y-auto h-full">
      elements
      <SideBarBtnElement formElement={FormElements.TextField} />
    </aside>
  );
}

export default DesignerSidebar;
