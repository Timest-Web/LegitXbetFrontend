import React from "react";
import MobileDashboardLayout from "../../shared/MobileDashboardLayout";
import ReferredUsersInner from "../../../DesktopUserDashboard/components/Referral/ReferredUsersInner";

const MobileRefferedUsers = () => {

  return (
    <div>
      <MobileDashboardLayout
        mobilelayoutcontent={
          <div className="pb-16">
            <ReferredUsersInner/>
          </div>
        }
      />
    </div>
  );
};

export default MobileRefferedUsers;
