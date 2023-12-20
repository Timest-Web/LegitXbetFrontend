import React, { useState } from "react";
import BalanceCard from "../../Reusables/BalanceCard";
import AllBetTable from "../../Reusables/AllBetTable";
import DesktopModal from "@/src/client/shared/Modal/DesktopModal";
import DepositContainer from "./DepositModal/DepositContainer";



const DepositInner = () => {
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
        <BalanceCard buttonState={true} buttonText="Deposit" />
      </div>
      <div>
        <AllBetTable
          title="Transaction History"
          headers={headers}
          noBetsMessage="No transactions recorded"
          placeBetButtonText="Deposit"
          buttonAction={handleOpenModal}
        />
      </div>
      <DesktopModal
        openModal={isModalOpen}
        setOpenModal={setIsModalOpen}
        className="custom-modal-class"
        modalContent={<DepositContainer/>}
      />
    </div>
  );
};

export default DepositInner;
