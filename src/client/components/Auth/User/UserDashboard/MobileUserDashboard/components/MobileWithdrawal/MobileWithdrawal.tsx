import React from "react";
import MobileDashboardLayout from "../../shared/MobileDashboardLayout";
import ProfileUpdate from "../../../DesktopUserDashboard/components/UserProfile/Components/InnerComps/ProfileUpdate";
import WithdrawalInner from "../../../DesktopUserDashboard/components/Withdrawal/Components/WithdrawalInner";

const MobileWithdrawal = () => {

  return (
    <div className="mb-12">
      <MobileDashboardLayout
        mobilelayoutcontent={
            <WithdrawalInner/>
        }
      />
    </div>
  );
};

export default MobileWithdrawal;
