import React, { useContext, useMemo, useState } from "react";
import BalanceCard from "../../../shared/BalanceCard";
import AllBetTable from "../../../shared/InactiveTable";
import OverViewHeader from "./OverviewHeader";
import OverviewWelcomeTab from "./OverviewWelcomeTab";
import BetHistory from "@/src/client/shared/Svg/BetHistory";
import Receipt from "@/src/client/shared/Svg/Receipt";
import Link from "next/link";
import ReuseTab from "../../../shared/ReuseTab";
import TableComp from "../../../shared/ActiveTableComp";
import TransactionData from "../../Transactions/Constants/TransactionData";
import TransactionColumn from "../../Transactions/Components/TransactionColumn";
import mData from "../../../../constant/MOCK_DATA (4).json";
import TransactionInner from "../../Transactions/Components/TransactionInner";
import useUser from "@/src/client/shared/Context/UserContext/useUser";
import { ShopWallet, ShopCashback, SportEsportGeneric, TimeSandglass, GenericBookmark, GenericTicket, GenericMultiBet } from '@heathmont/moon-icons-tw';

const Overview = () => {
  const data = useMemo(() => mData, []);
  const columns: any = TransactionColumn();
  const user = useUser();

  const referenceValue = "https://legitxbet.com/user?reference=";
  return (
    <div className="flex flex-col space-y-7 ">
      <div className="flex flex-col space-y-5 md:flex-row md:space-x-12 md:space-y-0">
        <BalanceCard
          buttonState={true}
          secondButton={true}
          firstButtonText="Deposit"
          secondButtonText="Withdrawal"
          balanceButtonAction={undefined}
        />
        <div className="flex flex-col space-y-2">
          <label className="font-bold text-lg">Referral Link</label>
          <div className="w-[99.5%] md:w-[32rem] p-3 bg-white rounded-md flex justify-between">
            <span>{referenceValue}</span>
            <button
              className="bg-black text-white text-center text-sm rounded-md p-2"
              onClick={() => navigator.clipboard.writeText(referenceValue)}
            >
              Copy
            </button>
          </div>
        </div>
      </div>
      <section onClick={()=>console.log(user)}  className="grid grid-rows-6 gap-3 md:grid-cols-3 md:grid-rows-2 md:gap-x-2 ">
        <ReuseTab
          icon={
            <div className="bg-white p-4 rounded-md">
             <ShopWallet className="text-moon-32"/>
            </div>
          }
          figure="5000"
          description="Total Deposits"
        />
        <ReuseTab
          icon={
            <div className="bg-white p-4 rounded-md">
             <ShopCashback className="text-moon-32"/>
            </div>
          }
          figure="2000"
          description="Total Withdrawal"
        />
        <ReuseTab
          icon={
            <div className="bg-white p-4 rounded-md">
              <GenericMultiBet className="text-moon-32"/>
            </div>
          }
          figure="119"
          description="Total Bets"
        />
        <ReuseTab
          icon={
            <div className="bg-white p-4 rounded-md">
             <TimeSandglass className="text-moon-32"/>
            </div>
          }
          figure="50"
          description="Pending Bets"
        />
        <ReuseTab
          icon={
            <div className="bg-white p-4 rounded-md">
              <GenericBookmark className="text-moon-32" />
            </div>
          }
          figure="30"
          description="Transactions"
        />
        <ReuseTab
          icon={
            <div className="bg-white p-4 rounded-md">
              <GenericTicket className="text-moon-32"/>
            </div>
          }
          figure="2"
          description="Support Ticket"
        />
      </section>

      <div className="hidden md:block">
        <TableComp
          data={data}
          columns={columns}
          tableTitle="Transaction History"
        />
      </div>
      <div className="md:hidden">
        <TransactionInner />
      </div>
    </div>
  );
};

export default Overview;
