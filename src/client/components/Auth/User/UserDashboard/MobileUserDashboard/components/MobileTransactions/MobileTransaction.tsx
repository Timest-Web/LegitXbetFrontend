import React from "react";
import MobileDashboardLayout from "../../shared/MobileDashboardLayout";
import TransactionInner from "../../../DesktopUserDashboard/components/Transactions/Components/TransactionInner";

const MobileTransaction = () => {
  return (
    <div>
      <MobileDashboardLayout
        mobilelayoutcontent={
          <div>
            <TransactionInner/>
          </div>
        }
      />
    </div>
  );
};

export default MobileTransaction;
