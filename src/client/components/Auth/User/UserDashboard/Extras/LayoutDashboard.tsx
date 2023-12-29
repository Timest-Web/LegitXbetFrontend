import React from "react";
import SideBar from "./SideBar";
import HotlineBar from "./HotlineBar";
// import CategoryBetMenu from "@/src/client/shared/Header/CategoryBetMenu";
import BannerSection from './BannerSection';
import CategoryBetMenu from "@/src/client/shared/Header/DesktopHeader/CategoryBetMenu/CategoryBetMenu";

const LayoutDashboard = ({ content }: { content: React.JSX.Element }) => {
  return (
    <div>
      <CategoryBetMenu />
      <div className="bg-[#ECEEF1] w-[94.5rem] h-[66.375rem] p-4">
        <div className="flex space-x-8">
          <section>
            <SideBar />
            <HotlineBar />
          </section>
          <section>{content}</section>
          <section>
            <BannerSection />
          </section>
        </div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
