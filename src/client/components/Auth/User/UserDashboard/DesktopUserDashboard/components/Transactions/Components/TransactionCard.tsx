// TransactionCard.tsx

import React from "react";
import Link from "next/link";

interface TransactionCardProps {
  type: string;
  date: string;
  time: string;
  amount: number;
  transaction_id: string;
  status: string;
  channel: string;
}

const TransactionCard: React.FC<TransactionCardProps> = ({
  type,
  date,
  time,
  amount,
  transaction_id,
  status,
  channel,
}) => {
  const queryParams = {
    type,
    date,
    time,
    amount,
    transaction_id,
    status,
    channel,
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
            <span>{date}</span>
            <span>{time}</span>
          </div>
        </div>
        <p>{amount}</p>
      </div>
    </Link>
  );
};

export default TransactionCard;
