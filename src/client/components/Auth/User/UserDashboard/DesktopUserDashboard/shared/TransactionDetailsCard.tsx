import React from "react";

interface TransactionCardProps {
  amount: string;
  channel: string;
  date: string;
  status: string;
  reference_id: string;
  key: string | number;
}

const TransactionDetailsCard: React.FC<TransactionCardProps> = ({
  amount,
  channel,
  date,
  status,
  reference_id,
  key,
}) => {
  return (
    <div className="bg-white rounded-lg space-y-3 p-3 mb-3" key={key}>
      <p className="flex justify-between ">
        <p className="font-bold">Amount </p> <span>{amount}</span>
      </p>
      <p className="flex justify-between ">
        <p className="font-bold"> Channel</p>
        <span>{channel}</span>
      </p>
      <p className="flex justify-between ">
        <p className="font-bold">Date</p> <span>{date}</span>
      </p>
      <p className="flex justify-between ">
        <p className="font-bold">Status</p> <span>{status}</span>
      </p>
      <p className="flex justify-between ">
        <p className="font-bold">Reference ID</p> <span>{reference_id}</span>
      </p>
    </div>
  );
};

export default TransactionDetailsCard;
