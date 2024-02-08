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
    <div>
      <MobileDashboardLayout
        mobilelayoutcontent={
          <div className="">
            <OverviewWelcomeTab />
            <BalanceCard
              buttonState={true}
              secondButton={true}
              firstButtonText="Deposit"
              secondButtonText="Withdrawal"
              balanceButtonAction={undefined}
            />
            <div className="w-[99%] m-auto md:ml-9 h-44 p-2 mt-6 cursor-pointer flex flex-col justify-center items-center space-y-2 rounded-xl bg-white">
              <Link href="/landing">
                <p className="font-bold text-lg text-center ">Place a Bet</p>
              </Link>
              <Receipt />
            </div>
            {/* <div
              className="bg-white rounded-lg h-12 w-[99.5%] p-3 my-4 flex justify-between"
              onClick={handleBetHistory}
            >
              <p>Bet History</p>
              {betHistory && <ControlsChevronUp />}
              {!betHistory && <ControlsChevronDown />}
            </div>
            {betHistory && <BetHistoryPopUp />} */}

            {/* <Link href="/user-dashboard/transaction">
              <div className="bg-white rounded h-12 w-[99.5%] p-3 mt-4 ">
                <p>Transaction History</p>
              </div>
            </Link> */}
            {/* <div className="mt-24">
              <OverviewWelcomeTab />
            </div> */}
          </div>
        }
      />
    </div>
  );
};

export default MobileOverview;
