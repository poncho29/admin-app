import { useState } from "react";

import { Navbar } from "../..";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarLogout } from "./SidebarLogout";

export const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <section
      className={`
        h-full flex flex-col px-4 pb-6 bg-sky-800 overflow-y-auto
        transition-all duration-250 ${showSidebar ? 'w-[260px]' : 'w-[100px]'}
      `}
    >
      <SidebarHeader showSidebar={showSidebar} onShowSidebar={setShowSidebar} />

      <Navbar showSidebar={showSidebar} />

      <SidebarLogout showSidebar={showSidebar} />
    </section>
  );
};
