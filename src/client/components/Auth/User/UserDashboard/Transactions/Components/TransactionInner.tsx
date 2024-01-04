import React from "react";
import AllBetTable from "../../shared/InactiveTable";
import TransactionInactiveHeader from "../Constants/TransactionInactiveHeaders";

const TransactionInner = () => {
  const headers = TransactionInactiveHeader()
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
