import React from "react";
import MobileDashboardLayout from "../../shared/MobileDashboardLayout";
import BonusInner from "../../../DesktopUserDashboard/components/Bonus/Components/BonusInner";

const MobileBonusInactive = () => {

  return (
    <div>
      <MobileDashboardLayout
        mobilelayoutcontent={
          <div className="pb-16">
            <BonusInner/>
          </div>
        }
      />
    </div>
  );
};

export default MobileBonusInactive;
