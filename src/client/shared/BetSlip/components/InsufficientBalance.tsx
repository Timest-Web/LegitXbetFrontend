import React from 'react'
import Link from "next/link";

const InsufficientBalance = () => {
  return (
    <div className="px-6 py-6 text-xs">
      <p className="font-bold">Balance Insufficient</p>
      <p className="mt-12">
        There is not enough balance in your account <br /> to place this bet.
      </p>
      <div className="flex items-end justify-end space-x-2 mt-8">
        <Link
          href="/user-dashboard/deposit"
          className="px-4 py-2 text-white text-center font-bold bg-black w-full rounded-md"
        >
          Deposit
        </Link>
      </div>
    </div>
  );
}

export default InsufficientBalance