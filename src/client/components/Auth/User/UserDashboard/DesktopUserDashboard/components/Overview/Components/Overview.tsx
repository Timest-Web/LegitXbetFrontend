import React, { useContext, useEffect, useMemo, useState } from "react";
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
import {
  ShopWallet,
  ShopCashback,
  SportEsportGeneric,
  TimeSandglass,
  GenericBookmark,
  GenericTicket,
  GenericMultiBet,
} from "@heathmont/moon-icons-tw";
import { useQuery } from "@tanstack/react-query";
import { getDeposit } from "@/src/helper/apis/services/transaction-list/get-deposit.api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTransactions } from "@/src/client/shared/Context/TransactionContext/TransactionContext";
import useGetUserProfile from "@/src/helper/apis/services/auth/get-user-profile.api";

const Overview = () => {
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      console.log("Date Parsing Failed:", dateString);
      return dateString;
    }

    const options = { year: "numeric", month: "short", day: "2-digit" };
    const formattedDate = date.toLocaleDateString(
      "en-US",
      options as Intl.DateTimeFormatOptions
    );
    console.log("Formatted Date:", formattedDate);
    return formattedDate;
  };
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const columns: any = TransactionColumn();
  const user = useUser();
  const { data: userDetails, isLoading, error } = useGetUserProfile();
  const query = useQuery({ queryKey: ["deposit"], queryFn: getDeposit });
  const depoData = query.data || [];
  const referenceValue = userDetails.referralCode;
  const notify = ()=>toast.success('Copied!')
  const transactions = useTransactions();
  const data = transactions;

  const formattedData = data.map((allTransaction: any, index: number) => ({
    ...allTransaction,
    serialNumber: index + 1,
    merchant: capitalizeFirstLetter(allTransaction.merchant),
    status: capitalizeFirstLetter(allTransaction.status),
    createdAt: formatDate(allTransaction.createdAt),
    amount: allTransaction.amount.toLocaleString(),
    type: allTransaction.type === "credit" ? "Deposit" : "Withdrawal",
  }));
  const totalDeposits = depoData.reduce(
    (total: number, deposit: any) => total + deposit.amount,
    0
  );
  return (
    <div className="flex flex-col space-y-7 ">
      <ToastContainer autoClose={1000}/>
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
              onClick={() => {navigator.clipboard.writeText(referenceValue); notify()}}
            >
              Copy
            </button>
          </div>
        </div>
      </div>
      <section
        onClick={() => console.log(user)}
        className="grid grid-rows-6 gap-3 md:grid-cols-3 md:grid-rows-2 md:gap-x-2 "
      >
        <ReuseTab
          href="/user-dashboard/deposit/deposit-history"
          icon={
            <div className="bg-white p-4 rounded-md">
              <ShopWallet className="text-moon-32" />
            </div>
          }
          figure={`NGN ${totalDeposits.toLocaleString()}`}
          description="Total Deposits"
        />
        <ReuseTab
          href=""
          icon={
            <div className="bg-white p-4 rounded-md">
              <ShopCashback className="text-moon-32" />
            </div>
          }
          figure={0}
          description="Total Withdrawal"
        />
        <ReuseTab
          href=""
          icon={
            <div className="bg-white p-4 rounded-md">
              <GenericMultiBet className="text-moon-32" />
            </div>
          }
          figure={0}
          description="Total Bets"
        />
        <ReuseTab
          href=""
          icon={
            <div className="bg-white p-4 rounded-md">
              <TimeSandglass className="text-moon-32" />
            </div>
          }
          figure={0}
          description="Pending Bets"
        />
        <ReuseTab
          href="/user-dashboard/transaction"
          icon={
            <div className="bg-white p-4 rounded-md">
              <GenericBookmark className="text-moon-32" />
            </div>
          }
          figure={formattedData.length}
          description="Total Transactions"
        />
        <ReuseTab
          href=""
          icon={
            <div className="bg-white p-4 rounded-md">
              <GenericTicket className="text-moon-32" />
            </div>
          }
          figure={0}
          description="Support Ticket"
        />
      </section>

      <div className="hidden md:block">
        <TableComp
          data={formattedData}
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
