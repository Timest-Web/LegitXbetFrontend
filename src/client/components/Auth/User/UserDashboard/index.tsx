import React from "react";
import LayoutDashboard from "./shared/LayoutDashboard";
import Overview from "./Overview/Components/Overview";




const UserDashboard = () => {
  return (
    <div className=" font-sans " >
      <LayoutDashboard content={<Overview />} />
    </div>
  );
};

export default UserDashboard;
