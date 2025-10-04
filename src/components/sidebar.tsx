import { memo, type MouseEvent } from "react";
import Tooltip from "./tooltip";
interface SidebarProps {
  width: number;
  handleResize: (e: MouseEvent) => void;
  isResizing: boolean;
  tooltipWidth: number;
}
const Sidebar = memo(
  ({ width, handleResize, isResizing, tooltipWidth }: SidebarProps) => {
    // console.log("Sidebar render");
    return (
      <div
        className="bg-[#191515] text-white  relative border-r border-[#252121] "
        style={{
          width: `${width}%`,
        }}
      >
        <div className="p-4 text-xs text-gray-300 uppercase">📂 Explorer</div>

        <div
          onMouseDown={handleResize}
          className="absolute top-0 right-0 w-1 h-full cursor-col-resize  hover:bg-blue-500 active:bg-blue-500 "
        >
          {isResizing && <Tooltip width={tooltipWidth} />}
        </div>
      </div>
    );
  }
);

export default Sidebar;
