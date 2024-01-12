import React, { useState } from "react";
import UserDocumentCard from "../../../shared/UserDocumentCard";
import BalanceCard from "../../../shared/BalanceCard";
import AllBetTable from "../../../shared/InactiveTable";
import OverViewHeader from "./OverviewHeader";
import Modal from "@/src/client/shared/Modal";
import DepositContainer from "../../Deposit/Components/DepositModal/DepositContainer";
import WithdrawPop from "../../Withdrawal/Components/WithdrawPop";
import Link from "next/link";
import NotificationIcon from "@/src/client/shared/Svg/NotificationIcon";
import DocumentSvg from "@/src/client/shared/Svg/DocumentSvg";

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
        <div className="pt-6 pl-9">
          <p className="text-2xl font-bold bg-white h-24 w-72 p-5 drop-shadow-xl">
            Welcome, Johnson
          </p>
          <div className="flex space-x-6 mt-4">
            <Link href="/user_dashboard/overview/uploaded_documents">
              <div className="flex flex-col space-y-2">
                <div className="bg-white w-[3.25rem] h-[3.25rem] md:w-[5.5rem] md:h-[5.5rem] rounded-full flex justify-center items-center">
                  <DocumentSvg />
                </div>
                <h3>Documents</h3>
              </div>
            </Link>
            <Link href="/user_dashboard/overview/notifications">
              <div className="flex flex-col space-y-2">
                <div className="bg-white w-[3.25rem] h-[3.25rem] md:w-[5.5rem] md:h-[5.5rem]  rounded-full flex justify-center items-center">
                  <NotificationIcon />
                </div>
                <h3>Notifications</h3>
              </div>
            </Link>
          </div>
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
      </div>
      <div>
        <AllBetTable
          title="All Bets"
          headers={headers}
          noBetsMessage="No bets placed"
          placeBetButtonText="Place a bet"
          buttonAction={undefined}
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
