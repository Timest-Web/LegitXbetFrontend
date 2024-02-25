import React from "react";
import Overview from "@/src/client/shared/Svg/OverviewIcon";
import UserProfile from "@/src/client/shared/Svg/UserProfile";
import Deposit from "@/src/client/shared/Svg/Deposit";
import WithdrawalIcon from "@/src/client/shared/Svg/WithdrawalIcon";
import BetHistory from "@/src/client/shared/Svg/BetHistory";
import TransactionIcon from "@/src/client/shared/Svg/TransactionIcon";
import BonusIcon from "@/src/client/shared/Svg/BonusIcon";
import SupportIcon from "@/src/client/shared/Svg/SupportIcon";

const menuList = () => [
  { title: "Dashboard", icon: <Overview />, href: "/user-dashboard" },
  {
    title: "My Bets",
    icon: <BetHistory />,
    href: "/user-dashboard/bet-history",
  },

  { title: "Deposit", icon: <Deposit /> },
  {
    title: "Withdrawal",
    icon: <WithdrawalIcon />,
    href: "/user-dashboard/withdrawal",
  },
  {
    title: "Referral",
    icon: <SupportIcon />,
    href: "/user-dashboard/user-support",
  },

  {
    title: "Transactions",
    icon: <TransactionIcon />,
    href: "/user-dashboard/transaction",
  },

  {
    title: "Support Ticket",
    icon: <SupportIcon />,
    href: "/user-dashboard/user-support",
  },
  { title: "Account Setting", icon: <UserProfile />, href: "/user-dashboard/profile" },
];

export default menuList;
