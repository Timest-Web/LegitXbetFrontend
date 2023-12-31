import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ProfileMenu from "./ProfileMenu";
import Overview from "@/src/client/shared/Svg/OverviewIcon";
import UserProfile from "@/src/client/shared/Svg/UserProfile";
import Deposit from "@/src/client/shared/Svg/Deposit";
import WithdrawalIcon from "@/src/client/shared/Svg/WithdrawalIcon";
import BetHistory from "@/src/client/shared/Svg/BetHistory";
import TransactionIcon from "@/src/client/shared/Svg/TransactionIcon";
import BonusIcon from "@/src/client/shared/Svg/BonusIcon";
import SupportIcon from "@/src/client/shared/Svg/SupportIcon";

const menuItems = [
  { title: "Overview", icon: <Overview />, href: "/user_dashboard" },
  { title: "Profile", icon: <UserProfile />, href: "/user_dashboard/profile/profile_update" },
  { title: "Deposit", icon: <Deposit />, href: "/user_dashboard/deposit" },
  { title: "Withdrawal", icon: <WithdrawalIcon />, href: "/user_dashboard/withdrawal" },
  { title: "Bet History", icon: <BetHistory />, href: "/user_dashboard/bet_history" },
  { title: "Transactions", icon: <TransactionIcon />, href: "/user_dashboard/transaction" },
  { title: "Bonus", icon: <BonusIcon />, href: "/user_dashboard/bonus" },
  { title: "Support", icon: <SupportIcon />, href: "/user_dashboard/user_support" },
];

const SideBar = () => {
  const router = useRouter();

  return (
    <div className="bg-white w-[11rem] h-[31.25rem] rounded-2xl p-6 flex flex-col space-y-9 font-dmsans">
      {menuItems.map((item, index) => (
        <Link key={index} href={item.href}>
          <ProfileMenu
            title={item.title}
            isActive={router.pathname === item.href} 
          >
            {item.icon}
          </ProfileMenu>
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
