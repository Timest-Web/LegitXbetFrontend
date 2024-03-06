import React from "react";
import MobileDashboardLayout from "../../shared/MobileDashboardLayout";
import ReferralCommisionsInner from "../../../DesktopUserDashboard/components/Referral/ReferralCommisionsInner";

const MobileRefferalCommision = () => {
  return (
    <div>
      <MobileDashboardLayout
        mobilelayoutcontent={
          <div className="pb-16">
            <ReferralCommisionsInner />
          </div>
        }
      />
    </div>
  );
};

export default MobileRefferalCommision;
