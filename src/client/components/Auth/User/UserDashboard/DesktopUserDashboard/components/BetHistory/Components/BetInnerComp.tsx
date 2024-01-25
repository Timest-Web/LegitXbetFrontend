import React from "react";
import AllBetTable from "../../../shared/InactiveTable";
import BetStatusTab from "./BetStatusTab";
import BetHistoryPopUp from "./BetHistoryPopUp";

const BetInnerComp = () => {
  const headers = [
    "No",
    "Bet ID",
    "Date",
    "Status",
    "Amount",
    "Pot. Win",
    "Actions"
  ];
  return (
    <div className="">
      <div>
      <BetStatusTab isAll/>
          <div className="mt-8 space-y-3">
          <BetHistoryPopUp/>
          <BetHistoryPopUp/>
          <BetHistoryPopUp/>
          <BetHistoryPopUp/>
          </div>
            
      </div>
    </div>
  );
};

export default BetInnerComp;
