import React, { useState } from "react";
import MobileDashboardLayout from "../../shared/MobileDashboardLayout";
import BalanceCard from "../../../DesktopUserDashboard/shared/BalanceCard";
import Modal from "@/src/client/shared/Modal";
import DepositContainer from "../../../DesktopUserDashboard/components/Deposit/Components/DepositModal/DepositContainer";
import WithdrawPop from "../../../DesktopUserDashboard/components/Withdrawal/Components/WithdrawPop";
import OverviewWelcomeTab from "../../../DesktopUserDashboard/components/Overview/Components/OverviewWelcomeTab";
import BetHistoryPopUp from "../../../DesktopUserDashboard/components/BetHistory/Components/BetHistoryPopUp";
import {
  ControlsChevronUp,
  ControlsChevronDown,
} from "@heathmont/moon-icons-tw";
import Link from "next/link";
import Receipt from "@/src/client/shared/Svg/Receipt";
import Overview from "../../../DesktopUserDashboard/components/Overview/Components/Overview";

const MobileOverview = () => {
  const [isDepositModalOpen, setDepositModalOpen] = useState(false);
  const [isWithdrawalModalOpen, setWithdrawalModalOpen] = useState(false);
  const [betHistory, setBetHistory] = useState(false);

  const handleBetHistory = () => {
    setBetHistory(!betHistory);
  };

  const handleDepositClick = () => {
    setDepositModalOpen(true);
  };

  const handleWithdrawalClick = () => {
    setWithdrawalModalOpen(true);
  };

  return (
    <div className="pb-16">
      <MobileDashboardLayout
        mobilelayoutcontent={
          <Overview/>
        }
      />
    </div>
  );
};

export default MobileOverview;
