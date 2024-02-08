import React, { useContext, useState } from "react";
import BalanceCard from "../../../shared/BalanceCard";
import AllBetTable from "../../../shared/InactiveTable";
import OverViewHeader from "./OverviewHeader";
import OverviewWelcomeTab from "./OverviewWelcomeTab";
import { useInfoContext } from "@/src/client/shared/Context/PersonalDetailsContext/GetUserInfoContext";
import BetHistory from "@/src/client/shared/Svg/BetHistory";
import Receipt from "@/src/client/shared/Svg/Receipt";
import Link from "next/link";

const Overview = () => {
  return (
    <div className="flex flex-col space-y-7 ">
      <div className="flex justify-between">
        <div>
          <OverviewWelcomeTab />
          <div className="w-44 m-auto md:ml-9 h-24 p-2 mt-6 cursor-pointer flex flex-col justify-center items-center space-y-2 rounded-xl bg-white">
           <Link href='/landing'><p className="font-bold text-lg text-center ">Place a Bet</p></Link> 
            <Receipt />
          </div>
        </div>
        <BalanceCard
          buttonState={true}
          secondButton={true}
          firstButtonText="Deposit"
          secondButtonText="Withdrawal"
          balanceButtonAction={undefined}
        />
      </div>
    </div>
  );
};

export default Overview;
