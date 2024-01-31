import React from "react";
import MobileDashboardLayout from "../../shared/MobileDashboardLayout";
import TransactionActiveInner from "../../../DesktopUserDashboard/components/Transactions/Components/TransactionActiveInner";

const MobileTransactionActive = () => {
  return (
    <div>
      <MobileDashboardLayout
        mobilelayoutcontent={
          <div className="pb-16">
            <TransactionActiveInner />
          </div>
        }
      />
    </div>
  );
};

export default MobileTransactionActive;
