import React from "react";
import SideBar from "./SideBar";
import HotlineBar from "./HotlineBar";
import RightSection from "@/src/client/components/LandingPage/DesktopLandingPage/MainSection/RightSection";
import BannerSection from "./BannerSection";

const LayoutDashboard = ({ content }: { content: React.JSX.Element }) => {
  return (
      <div className="bg-[#ECEEF1] w-full h-full pt-24 pb-12">
        <div className=" w-full flex justify-evenly">
          <section>
            <SideBar /> 
            <HotlineBar />
          </section>
          <section className=" w-[63%]" >{content}</section>
          <section >
            <BannerSection/>
          </section>
        </div>
      </div>
  );
};

export default LayoutDashboard;
