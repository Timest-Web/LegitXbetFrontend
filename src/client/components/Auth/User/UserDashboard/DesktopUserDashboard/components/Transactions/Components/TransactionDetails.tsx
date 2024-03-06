// TransactionDetails.tsx

import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { ArrowsLeft } from "@heathmont/moon-icons-tw";

const TransactionDetails = () => {
  const router = useRouter();
  const { type, createdAt, time, amount, reference, status, merchant } = router.query;

  return ( 
    <div className="bg-gray-200 h-screen">
      <div className="bg-black text-white text-lg font-bold p-2 w-full flex space-x-3 ">
        <Link href='/user-dashboard/transaction'><ArrowsLeft className='text-moon-32 text-moon-white'/></Link>
        <span className="">Transaction Details</span>
      </div>
      <div className="bg-gray-200 p-4 space-y-4">
        <p className="flex justify-between">
          Amount(NGN) <span className="font-bold">{amount}</span>
        </p>
        <p className="flex justify-between">
          Date <span className="font-bold">{createdAt}</span>
        </p>
        <p className="flex justify-between">
          Reference Id <span className="font-bold">{reference}</span>
        </p>
        <p className="flex justify-between">
          Status <span className="font-bold">{status}</span>
        </p>
        <p className="flex justify-between">
          Type <span className="font-bold">{type}</span>
        </p>
        <p className="flex justify-between">
          Channel <span className="font-bold">{merchant}</span>
        </p>
      </div>
    </div>
  );
};

export default TransactionDetails;
