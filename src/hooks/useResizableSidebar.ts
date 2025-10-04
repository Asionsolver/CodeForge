import { useState, useRef, useCallback } from "react";
import { useInitialWidth } from "./useInitialWidth";

type InitialWidth = number | (() => number);
// Custom hook for resizing sidebar
export const useResizableSidebar = (initialWidth: InitialWidth) => {
  const initialCalculatedWidth = useInitialWidth(initialWidth);

  const [width, setWidth] = useState(initialCalculatedWidth);

  const [isResizing, setIsResizing] = useState(false);

  const [tooltipWidth, setTooltipWidth] = useState(initialCalculatedWidth);

  const animationFrameId = useRef<number | null>(null);

  const startResizing = useCallback(
    (e: React.MouseEvent) => {
      const startX = e.clientX;
      const startWidth = width;
      const containerWidth = document.documentElement.clientWidth;

      setIsResizing(true);
      setTooltipWidth(startWidth);

      const doDrag = (e: MouseEvent) => {
        if (animationFrameId.current)
          cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = requestAnimationFrame(() => {
          const deltaX = ((e.clientX - startX) / containerWidth) * 100;
          const newWidth = startWidth + deltaX;
          if (newWidth >= 10 && newWidth <= 80) {
            setWidth(newWidth);
            setTooltipWidth(newWidth);
          }
        });
      };

      const stopDrag = () => {
        document.removeEventListener("mousemove", doDrag);
        document.removeEventListener("mouseup", stopDrag);
        if (animationFrameId.current)
          cancelAnimationFrame(animationFrameId.current);
        setIsResizing(false);
      };

      document.addEventListener("mousemove", doDrag);
      document.addEventListener("mouseup", stopDrag);
    },
    [width]
  );

  return { width, setWidth, isResizing, tooltipWidth, startResizing };
};
