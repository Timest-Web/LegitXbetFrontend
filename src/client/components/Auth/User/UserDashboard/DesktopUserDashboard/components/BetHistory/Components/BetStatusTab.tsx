import Link from "next/link";
import React from "react";

interface BetStatusTabProps{
  isAll?: boolean;
  isSettled?: boolean;
  isUnsettled?: boolean;
}

const BetStatusTab: React.FC<BetStatusTabProps> = ({isAll, isSettled, isUnsettled}) => {
  return (
    <ul className="flex space-x-3 font-bold">
      <Link href="/user-dashboard/bet-history">
        <li className={isAll? "opacity:100":"opacity-50 hover:opacity-100 cursor-pointer"}>All</li>
      </Link>
      <Link href="/user-dashboard/bet-history/bet-history-active">
        <li className={isSettled? "opacity:100":"opacity-50 hover:opacity-100 cursor-pointer "}>Settled</li>
      </Link>
      <Link href="/user-dashboard/bet-history/unsettled">
        <li className={isUnsettled? "opacity:100":"opacity-50 hover:opacity-100 cursor-pointer "}>Unsettled</li>
      </Link>
    </ul>
  );
};

export default BetStatusTab;
