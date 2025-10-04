import Sidebar from "@/components/sidebar";
import MainContent from "@/components/main-content";
import { useState, useEffect } from "react";

import MiniSidebar from "@/components/mini-sidebar";
import { useResizableSidebar } from "@/hooks/useResizableSidebar";
import { useCallback } from "react";

const FileExplorer = () => {
  const {
    width: sidebarWidth,
    isResizing,
    tooltipWidth,
    startResizing,
  } = useResizableSidebar(() => {
    const savedWidth = localStorage.getItem("sidebar-width");
    return savedWidth !== null ? parseFloat(savedWidth) : 20;
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(() => {
    const savedOpen = localStorage.getItem("sidebar-open");
    return savedOpen !== null ? JSON.parse(savedOpen) : true; // default open
  });

  // Save width to localStorage whenever it changes
  useEffect(() => {
    if (isSidebarOpen) {
      const handle = setTimeout(() => {
        localStorage.setItem("sidebar-width", sidebarWidth.toString()); // convert to string
      }, 300); // debounce to avoid excessive writes
      return () => clearTimeout(handle);
    }
  }, [sidebarWidth, isSidebarOpen]);

  // Save open/close state to localStorage
  useEffect(() => {
    localStorage.setItem("sidebar-open", JSON.stringify(isSidebarOpen));
  }, [isSidebarOpen]);

  const handleSidebarToggle = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, []);

  return (
    <div className="flex h-screen w-full">
      <MiniSidebar
        onSidebarToggle={handleSidebarToggle}
        isSidebarOpen={isSidebarOpen}
      />

      {isSidebarOpen && (
        <Sidebar
          width={sidebarWidth}
          handleResize={startResizing}
          isResizing={isResizing}
          tooltipWidth={tooltipWidth}
        />
      )}
      <MainContent />
    </div>
  );
};

export default FileExplorer;
