import React from "react";
import MobileDashboardLayout from "../../shared/MobileDashboardLayout";
import DepositFlutterwaveInner from "../../../DesktopUserDashboard/components/Deposit/Components/DepositChannels/DepositFlutterwaveInner";

const MobileFlutterwave = () => {

  return (
        
      <MobileDashboardLayout
        mobilelayoutcontent={
          <div className="pb-24">
            <DepositFlutterwaveInner/>
          </div>
        }
      />

  );
};

export default MobileFlutterwave;
