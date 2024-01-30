import React from "react";
import MobileDashboardLayout from "../../shared/MobileDashboardLayout";
import TransactionInner from "../../../DesktopUserDashboard/components/Transactions/Components/TransactionInner";

const MobileTransaction = () => {
  return (
    <div>
      <MobileDashboardLayout
        mobilelayoutcontent={
          <div className="">
            {/* <TransactionInner/> */}
            <div className="bg-black text-white text-lg font-bold p-2 w-full mb-3">
              Transactions
            </div>
            <div className="bg-white w-[99.5%] flex justify-between p-3">
              <div>
                <p>Deposit</p>
                <p className="text-xs space-x-3">
                  30/01/2023<span>19:45</span>
                </p>
              </div>
              <p>+1,000</p>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default MobileTransaction;
