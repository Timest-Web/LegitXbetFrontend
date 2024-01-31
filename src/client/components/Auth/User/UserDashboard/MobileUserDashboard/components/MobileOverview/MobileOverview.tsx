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
            <div className="flex justify-between">
              <p className=" font-bold mb-4 pt-3 ">Welcome, Johnson</p>
            </div>
            <BalanceCard
              buttonState={true}
              secondButton={true}
              firstButtonText="Deposit"
              secondButtonText="Withdrawal"
              balanceButtonAction={(buttonType) => {
                if (buttonType === "first") {
                  handleDepositClick();
                } else if (buttonType === "second") {
                  handleWithdrawalClick();
                }
              }}
            />
            <Modal
              openModal={isDepositModalOpen}
              setOpenModal={setDepositModalOpen}
              className="custom-modal-class"
              modalContent={<DepositContainer />}
            />
            <Modal
              openModal={isWithdrawalModalOpen}
              setOpenModal={setWithdrawalModalOpen}
              className="custom-modal-class"
              modalContent={<WithdrawPop />}
            />
            <div
              className="bg-white rounded-lg h-12 w-[99.5%] p-3 my-4 flex justify-between"
              onClick={handleBetHistory}
            >
              <p>Bet History</p>
              {betHistory && <ControlsChevronUp />}
              {!betHistory && <ControlsChevronDown />}
            </div>
            {betHistory && <BetHistoryPopUp />}

            <Link href="/user-dashboard/transaction">
              <div className="bg-white rounded h-12 w-[99.5%] p-3 mt-4 ">
                <p>Transaction History</p>
              </div>
            </Link>
            <div className="mt-24">
              <OverviewWelcomeTab />
            </div>
          </div>
        }
      />
    </div>
  );
};

export default MobileOverview;
