import React from "react";
import MobileDashboardLayout from "../../shared/MobileDashboardLayout";
import WithdrawalActiveInner from "../../../DesktopUserDashboard/components/Withdrawal/Components/WithdrawActiveInner";

const MobileWithdrawalActive = () => {
  return (
    <div className="mb-16">
      <MobileDashboardLayout mobilelayoutcontent={<WithdrawalActiveInner />} />
    </div>
  );
};

export default MobileWithdrawalActive;
