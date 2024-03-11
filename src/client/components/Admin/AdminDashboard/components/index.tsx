import Image from "next/image";
import React from "react";
import logo from "../../../../../assets/logo1.png";
import { NotificationsBell, GenericUser, ShopWallet, GenericTicket, GenericBookmark, TimeSandglass, GenericMultiBet, ShopCashback } from "@heathmont/moon-icons-tw";
import AdminDashboardLayout from "./shared/AdminDashboardLayout";
import { Inter, Roboto_Mono } from "next/font/google";
import ReuseTab from "../../../Auth/User/UserDashboard/DesktopUserDashboard/shared/ReuseTab";
import AdminReuseTab from "./shared/AdminReuseTab";
import AdminReuseTabs from "./shared/AdminReuseTabs";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

const AdminDashboard = () => {
  return (
    <AdminDashboardLayout>
      <div className="p-6">
        <h2 className="font-bold text-lg mb-6">Dashboard</h2>
        <AdminReuseTabs/>
      </div>
    </AdminDashboardLayout>
  );
};

export default AdminDashboard;
