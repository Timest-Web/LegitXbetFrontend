import React from "react";
import LayoutDashboard from "../Reusables/LayoutDashboard";
import Overview from "./Overview/Overview";
import { DM_Sans } from "next/font/google";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm_sans",
});

const UserDashboard = () => {
  return (
    <div className={`${dm_sans.variable} font-dm-sans`}>
      <LayoutDashboard content={<Overview />} />
    </div>
  );
};

export default UserDashboard;
