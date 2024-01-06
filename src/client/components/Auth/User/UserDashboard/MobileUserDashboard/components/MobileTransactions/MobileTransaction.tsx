import React from "react";
import MobileDashboardLayout from "../../shared/MobileDashboardLayout";
import AllBetTable from "../../../DesktopUserDashboard/shared/InactiveTable";
import TransactionInactiveHeader from "../../../DesktopUserDashboard/components/Transactions/Components/TransactionInactiveHeaders";

const MobileTransaction = () => {
  const headers = TransactionInactiveHeader();
  return (
    <div>
      <MobileDashboardLayout
        mobilelayoutcontent={
          <div>
            <AllBetTable
              title="Transaction History"
              headers={headers}
              noBetsMessage="No transactions recorded"
              placeBetButtonText={undefined}
            />
          </div>
        }
      />
    </div>
  );
};

export default MobileTransaction;
