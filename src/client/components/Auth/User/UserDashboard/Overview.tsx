import React from "react";
import BalanceCard from "../Reusables/BalanceCard";
import UserDocumentCard from "../Reusables/UserDocumentCard";

const Overview = () => {
  return (
    <div className=" flex space-x-6 ">
      <UserDocumentCard />
      <BalanceCard />
    </div>
  );
};

export default Overview;
