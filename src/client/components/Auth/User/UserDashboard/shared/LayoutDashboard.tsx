import React from "react";
import SideBar from "./SideBar";
import HotlineBar from "./HotlineBar";
// import CategoryBetMenu from "@/src/client/shared/Header/CategoryBetMenu";
import BannerSection from './BannerSection';
import CategoryBetMenu from "@/src/client/shared/Header/DesktopHeader/CategoryBetMenu/CategoryBetMenu";

const LayoutDashboard = ({ content }: { content: React.JSX.Element }) => {
  return (
    <div className="">
      <CategoryBetMenu />
      <div className="bg-[#ECEEF1] w-full h-full pt-3">
        <div className=" w-full flex justify-evenly">
          <section>
            <SideBar /> 
            <HotlineBar />
          </section>
          <section className=" w-[63%]" >{content}</section>
          <section >
            <BannerSection />
          </section>
        </div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
