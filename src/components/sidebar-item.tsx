import type { Item } from "data/mini-sidebar-items";
import { memo } from "react";

interface SidebarItemProps {
  item: Item;
  isSidebarOpen: boolean;
  onSidebarToggle: () => void;
  visible: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const SidebarItem = ({
  item,
  isSidebarOpen,
  onSidebarToggle,
  visible,
  onMouseEnter,
  onMouseLeave,
}: SidebarItemProps) => {
  const IconComponent = item.icon;
  const tooltipText =
    typeof item.tooltip === "function"
      ? item.tooltip(isSidebarOpen)
      : item.tooltip;

  console.log("SidebarItem render:", item.id);
  return (
    <div className="relative my-2">
      <button
        onClick={() => item.onClick(onSidebarToggle)}
        className="bg-[#272323] p-2 rounded-md cursor-pointer"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        aria-label={tooltipText} // Accessibility
      >
        <IconComponent size={20} />
      </button>
      {visible && (
        <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[#272323] text-white text-xs rounded py-1 px-2 z-10">
          {tooltipText}
        </div>
      )}
    </div>
  );
};
// ✅ Custom comparison — ignore function props
const arePropsEqual = (
  prevProps: SidebarItemProps,
  nextProps: SidebarItemProps
): boolean => {
  const isTooltipFunction = typeof nextProps.item.tooltip === "function";

  let equal =
    prevProps.item.id === nextProps.item.id &&
    prevProps.visible === nextProps.visible;

  // Only check isSidebarOpen if tooltip is a function
  if (isTooltipFunction) {
    equal = equal && prevProps.isSidebarOpen === nextProps.isSidebarOpen;
  }

  return equal;
};

export default memo(SidebarItem, arePropsEqual);
