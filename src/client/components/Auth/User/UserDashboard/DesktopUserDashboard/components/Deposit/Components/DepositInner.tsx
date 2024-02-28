import React, { useContext, useState } from "react";
import DepositContainer from "./DepositModal/DepositContainer";
import { useVisibilityControl } from "@/src/client/shared/Hooks/useVisibilityControl";
import BalanceCard from "../../../shared/BalanceCard";
import AllBetTable from "../../../shared/InactiveTable";
import Modal from "@/src/client/shared/Modal";
import SubmitButton from "../../../shared/SubmitButton";
import { BalanceContext } from "@/src/client/shared/Context/BalanceContext/BalanceContext";

const DepositInner = () => {
  const {balance, setBalance} = useContext(BalanceContext)!;

  return (
    <div className="">
      <div className="mb-8 flex justify-between md:hidden">
        <SubmitButton buttonContent="Deposit" />
        <p className="font-bold">{`N${balance.toLocaleString()}`}</p>
      </div>
	  <p className="hidden md:block md:text-lg md:font-bold md:mb-4">Deposit</p>
      <DepositContainer />
    </div>
  );
};

export default DepositInner;
