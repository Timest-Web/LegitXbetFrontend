import React, { useState } from "react";
import BalanceCard from "../../../shared/BalanceCard";
import AllBetTable from "../../../shared/InactiveTable";
import OverViewHeader from "./OverviewHeader";
import Modal from "@/src/client/shared/Modal";
import DepositContainer from "../../Deposit/Components/DepositModal/DepositContainer";
import WithdrawPop from "../../Withdrawal/Components/WithdrawPop";
import OverviewWelcomeTab from "./OverviewWelcomeTab";

const Overview = () => {
  const headers = OverViewHeader();
  const [isDepositModalOpen, setDepositModalOpen] = useState(false);
  const [isWithdrawalModalOpen, setWithdrawalModalOpen] = useState(false);

  const handleDepositClick = () => {
    setDepositModalOpen(true);
  };

  const handleWithdrawalClick = () => {
    setWithdrawalModalOpen(true);
  };

  return (
    <div className="flex flex-col space-y-7 ">
      <div className="flex justify-between">
        <OverviewWelcomeTab/>
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
      </div>
      <div>
        <AllBetTable
          title="All Bets"
          headers={headers}
          noBetsMessage="No bets placed"
          placeBetButtonText="Place a bet"
          buttonAction={undefined}
          buttonLink="/landing"
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
      </div>
    </div>
  );
};

export default Overview;
