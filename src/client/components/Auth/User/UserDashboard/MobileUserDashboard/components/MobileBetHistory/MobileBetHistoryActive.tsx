import React from "react";
import MobileDashboardLayout from "../../shared/MobileDashboardLayout";
import BetHistoryActiveInner from "../../../DesktopUserDashboard/components/BetHistory/Components/BetHistoryActiveInner";
import BetHistoryPopUp from "../../../DesktopUserDashboard/components/BetHistory/Components/BetHistoryPopUp";

const MobileBetHistoryActive = () => {
  return (
    <MobileDashboardLayout
      mobilelayoutcontent={
        <div className="pb-16">
          <BetHistoryActiveInner/>
         
        </div>
      }
    />
  );
};

export default MobileBetHistoryActive;
