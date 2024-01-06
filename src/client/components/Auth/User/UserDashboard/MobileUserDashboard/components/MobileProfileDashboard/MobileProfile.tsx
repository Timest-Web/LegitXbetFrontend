import React from "react";
import MobileDashboardLayout from "../../shared/MobileDashboardLayout";
import ProfileUpdate from "../../../DesktopUserDashboard/components/UserProfile/Components/InnerComps/ProfileUpdate";

const MobileProfile = () => {

  return (
    <div>
      <MobileDashboardLayout
        mobilelayoutcontent={
          <div>
            <ProfileUpdate/>
          </div>
        }
      />
    </div>
  );
};

export default MobileProfile;
