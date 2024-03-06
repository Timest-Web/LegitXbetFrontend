import React from "react";
import MobileDashboardLayout from "../../shared/MobileDashboardLayout";
import DepositActiveContentInner from "../../../DesktopUserDashboard/components/Deposit/Components/DepositActive/DepositActiveContentInner";

const MobileDepositActive = () => {

  return (
        
      <MobileDashboardLayout
        mobilelayoutcontent={
          <div className="pb-20">
            <h3 className=" font-bold text-lg mb-4 ">Deposit History</h3>
            <DepositActiveContentInner/>
          </div>
        }
      />

  );
};

export default MobileDepositActive;
