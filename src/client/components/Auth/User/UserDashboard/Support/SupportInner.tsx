import React from "react";
import AllBetTable from "../../Reusables/AllBetTable";

const SupportInner = () => {
  const headers = [
    "Live Chat",
    "Open a Ticket"

  ];
  return (
    <div className="">
      <div>
        <AllBetTable
          title="Support"
          headers={headers}
          noBetsMessage="No Chat"
          placeBetButtonText="Start a Chat"
        />
      </div>
    </div>
  );
};

export default SupportInner;
