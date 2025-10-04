const Tooltip = ({ width }: { width: number }) => {
  return (
    <div className="absolute bg-gray-600 px-1 py-1 -bottom-6 left-[3px] z-20 text-white   text-xs rounded pointer-events-none -translate-x-1/2 -translate-y-full">
      {width.toFixed(1)}%
    </div>
  );
};

export default Tooltip;
