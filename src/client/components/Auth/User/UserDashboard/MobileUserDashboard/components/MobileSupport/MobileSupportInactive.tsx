import React from "react";
import MobileDashboardLayout from "../../shared/MobileDashboardLayout";
import ProfileUpdate from "../../../DesktopUserDashboard/components/UserProfile/Components/InnerComps/ProfileUpdate";
import SupportInactive from "../../../DesktopUserDashboard/components/Support/Components/SupportInactive";

const MobileSupportInactive = () => {

  return (
    <div>
      <MobileDashboardLayout
        mobilelayoutcontent={
          <div className="pb-16"><SupportInactive/></div>  
        }
      />
    </div>
  );
};

export default MobileSupportInactive;
