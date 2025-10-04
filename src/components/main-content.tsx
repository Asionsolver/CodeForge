import { memo } from "react";

const MainContent = () => {
  console.log("MainContent render");
  return (
    <div className="bg-[#191515] text-white relative flex-1  p-6">
      <h1 className="text-2xl font-bold mb-4">Main Content</h1>
      <p>
        Drag the sidebar’s right edge to resize. Width is limited between
        <b> 150px</b> and <b>500px</b>.
      </p>
    </div>
  );
};

export default memo(MainContent);
