import { memo, useCallback } from "react";
import { useState } from "react";
import { footerItems, headerItems } from "../../data/mini-sidebar-items";
import SidebarItem from "./sidebar-item";

interface MiniSidebarProps {
  isSidebarOpen: boolean;
  onSidebarToggle: () => void;
}
const MiniSidebar = ({ isSidebarOpen, onSidebarToggle }: MiniSidebarProps) => {
  const [visibleTooltips, setVisibleTooltips] = useState<
    Record<string, boolean>
  >({});
  // console.log("MiniSidebar render");

  const handleMouseEnter = useCallback((id: string) => {
    setVisibleTooltips((prev) => ({ ...prev, [id]: true }));
  }, []);

  const handleMouseLeave = useCallback((id: string) => {
    setVisibleTooltips((prev) => ({ ...prev, [id]: false }));
  }, []);

  return (
    <div className="bg-[#191515] text-white  relative border-r border-[#252121] w-14  flex items-center flex-col ">
      <div className="pt-3.5">
        <img src="/brand.svg" alt="brand-logo" className="w-6" />
      </div>

      <div className="mt-6 relative  h-full flex flex-col justify-between items-center ">
        <div>
          {headerItems.map((item) => (
            <SidebarItem
              key={item.id}
              item={item}
              isSidebarOpen={isSidebarOpen}
              onSidebarToggle={onSidebarToggle}
              visible={visibleTooltips[item.id]}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={() => handleMouseLeave(item.id)}
            />
          ))}
        </div>
        <div>
          {footerItems.map((item) => (
            <SidebarItem
              key={item.id}
              item={item}
              isSidebarOpen={isSidebarOpen}
              onSidebarToggle={onSidebarToggle}
              visible={visibleTooltips[item.id]}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={() => handleMouseLeave(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(MiniSidebar);
