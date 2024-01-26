import Link from "next/link";
import React from "react";

interface BetStatusTabProps{
  isAll?: boolean;
  isSettled?: boolean;
  isUnsettled?: boolean;
}

const BetStatusTab: React.FC<BetStatusTabProps> = ({isAll, isSettled, isUnsettled}) => {
  return (
    <ul className="flex space-x-2 mt-4 text-sm md:text-base mb-4 md:mb-0 md:space-x-5 font-bold [&>*:hover]:opacity-70">
      <Link href="/user-dashboard/bet-history">
        <li className={isAll? "rounded-2xl bg-black text-white px-2 opacity:100":"bg-white px-2 rounded-xl hover:opacity-100 cursor-pointer "}>All</li>
      </Link>
      <Link href="/user-dashboard/bet-history/bet-history-active">
        <li className={isSettled? " rounded-2xl bg-black text-white px-2 opacity:100":"bg-white px-2 rounded-xl hover:opacity-100 cursor-pointer "}>Settled</li>
      </Link>
      <Link href="/user-dashboard/bet-history/unsettled">
        <li className={isUnsettled? " bg-black text-white px-2 rounded-2xl opacity:100":" bg-white px-2 rounded-xl hover:opacity-100 cursor-pointer "}>Unsettled</li>
      </Link>
    </ul>
  );
};

export default BetStatusTab;
