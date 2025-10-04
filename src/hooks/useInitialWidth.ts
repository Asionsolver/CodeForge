import { useRef } from "react";
type InitialWidth = number | (() => number);
export const useInitialWidth = (initialWidth: InitialWidth) => {
  const calculatedWidth = useRef(() => {
    if (typeof initialWidth === "function") {
      return initialWidth();
    }
    return initialWidth;
  }).current();

  return calculatedWidth;
};
