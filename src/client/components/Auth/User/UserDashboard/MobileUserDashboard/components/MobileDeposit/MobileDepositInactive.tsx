import React from "react";
import MobileDashboardLayout from "../../shared/MobileDashboardLayout";
import DepositInner from "../../../DesktopUserDashboard/components/Deposit/Components/DepositInner";

const MobileDepositInactive = () => {

  return (
        
      <MobileDashboardLayout
        mobilelayoutcontent={
          <div>
            <DepositInner/>
          </div>
        }
      />

  );
};

export default MobileDepositInactive;
