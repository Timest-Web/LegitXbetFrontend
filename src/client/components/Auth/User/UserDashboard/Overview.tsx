import React from "react";
import BalanceCard from "../Reusables/BalanceCard";
import UserDocumentCard from "../Reusables/UserDocumentCard";
import AllBetTable from "../Reusables/AllBetTable";

const Overview = () => {
  return (
    <div className="flex flex-col space-y-7 " >
      <div className=" flex space-x-4">
        <UserDocumentCard />
        <BalanceCard />
      </div>
      <div>
        <AllBetTable/>
      </div>
    </div>
  );
};

export default Overview;
