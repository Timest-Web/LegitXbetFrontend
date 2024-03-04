import React, { useContext, useState } from "react";
import TransactionInactiveHeader from "./TransactionInactiveHeaders";
import AllBetTable from "../../../shared/InactiveTable";
import TransactionCard from "./TransactionCard";
import transactionData from "../../../../MobileUserDashboard/constant/MOCK_DATA (7).json";
import { useTransactions } from "@/src/client/shared/Context/TransactionContext/TransactionContext";

const ITEMS_PER_PAGE = 5;

const TransactionInner = () => {
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
  const [currentPage, setCurrentPage] = useState(1);

  const [filterType, setFilterType] = useState<string>("");
  const [filterDate, setFilterDate] = useState<string>("");
  const transactions = useTransactions();
  const data = transactions;

  const formattedData = data.map((allTransaction: any, index: number) => ({
    ...allTransaction,
    serialNumber: index + 1,
    merchant: capitalizeFirstLetter(allTransaction.merchant),
    status: capitalizeFirstLetter(allTransaction.status),
    createdAt: formatDate(allTransaction.createdAt),
    amount: allTransaction.amount.toLocaleString(),
    type: allTransaction.type === "credit" ? "Deposit" : "Withdrawal"
  }));

  const filteredTransactions = formattedData.filter((transaction) => {
    const typeCondition = filterType === "" || transaction.type === filterType;
    const dateCondition =
      filterDate === "" ||
      new Date(transaction.date).toISOString() >=
        new Date(filterDate).toISOString();

    return typeCondition && dateCondition;
  });
  const totalPages = Math.ceil(filteredTransactions.length / ITEMS_PER_PAGE);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;

  const currentItems = filteredTransactions.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  return (
    <div className="w-full">
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
        {/* <div className="text-sm">
          <label htmlFor="filterDate">Filter by Date: </label>
          <input
            className="p-[0.2rem] rounded-md"
            type="date"
            id="filterDate"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
          />
        </div> */}
      </section>

      <>
        <p className="font-bold text-xl mb-4">Transaction List</p>
        {currentItems.map((transaction, index) => (
          <TransactionCard key={index} {...transaction} />
        ))}
      </>
      <div className="mt-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="bg-black hover:opacity-50 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="bg-black hover:opacity-50 text-white font-bold py-2 px-4 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TransactionInner;
