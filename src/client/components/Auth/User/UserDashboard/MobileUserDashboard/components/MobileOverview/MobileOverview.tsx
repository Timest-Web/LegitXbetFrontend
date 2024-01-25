import React, { useState } from "react";
import MobileDashboardLayout from "../../shared/MobileDashboardLayout";
import BalanceCard from "../../../DesktopUserDashboard/shared/BalanceCard";
import Modal from "@/src/client/shared/Modal";
import DepositContainer from "../../../DesktopUserDashboard/components/Deposit/Components/DepositModal/DepositContainer";
import WithdrawPop from "../../../DesktopUserDashboard/components/Withdrawal/Components/WithdrawPop";
import OverviewWelcomeTab from "../../../DesktopUserDashboard/components/Overview/Components/OverviewWelcomeTab";
import BetHistoryPopUp from "../../../DesktopUserDashboard/components/BetHistory/Components/BetHistoryPopUp";

const MobileOverview = () => {
  const [isDepositModalOpen, setDepositModalOpen] = useState(false);
  const [isWithdrawalModalOpen, setWithdrawalModalOpen] = useState(false);
  const [betHistory, setBetHistory] = useState(false);

  const handleBetHistory = ()=>{
    setBetHistory(!betHistory)
  }

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
          <div className="h-full">
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
            <div className="bg-white rounded-lg h-12 w-72 p-3 my-4" onClick={handleBetHistory}>
              <p>Bet History</p>
            </div>
            { betHistory &&
            <BetHistoryPopUp/>
            }
            <div className="bg-white h-12 w-72 p-3 mt-4 mb-16">
              <p>Deposit History</p>
            </div>
             <div className=""><OverviewWelcomeTab/></div> 
          </div>
        }
      />
    </div>
  );
};

export default MobileOverview;
