import { type IconType } from "react-icons";
import { CgProfile } from "react-icons/cg";
import { RxDashboard, RxGear } from "react-icons/rx";

export interface Item {
  id: string;
  icon: IconType;
  tooltip: string | ((isSidebarOpen: boolean) => string);
  onClick: (onSidebarToggle: () => void, onSettingClick?: () => void) => void;
}

export const headerItems: Item[] = [
  {
    id: "dashboard",
    icon: RxDashboard,
    tooltip: (isSidebarOpen: boolean) =>
      `${isSidebarOpen ? "Collapse" : "Expand"} Sidebar`,
    onClick: (onSidebarToggle) => onSidebarToggle(),
  },
];

export const footerItems: Item[] = [
  {
    id: "profile",
    icon: CgProfile,
    tooltip: "Profile",
    onClick: (_, onProfileClick) => onProfileClick?.(),
  },
  {
    id: "settings",
    icon: RxGear,
    tooltip: "Settings",
    onClick: (_, onSettingsClick) => onSettingsClick?.(),
  },
];
