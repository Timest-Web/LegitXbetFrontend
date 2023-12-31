import React, { useState } from "react";
import BalanceCard from "../../shared/BalanceCard";
import AllBetTable from "../../shared/InactiveTable";
import DesktopModal from "@/src/client/shared/Modal/DesktopModal";
import DepositContainer from "./DepositModal/DepositContainer";
import { useVisibilityControl } from "@/src/client/shared/Hooks/useVisibilityControl";

const DepositInner = () => {
  const { isOpen, setIsOpen, handleClick } = useVisibilityControl();

  const headers = ["No", "Reference Id", "Date", "Status", "Amount", "Channel"];
  return (
    <div className="flex flex-col space-y-7 ">
      <div className=" flex space-x-4">
        <BalanceCard
          buttonState={true}
          buttonText="Deposit"
          balanceButtonAction={handleClick}
        />
      </div>
      <div>
        <AllBetTable
          title="Transaction History"
          headers={headers}
          noBetsMessage="No transactions recorded"
          placeBetButtonText="Deposit"
          buttonAction={handleClick}
        />
      </div>
      <DesktopModal
        openModal={isOpen}
        setOpenModal={setIsOpen}
        className="custom-modal-class"
        modalContent={<DepositContainer />}
      />
    </div>
  );
};

export default DepositInner;
