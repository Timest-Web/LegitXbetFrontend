import React, { useState } from "react";
import TransactionInactiveHeader from "./TransactionInactiveHeaders";
import AllBetTable from "../../../shared/InactiveTable";
import TransactionCard from "./TransactionCard";
import transactionData from "../../../../MobileUserDashboard/constant/MOCK_DATA (7).json";

const TransactionInner = () => {
  const headers = TransactionInactiveHeader();

  const [filterType, setFilterType] = useState<string>("");
  const [filterDate, setFilterDate] = useState<string>("");

  const filteredTransactions = transactionData.filter((transaction) => {
    const typeCondition = filterType === "" || transaction.type === filterType;
    const dateCondition =
      filterDate === "" ||
      new Date(transaction.date).toISOString() >= new Date(filterDate).toISOString();

    return typeCondition && dateCondition;
  });

  return (
    <div className="">
      <section className="flex  md:space-x-4 mb-4">
        <div className="text-sm">
          <label htmlFor="filterType">Filter by Type: </label>
          <select
            className="p-1 rounded-md"
            id="filterType"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="">All Types</option>
            <option value="Deposit">Deposit</option>
            <option value="Withdrawal">Withdrawal</option>
            <option value="Winnings">Winnings</option>
          </select>
        </div>
        <div className="text-sm">
          <label htmlFor="filterDate">Filter by Date: </label>
          <input
            className="p-[0.2rem] rounded-md"
            type="date"
            id="filterDate"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
          />
        </div>
      </section>

      <>
        <p className="font-bold text-xl mb-4">Transaction List</p>
        {filteredTransactions.map((transaction, index) => (
          <TransactionCard key={index} {...transaction} />
        ))}
      </>
    </div>
  );
};

export default TransactionInner;
