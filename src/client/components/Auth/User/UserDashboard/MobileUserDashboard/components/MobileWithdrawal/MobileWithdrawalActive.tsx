import React from "react";
import MobileDashboardLayout from "../../shared/MobileDashboardLayout";
import WithdrawalActiveInner from "../../../DesktopUserDashboard/components/Withdrawal/Components/WithdrawActiveInner";

const MobileWithdrawalActive = () => {

  return (
    <div>
      <MobileDashboardLayout
        mobilelayoutcontent={
          <div>
            <WithdrawalActiveInner/>
          </div>
        }
      />
    </div>
  );
};

export default MobileWithdrawalActive;
