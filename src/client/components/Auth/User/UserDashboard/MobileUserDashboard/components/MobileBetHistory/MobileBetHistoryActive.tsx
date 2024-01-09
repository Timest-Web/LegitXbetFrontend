import React from "react";
import MobileDashboardLayout from "../../shared/MobileDashboardLayout";
import BetHistoryActiveInner from "../../../DesktopUserDashboard/components/BetHistory/Components/BetHistoryActiveInner";

const MobileBetHistoryActive = () => {
  return (
    <MobileDashboardLayout
      mobilelayoutcontent={
        <div>
          <BetHistoryActiveInner/>
        </div>
      }
    />
  );
};

export default MobileBetHistoryActive;
