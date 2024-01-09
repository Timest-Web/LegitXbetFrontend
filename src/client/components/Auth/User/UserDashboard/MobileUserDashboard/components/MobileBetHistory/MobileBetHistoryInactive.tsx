import React from "react";
import MobileDashboardLayout from "../../shared/MobileDashboardLayout";
import BetInnerComp from "../../../DesktopUserDashboard/components/BetHistory/Components/BetInnerComp";

const MobileBetHistoryInactive = () => {
  return (
    <MobileDashboardLayout
      mobilelayoutcontent={
        <div>
          <BetInnerComp/>
        </div>
      }
    />
  );
};

export default MobileBetHistoryInactive;
