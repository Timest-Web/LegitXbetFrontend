import React from "react";
import Overview from "@/src/client/shared/Svg/OverviewIcon";
import UserProfile from "@/src/client/shared/Svg/UserProfile";
import Deposit from "@/src/client/shared/Svg/Deposit";
import WithdrawalIcon from "@/src/client/shared/Svg/WithdrawalIcon";
import BetHistory from "@/src/client/shared/Svg/BetHistory";
import TransactionIcon from "@/src/client/shared/Svg/TransactionIcon";
import BonusIcon from "@/src/client/shared/Svg/BonusIcon";
import SupportIcon from "@/src/client/shared/Svg/SupportIcon";

const menuList = ()=> [
    { title: "Overview", icon: <Overview />, href: "/user-dashboard" },
    { title: "Profile", icon: <UserProfile />, href: "/user-dashboard/profile" },
    { title: "Deposit", icon: <Deposit />, href: "/user-dashboard/deposit" },
    { title: "Withdrawal", icon: <WithdrawalIcon />, href: "/user-dashboard/withdrawal" },
    { title: "Bet History", icon: <BetHistory />, href: "/user-dashboard/bet-history" },
    { title: "Transactions", icon: <TransactionIcon />, href: "/user-dashboard/transaction" },
    { title: "Bonus", icon: <BonusIcon />, href: "/user-dashboard/bonus" },
    { title: "Support", icon: <SupportIcon />, href: "/user-dashboard/user-support" },
  ];
export default menuList  