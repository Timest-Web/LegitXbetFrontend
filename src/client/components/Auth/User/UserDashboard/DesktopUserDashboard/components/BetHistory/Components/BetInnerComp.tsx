import React from "react";
import AllBetTable from "../../../shared/InactiveTable";
import BetStatusTab from "./BetStatusTab";

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
        <AllBetTable
          title="Bet History"
          betStatus={<BetStatusTab isAll/>}
          headers={headers}
          noBetsMessage="No Bet found yet"
          placeBetButtonText="Bet Now"
          buttonLink="/landing"
        />
      </div>
    </div>
  );
};

export default BetInnerComp;
