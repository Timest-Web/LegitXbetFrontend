import React from "react";
import AllBetTable from "../../Reusables/AllBetTable";

const TransactionInner = () => {
  const headers = [
    "No",
    "Reference Id",
    "Date",
    "Status",
    "Type",
    "Amount",
    "Channel",
    "Actions"
  ];
  return (
    <div className="">
      <div>
        <AllBetTable
          title="Transaction History"
          headers={headers}
          noBetsMessage="No transactions recorded"
          placeBetButtonText={undefined}
        />
      </div>
    </div>
  );
};

export default TransactionInner;
