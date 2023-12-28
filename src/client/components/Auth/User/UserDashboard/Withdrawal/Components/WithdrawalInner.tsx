import React, { useState } from "react";
import BalanceCard from "../../Constants/BalanceCard";
import AllBetTable from "../../Constants/AllBetTable";
import DesktopModal from "@/src/client/shared/Modal/DesktopModal";
import WithdrawPop from "./WithdrawPop";

const WithdrawalInner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const headers = [
    "No",
    "Reference Id",
    "Date",
    "Status",
    "Amount",
    "Channel",
  ];
  return (
    <div className="flex flex-col space-y-7 ">
      <div className=" flex space-x-4">
        <BalanceCard buttonState={true} buttonText="Withdraw" />
      </div>
      <div>
        <AllBetTable
          title="Transaction History"
          headers={headers}
          noBetsMessage="No transactions recorded"
          placeBetButtonText="Withdraw"
          buttonAction={handleOpenModal}
        />
      </div>
      <DesktopModal
        openModal={isModalOpen}
        setOpenModal={setIsModalOpen}
        className="custom-modal-class"
        modalContent={<WithdrawPop />}
      />
    </div>
  );
};

export default WithdrawalInner;
