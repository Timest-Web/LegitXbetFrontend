import React from "react";
import MobileDashboardLayout from "../../shared/MobileDashboardLayout";
import TransactionInner from "../../../DesktopUserDashboard/components/Transactions/Components/TransactionInner";

const MobileTransaction = () => {
  return (
    <div>
      <MobileDashboardLayout
        mobilelayoutcontent={
          <div className="pb-16">
            <TransactionInner/>
          </div>
        }
      />
    </div>
  );
};

export default MobileTransaction;
