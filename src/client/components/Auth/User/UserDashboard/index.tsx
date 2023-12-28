import React from "react";
import LayoutDashboard from "./Constants/LayoutDashboard";
import Overview from "./Overview/Components/Overview";
import { DM_Sans } from "next/font/google";

const dmsans = DM_Sans({
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-dm_sans",
});

const UserDashboard = () => {
  return (
    <div className={`${dmsans.variable} font-dmsans`}>
      <LayoutDashboard content={<Overview />} />
    </div>
  );
};

export default UserDashboard;
