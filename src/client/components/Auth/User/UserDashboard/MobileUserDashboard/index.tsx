import React from "react";
import MobileOverview from "./components/MobileOverview/MobileOverview";
import MobileTransaction from "./components/MobileTransactions/MobileTransaction";
import MobileProfile from "./components/MobileProfileDashboard/MobileProfile";
import MobileSupportInactive from "./components/MobileSupport/MobileSupportInactive";
import MobileWithdrawal from "./components/MobileWithdrawal/MobileWithdrawal";
import MobileSupportEmpty from "./components/MobileSupport/MobileSupportEmpty";



const MobileUserDashboard = () => {
  return (
    <div>
      <MobileSupportEmpty />
    </div>
  );
};

export default MobileUserDashboard;
