import React from "react";
import MobileDashboardLayout from "../../shared/MobileDashboardLayout";
import DepositInner from "../../../DesktopUserDashboard/components/Deposit/Components/DepositInner";

const MobileDepositInactive = () => {

  return (
        
      <MobileDashboardLayout
        mobilelayoutcontent={
          <div className="pb-12">
            <DepositInner/>
          </div>
        }
      />

  );
};

export default MobileDepositInactive;
