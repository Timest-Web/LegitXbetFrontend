import React from "react";
import MobileDashboardLayout from "../../shared/MobileDashboardLayout";
import NotificationInnerComp from "../../../DesktopUserDashboard/components/Overview/Components/NotificationInnerComp";

const MobileNotification = () => {

  return (
    <div>
      <MobileDashboardLayout
        mobilelayoutcontent={
          <div>
           <NotificationInnerComp/>
          </div>
        }
      />
    </div>
  );
};

export default MobileNotification;

