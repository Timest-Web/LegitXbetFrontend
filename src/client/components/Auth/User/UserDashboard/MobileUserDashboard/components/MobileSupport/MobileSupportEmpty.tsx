import React from "react";
import MobileDashboardLayout from "../../shared/MobileDashboardLayout";
import EmptySupportInner from "../../../DesktopUserDashboard/components/Support/Components/EmptySupportInner";

const MobileSupportEmpty = () => {

  return (
    <div>
      <MobileDashboardLayout
        mobilelayoutcontent={
          <div className=""><EmptySupportInner/></div>  
        }
      />
    </div>
  );
};

export default MobileSupportEmpty;
