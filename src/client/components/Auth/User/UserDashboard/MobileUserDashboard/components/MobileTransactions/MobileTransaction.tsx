import React from "react";
import MobileDashboardLayout from "../../shared/MobileDashboardLayout";
import transactionData from "../../constant/MOCK_DATA (7).json";
import TransactionCard from "../../../DesktopUserDashboard/components/Transactions/Components/TransactionCard";
import TransactionInner from "../../../DesktopUserDashboard/components/Transactions/Components/TransactionInner";

const MobileTransaction = () => {
  return (
    <div>
      <MobileDashboardLayout
        mobilelayoutcontent={
          <TransactionInner/>
        }
      />
    </div>
  );
};

export default MobileTransaction;
