import React from "react";
import Image from "next/image";
import BetWC from "../../UserAssets/download (1) 1.png";
import AllBetTable from "../../Reusables/AllBetTable";

const BonusInner = () => {
  const headers = [
    "No",
    "Bonus Id",
    "start date",
    "Exp. date",
    "Type",
    "Percentage",
    "Actions"
  ];
  return (
    <div className="flex flex-col space-y-7 ">
        <Image src={BetWC} alt="betwc"/>
      <div>
        <AllBetTable
          title="Transaction History"
          headers={headers}
          noBetsMessage="No active Bonus"
          placeBetButtonText={undefined}
        />
      </div>
    </div>
  );
};

export default BonusInner;
