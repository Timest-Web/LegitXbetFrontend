import React from "react";
import BalanceCard from "../Reusables/BalanceCard";
import UserDocumentCard from "../Reusables/UserDocumentCard";
import AllBetTable from "../Reusables/AllBetTable";

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
        <BalanceCard />
      </div>
      <div>
        <AllBetTable
          title="All Bets"
          headers={headers}
          noBetsMessage="No bets palced"
          placeBetButtonText=" Place a bet"
        />
      </div>
    </div>
  );
};

export default Overview;
