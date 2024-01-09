import React from "react";
import MobileDashboardLayout from "../../shared/MobileDashboardLayout";
import UpdatePass from "../../../DesktopUserDashboard/components/UserProfile/Components/InnerComps/UpdatePass";
import MultiFactorInner from "../../../DesktopUserDashboard/components/UserProfile/Components/InnerComps/MultiFactorInner";

const MobileMultiFactor = () => {
  return (
    <MobileDashboardLayout
      mobilelayoutcontent={
        <div>
          <MultiFactorInner/>
        </div>
      }
    />
  );
};

export default MobileMultiFactor;
