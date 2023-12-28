import React from "react";
import AllBetTable from "../../Extras/AllBetTable";

const BetInnerComp = () => {
  const headers = [
    "No",
    "BetId",
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
          headers={headers}
          noBetsMessage="No Bet found yet"
          placeBetButtonText="Bet Now"
        />
      </div>
    </div>
  );
};

export default BetInnerComp;
