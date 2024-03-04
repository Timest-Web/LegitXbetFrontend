import React, { createContext, useState, useEffect, ReactNode } from "react";

const TransactionContext = createContext<any[]>([]);

interface TransactonProviderProps{
    children: ReactNode
}

const TransactionProvider: React.FC<TransactonProviderProps> = ({ children }) => {
    const [transactions, setTransactions] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const userDetails = localStorage.getItem("access") || "{}";
      const parsedDetails = JSON.parse(userDetails);
      const baseUrl = "https://legitx.ng/transactions/";
      const token = parsedDetails.accessToken;
      try {
        const [creditResponse, debitResponse] = await Promise.all([
          fetch(baseUrl + "credit", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetch(baseUrl + "debit", {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        const creditTransactions = await creditResponse.json();
        const debitTransactions = await debitResponse.json();

        const allTransactions = [...creditTransactions, ...debitTransactions];

        setTransactions(allTransactions);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <TransactionContext.Provider value={transactions}>
      {children}
    </TransactionContext.Provider>
  );
};

export { TransactionContext, TransactionProvider };
