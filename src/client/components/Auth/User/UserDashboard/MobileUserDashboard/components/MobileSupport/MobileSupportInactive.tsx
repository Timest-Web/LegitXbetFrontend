import React from "react";
import MobileDashboardLayout from "../../shared/MobileDashboardLayout";
import SupportInactive from "../../../DesktopUserDashboard/components/Support/Components/SupportInactive";

const MobileSupportInactive = () => {
  return (
    <div className="mb-16">
      <MobileDashboardLayout mobilelayoutcontent={<SupportInactive />} />
    </div>
  );
};

export default MobileSupportInactive;
