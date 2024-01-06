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
    { title: "Overview", icon: <Overview />, href: "/user_dashboard" },
    { title: "Profile", icon: <UserProfile />, href: "/user_dashboard/profile/profile_update" },
    { title: "Deposit", icon: <Deposit />, href: "/user_dashboard/deposit" },
    { title: "Withdrawal", icon: <WithdrawalIcon />, href: "/user_dashboard/withdrawal" },
    { title: "Bet History", icon: <BetHistory />, href: "/user_dashboard/bet_history" },
    { title: "Transactions", icon: <TransactionIcon />, href: "/user_dashboard/transaction" },
    { title: "Bonus", icon: <BonusIcon />, href: "/user_dashboard/bonus" },
    { title: "Support", icon: <SupportIcon />, href: "/user_dashboard/user_support" },
  ];
export default menuList  