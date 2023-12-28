import React from "react";
import Link from "next/link";


const TransactionView = () => {
    return ( <div className=" absolute top-6 flex flex-col space-y-3 pt-4 p-2 text-left text-[11px] text-white font-medium bg-[#292D32] w-[7.1875rem] h-[2.8125rem] rounded-xl ">
    <Link href='/user_dashboard/user_support'> <h3 className="text-left cursor-pointer">Report Transaction</h3></Link>   
    </div> );
}
 
export default TransactionView;