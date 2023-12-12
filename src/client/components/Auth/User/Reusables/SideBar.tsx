import React from "react";
import UserProfile from "@/src/client/shared/Svg/UserProfile";
import Overview from "@/src/client/shared/Svg/OverviewIcon";
import Deposit from "@/src/client/shared/Svg/Deposit";
import WithdrawalIcon from "@/src/client/shared/Svg/WithdrawalIcon";
import TransactionIcon from "@/src/client/shared/Svg/TransactionIcon";
import BonusIcon from "@/src/client/shared/Svg/BonusIcon";
import ProfileMenu from "./ProfileMenu";
import BetHistory from "@/src/client/shared/Svg/BetHistory";
import SupportIcon from "@/src/client/shared/Svg/SupportIcon";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className=" bg-white w-[176px] h-[500px] rounded-2xl p-6 flex flex-col space-y-9 ">
      <Link href="/user_dashboard">
        <ProfileMenu title="Overview">{<Overview />}</ProfileMenu>
      </Link>
      <Link href="/user_dashboard/profile/profile_update">
        <ProfileMenu title="Profile">{<UserProfile />}</ProfileMenu>
      </Link>
      <Link href="/user_dashboard/deposit">
        <ProfileMenu title="Deposit">{<Deposit />}</ProfileMenu>
      </Link>
      <Link href="/user_dashboard/withdrawal">
        <ProfileMenu title="Withdrawal">{<WithdrawalIcon />}</ProfileMenu>
      </Link>
      <Link href="/user_dashboard/bet_history">
        <ProfileMenu title="Bet History">{<BetHistory />}</ProfileMenu>
      </Link>
      <Link href="/user_dashboard/transaction">
        <ProfileMenu title="Transactions">{<TransactionIcon />}</ProfileMenu>
      </Link>
      <Link href="/user_dashboard/bonus">
        <ProfileMenu title="Bonus">{<BonusIcon />}</ProfileMenu>
      </Link>
      <Link href="/user_dashboard/user_support">
        <ProfileMenu title="Support">{<SupportIcon />}</ProfileMenu>
      </Link>
    </div>
  );
};

export default SideBar;
