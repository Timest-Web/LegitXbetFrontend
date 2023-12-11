import React from "react";
import BalanceCard from "../../Reusables/BalanceCard";
import AllBetTable from "../../Reusables/AllBetTable";

const DepositInner = () => {
  const headers = [
    "No",
    "Reference Id",
    "Date",
    "Status",
    "Amtount",
    "Channel",
  ];
  return (
    <div className="flex flex-col space-y-7 ">
      <div className=" flex space-x-4">
        <BalanceCard />
      </div>
      <div>
        <AllBetTable
          title="Transaction History"
          headers={headers}
          noBetsMessage="No transactions recorded"
          placeBetButtonText="Deposit"
        />
      </div>
    </div>
  );
};

export default DepositInner;
