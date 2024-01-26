import React from "react";
import MobileMenu from "./MobileMenu";
import MobileFooter from "@/src/client/shared/Footer/MobileFooter";
import MobileNavbar from "@/src/client/shared/MobileNavbar";
import MobileHeader from "@/src/client/shared/Header/MobileHeader";
import Header from "@/src/client/shared/Header";
import TopHeader from "@/src/client/shared/Header/MobileHeader/TopHeader";

interface MobileDashboardLayoutProps {
  mobilelayoutcontent: React.JSX.Element;
}

const MobileDashboardLayout: React.FC<MobileDashboardLayoutProps> = ({
  mobilelayoutcontent,
}) => {
  return (
    <div className="pb-4">
      <TopHeader/>
            <div className="bg-[#ECEEF1] min-h-screen w-full px-2 landscape:h-full">
        <MobileMenu />
        {mobilelayoutcontent}
        <div>
          <MobileNavbar />
        </div>
      </div>
    </div>

  );
};

export default MobileDashboardLayout;
