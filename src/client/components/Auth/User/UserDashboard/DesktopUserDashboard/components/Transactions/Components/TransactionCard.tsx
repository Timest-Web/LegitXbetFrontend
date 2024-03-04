// TransactionCard.tsx

import React from "react";
import Link from "next/link";

interface TransactionCardProps {
  type: string;
  createdAt: string;
  time: string;
  amount: number;
  reference: string;
  status: string;
  merchant: string;
}

const TransactionCard: React.FC<TransactionCardProps> = ({
  type,
  createdAt,
  time,
  amount,
  reference,
  status,
  merchant,
}) => {
  const queryParams = {
    type,
    createdAt,
    time,
    amount,
    reference,
    status,
    merchant,
  };


  

  return (
    <Link
      href={{
        pathname: "/user-dashboard/transaction/transaction-details",
        query: queryParams,
      }}
    >
      <div className="bg-white w-[99.5%] md:w-full flex justify-between mb-1 p-3">
        <div>
          <p className="font-bold">{type}</p>
          <div className="text-xs flex space-x-3">
            <span>{createdAt}</span>
          </div>
        </div>
        <p>{amount}</p>
      </div>
    </Link>
  );
};

export default TransactionCard;
