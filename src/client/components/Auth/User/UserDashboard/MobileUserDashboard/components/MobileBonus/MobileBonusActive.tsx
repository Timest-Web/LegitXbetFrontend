import React from "react";
import MobileDashboardLayout from "../../shared/MobileDashboardLayout";

import BonusActiveInner from "../../../DesktopUserDashboard/components/Bonus/Components/BonusActiveInner";

const MobileBonusActive = () => {

  return (
    <div>
      <MobileDashboardLayout
        mobilelayoutcontent={
          <div>
            <BonusActiveInner/>
          </div>
        }
      />
    </div>
  );
};

export default MobileBonusActive;
