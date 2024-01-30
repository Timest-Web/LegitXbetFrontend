import React from "react";
import MobileMenu from "./MobileMenu";
import MobileNavbar from "@/src/client/shared/MobileNavbar";
import TopHeader from "@/src/client/shared/Header/MobileHeader/TopHeader";

interface MobileDashboardLayoutProps {
  mobilelayoutcontent: React.JSX.Element;
}

const MobileDashboardLayout: React.FC<MobileDashboardLayoutProps> = ({
  mobilelayoutcontent,
}) => {
  return (
    <div className="pb-4 min-h-screen bg-[#ECEEF1]">
      <TopHeader />
      <div className=" w-full px-2 landscape:h-full">
        <MobileMenu />
        <div>{mobilelayoutcontent}</div>
        <div>
          <MobileNavbar />
        </div>
      </div>
    </div>
  );
};

export default MobileDashboardLayout;
