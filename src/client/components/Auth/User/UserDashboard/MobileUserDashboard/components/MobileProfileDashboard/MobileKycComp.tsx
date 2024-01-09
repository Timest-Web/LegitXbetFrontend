import React from "react";
import MobileDashboardLayout from "../../shared/MobileDashboardLayout";
import KycComp from "../../../DesktopUserDashboard/components/UserProfile/Components/InnerComps/KycComp";

const MobileKycComp = () => {

  return (
        
      <MobileDashboardLayout
        mobilelayoutcontent={
          <div>
            <KycComp/>
          </div>
        }
      />

  );
};

export default MobileKycComp;
