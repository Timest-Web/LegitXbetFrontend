import React from "react";
import MobileDashboardLayout from "../../shared/MobileDashboardLayout";
import DepositPaystackInner from "../../../DesktopUserDashboard/components/Deposit/Components/DepositChannels/DepositPayStackInner";

const MobilePaystack = () => {

  return (
        
      <MobileDashboardLayout
        mobilelayoutcontent={
          <div className="pb-24">
            <DepositPaystackInner/>
          </div>
        }
      />

  );
};

export default MobilePaystack;
