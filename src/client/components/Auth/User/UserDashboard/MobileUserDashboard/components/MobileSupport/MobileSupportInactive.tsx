import React from "react";
import MobileDashboardLayout from "../../shared/MobileDashboardLayout";
import SupportInactive from "../../../DesktopUserDashboard/components/Support/Components/SupportInactive";

const MobileSupportInactive = () => {
  return (
    <div>
      <MobileDashboardLayout mobilelayoutcontent={<SupportInactive />} />
    </div>
  );
};

export default MobileSupportInactive;
