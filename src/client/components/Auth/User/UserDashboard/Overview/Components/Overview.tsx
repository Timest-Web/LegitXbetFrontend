import React from "react";
import BalanceCard from "../../shared/BalanceCard";
import UserDocumentCard from "../../shared/UserDocumentCard";
import AllBetTable from "../../shared/AllBetTable";

const Overview = () => {
  const headers = [
    "No",
    "Bet Id",
    "Date",
    "Type",
    "Status",
    "Stake Amt.",
    "Potential win",
  ];
  return (
    <div className="flex flex-col space-y-7 ">
      <div className=" flex space-x-4">
        <UserDocumentCard />
        <BalanceCard buttonState={false} buttonText=""  />
      </div>
      <div>
        <AllBetTable
          title="All Bets"
          headers={headers}
          noBetsMessage="No bets palced"
          placeBetButtonText=" Place a bet"
          buttonAction={undefined}
        />
      </div>
    </div>
  );
};

export default Overview;
