import React from "react";
import SideBar from "../Reusables/SideBar";
import HotlineBar from "../Reusables/HotlineBar";
import CategoryBetMenu from "@/src/client/shared/Header/CategoryBetMenu";
import BannerSection from "../Reusables/BannerSection";

const LayoutDashboard = ({content}: {content:React.JSX.Element} ) => {
  return (
    <div>
      <CategoryBetMenu />
      <div className="bg-[#ECEEF1] h-[1062px] p-4 font-sans ">
        <div className=" flex space-x-8">
          <section>
            <SideBar />
            <HotlineBar />
          </section>
          <section>
            {content}
          </section>
          <section>
            <BannerSection/>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LayoutDashboard;