import React from "react";
import MobileDashboardLayout from "../../shared/MobileDashboardLayout";
import UpdatePass from "../../../DesktopUserDashboard/components/UserProfile/Components/InnerComps/UpdatePass";

const MobileUpdatePassword = () => {
  return (
    <MobileDashboardLayout
      mobilelayoutcontent={
        <div>
          <UpdatePass />
        </div>
      }
    />
  );
};

export default MobileUpdatePassword;
