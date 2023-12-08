import React from "react";
import Layout from "../../../Layout";
import SideBar from "../Reusables/SideBar";
import HotlineBar from "../Reusables/HotlineBar";
import CategoryBetMenu from "@/src/client/shared/Header/CategoryBetMenu";


const LayoutDashbord = () => {
  return (
    <div className="bg-[#ECEEF1] h-[1062px] ">
    <CategoryBetMenu />
      <SideBar/>
      <HotlineBar/>
    </div>
  
    
  );
};

export default LayoutDashbord;
