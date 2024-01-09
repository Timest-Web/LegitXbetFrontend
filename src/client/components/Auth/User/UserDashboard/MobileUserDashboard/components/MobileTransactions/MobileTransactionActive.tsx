import React from "react";
import MobileDashboardLayout from "../../shared/MobileDashboardLayout";
import TransactionActiveInner from "../../../DesktopUserDashboard/components/Transactions/Components/TransactionActiveInner";

const MobileTransactionActive = () => {
  return (
    <div>
      <MobileDashboardLayout
        mobilelayoutcontent={
          <div>
            <TransactionActiveInner />
          </div>
        }
      />
    </div>
  );
};

export default MobileTransactionActive;
