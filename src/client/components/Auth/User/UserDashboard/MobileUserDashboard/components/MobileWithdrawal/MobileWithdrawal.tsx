import React from "react";
import MobileDashboardLayout from "../../shared/MobileDashboardLayout";
import ProfileUpdate from "../../../DesktopUserDashboard/components/UserProfile/Components/InnerComps/ProfileUpdate";
import WithdrawalInner from "../../../DesktopUserDashboard/components/Withdrawal/Components/WithdrawalInner";

const MobileWithdrawal = () => {

  return (
    <div>
      <MobileDashboardLayout
        mobilelayoutcontent={
          <div className="pb-12">
            <WithdrawalInner/>
          </div>
        }
      />
    </div>
  );
};

export default MobileWithdrawal;
