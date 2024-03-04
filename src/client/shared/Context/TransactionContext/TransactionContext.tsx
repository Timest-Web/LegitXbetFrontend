import getTransactionList from "@/src/helper/apis/services/transaction-list/get-transaction.api";
import { useQuery } from "@tanstack/react-query";
import React, { createContext, ReactNode, useContext } from "react";


const TransactionContext = createContext<any[]>([]);

interface TransactionProviderProps {
    children: ReactNode
}

const TransactionProvider: React.FC<TransactionProviderProps> = ({ children }) => {
  const query = useQuery({ queryKey: ["deposit"], queryFn: getTransactionList });
  const transactions = query.data || [];

    if (query.isLoading) return <div>Loading...</div>;
    if (query.isError) return <div>Error fetching transactions</div>;

    return (
        <TransactionContext.Provider value={transactions}>
            {children}
        </TransactionContext.Provider>
    );
};

const useTransactions = () => useContext(TransactionContext);

export { TransactionProvider, useTransactions };
