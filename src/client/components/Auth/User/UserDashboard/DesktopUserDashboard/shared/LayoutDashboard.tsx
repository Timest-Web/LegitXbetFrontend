import React from "react";
import SideBar from "./SideBar";
import HotlineBar from "./HotlineBar";
import RightSection from "@/src/client/components/LandingPage/DesktopLandingPage/MainSection/RightSection";
import BannerSection from "./BannerSection";
import Header from "@/src/client/shared/Header";

const LayoutDashboard = ({ content }: { content: React.JSX.Element }) => {
  return (
    <div> <Header/>    <div className="bg-[#ECEEF1] w-full h-full pt-24 pb-24">
        <div className=" w-full flex justify-evenly">
          <section>
            <SideBar /> 
            <HotlineBar />
          </section>
          <section className="w-[70%]" >{content}</section>
          <section >
            {/* <BannerSection/> */}
          </section>
        </div>
      </div></div>
 
  );
};

export default LayoutDashboard;
