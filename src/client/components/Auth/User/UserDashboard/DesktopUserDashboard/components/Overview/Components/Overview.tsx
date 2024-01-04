import React from "react";
import OverViewHeader from "../Constants/OverviewHeader";
import UserDocumentCard from "../../../shared/UserDocumentCard";
import BalanceCard from "../../../shared/BalanceCard";
import AllBetTable from "../../../shared/InactiveTable";

const Overview = () => {
  const headers = OverViewHeader()
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
