import React from "react";
import MobileDashboardLayout from "../../shared/MobileDashboardLayout";
import SupportActiveInner from "../../../DesktopUserDashboard/components/Support/Components/SupportActiveInner";

const MobileSupportActive = () => {
  return (
    <div>
      <MobileDashboardLayout
        mobilelayoutcontent={
          <div>
            <SupportActiveInner/>
          </div>
        }
      />
    </div>
  );
};

export default MobileSupportActive;
