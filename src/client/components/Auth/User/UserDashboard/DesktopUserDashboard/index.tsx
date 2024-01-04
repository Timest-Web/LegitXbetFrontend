import React from "react";
import LayoutDashboard from "./shared/LayoutDashboard";
import Overview from "./components/Overview/Components/Overview";


const DesktopUserDashboard = () => {
  return (
    <div className=" font-sans " >
      <LayoutDashboard content={<Overview />} />
    </div>
  );
};

export default DesktopUserDashboard;
