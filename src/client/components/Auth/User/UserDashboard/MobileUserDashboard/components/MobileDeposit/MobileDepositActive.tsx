import React from "react";
import MobileDashboardLayout from "../../shared/MobileDashboardLayout";
import DepositActiveContentInner from "../../../DesktopUserDashboard/components/Deposit/Components/DepositActive/DepositActiveContentInner";

const MobileDepositActive = () => {

  return (
        
      <MobileDashboardLayout
        mobilelayoutcontent={
          <div className="pb-12">
            <DepositActiveContentInner/>
          </div>
        }
      />

  );
};

export default MobileDepositActive;
