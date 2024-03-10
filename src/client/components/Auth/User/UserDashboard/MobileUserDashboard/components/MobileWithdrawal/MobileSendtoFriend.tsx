import React from "react";
import MobileDashboardLayout from "../../shared/MobileDashboardLayout";
import SendToFriend from "../../../DesktopUserDashboard/components/Withdrawal/Components/SendToFriend";

const MobileSendtoFriend = () => {
  return (
    <div className="mb-12">
      <MobileDashboardLayout mobilelayoutcontent={<SendToFriend />} />
    </div>
  );
};

export default MobileSendtoFriend;
