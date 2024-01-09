import React from "react";
import MobileDashboardLayout from "../../shared/MobileDashboardLayout";
import BonusInner from "../../../DesktopUserDashboard/components/Bonus/Components/BonusInner";

const MobileBonusInactive = () => {

  return (
    <div>
      <MobileDashboardLayout
        mobilelayoutcontent={
          <div>
            <BonusInner/>
          </div>
        }
      />
    </div>
  );
};

export default MobileBonusInactive;
