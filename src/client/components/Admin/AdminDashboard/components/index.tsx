import Image from "next/image";
import React from "react";
import logo from "../../../../../assets/logo1.png";
import { NotificationsBell, GenericUser } from "@heathmont/moon-icons-tw";

const AdminDashboard = () => {
  return (
    <div className="flex">
      <div className="bg-black w-[20%] h-screen px-4 pt-6">
        <Image src={logo} alt="logo" />
      </div>
      <hr className="bg-white w-[0.09rem] rotate-90 "></hr>
      <div className="bg-black h-20 w-[80%] p-6 flex justify-between ">
        <input className="bg-searchIcon bg-no-repeat bg-[center_left_1rem] border-[#292D32] border w-[12rem] md:w-[14.0625rem] h-[2.5625rem] rounded-[35px] pl-12 bg-[#ECEEF1] focus:outline-none "/>
        <div className="flex space-x-4 text-white">
          <NotificationsBell className="text-white text-moon-24 items-end justify-end" />
          <GenericUser className="text-white text-moon-24 items-end justify-end" />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
