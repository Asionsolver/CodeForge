import { memo } from "react";
import { useState } from "react";
import { RxDashboard } from "react-icons/rx";

interface MiniSidebarProps {
  isSidebarOpen: boolean;
  onSidebarToggle: () => void;
}
const MiniSidebar = ({ isSidebarOpen, onSidebarToggle }: MiniSidebarProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  console.log("MiniSidebar render");

  return (
    <div className="bg-[#191515] text-white  relative border-r border-[#252121] w-14  flex items-center flex-col ">
      <div className="pt-3.5">
        <img src="/brand.svg" alt="brand-logo" className="w-6" />
      </div>

      <div className="mt-6 relative">
        <div
          className="bg-[#272323] p-2 rounded-md cursor-pointer"
          onClick={onSidebarToggle}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <RxDashboard size={20} />
        </div>
        {showTooltip && (
          <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[#272323] text-white text-xs rounded py-1 px-2 z-10">
            {isSidebarOpen ? "Collapse" : "Expand"} Sidebar
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(MiniSidebar);
