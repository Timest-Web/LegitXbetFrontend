import React from "react";
import Link from "next/link";

const TransactionView = () => {
  return (
    <div className=" absolute right-2 top-4 md:top-6 w-28 md:h-12 h-8 px-2 py-1 md:p-2 text-center md:text-left text-[11px] text-white font-medium bg-[#292D32] rounded-xl ">
      <Link href="/user-dashboard/user_support">
        <h3 className="text-left cursor-pointer">Report Transaction</h3>
      </Link>
    </div>
  );
};

export default TransactionView;
