import React from "react";
import MobileMenu from "./MobileMenu";
import MobileFooter from "@/src/client/shared/Footer/MobileFooter";
import MobileNavbar from "@/src/client/shared/MobileNavbar";
import MobileHeader from "@/src/client/shared/Header/MobileHeader";

interface MobileDashboardLayoutProps {
  mobilelayoutcontent: React.JSX.Element;
}

const MobileDashboardLayout: React.FC<MobileDashboardLayoutProps> = ({
  mobilelayoutcontent,
}) => {
  return (
      <div className="bg-[#ECEEF1] w-full px-2">
        <MobileMenu />
        {mobilelayoutcontent}
        <div>
          <MobileNavbar />
        </div>
      </div>
  );
};

export default MobileDashboardLayout;
