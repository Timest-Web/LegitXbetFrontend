import React, { ReactNode } from "react";
import { NotificationsBell, GenericUser } from "@heathmont/moon-icons-tw";
import AdminMenu from "./AdminMenu";


interface AdminDashboardLayoutProps {
  children: ReactNode;
}

const AdminDashboardLayout: React.FC<AdminDashboardLayoutProps> = ({
  children,
}) => {
  return (
    <div className="flex bg-gray-100">
      <AdminMenu/>
      <section className="w-[100%] flex flex-col h-screen ">
        <div className="bg-black h-20 p-6 flex justify-between ">
          <input className="bg-searchIcon bg-no-repeat bg-[center_left_1rem] border-[#292D32] border w-[12rem] md:w-[14.0625rem] h-[2.5625rem]  pl-12 bg-[#ECEEF1] focus:outline-none " />
          <div className="flex space-x-4 text-white">
            <NotificationsBell className="text-white text-moon-24 items-end justify-end" />
            <GenericUser className="text-white text-moon-24 items-end justify-end" />
          </div>
        </div>
        <div className="overflow-y-auto">{children}</div>
      </section>
    </div>
  );
};

export default AdminDashboardLayout;
