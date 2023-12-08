import React from "react";
import Layout from "../../../Layout";
import UserProfile from "@/src/client/shared/Svg/UserProfile";
import Overview from "@/src/client/shared/Svg/Overview";
import Deposit from "@/src/client/shared/Svg/Deposit";
import WithdrawalIcon from "@/src/client/shared/Svg/WithdrawalIcon";
import Transactions from "@/src/client/shared/Svg/Transaction";
import Bonus from "@/src/client/shared/Svg/Bonus";
import Support from "@/src/client/shared/Svg/Support";
import ProfileMenu from "./ProfileMenu";
import CategoryBetMenu from "@/src/client/shared/Header/CategoryBetMenu";
import BetHistory from "@/src/client/shared/Svg/BetHistory";

const SideBar = () => {
  return (
    <div className=" bg-white w-[176px] h-[500px] mt-6 ml-6 rounded-2xl p-6 flex flex-col space-y-9 ">
        <ProfileMenu title="Overview">{<Overview />}</ProfileMenu>
        <ProfileMenu title="Profile">{<UserProfile />}</ProfileMenu>
        <ProfileMenu title="Deposit">{<Deposit />}</ProfileMenu>
        <ProfileMenu title="Withdrawal">{<WithdrawalIcon />}</ProfileMenu>
        <ProfileMenu title="Bet History">{<BetHistory />}</ProfileMenu>
        <ProfileMenu title="Transactions">{<Transactions />}</ProfileMenu>
        <ProfileMenu title="Bonus">{<Bonus />}</ProfileMenu>
        <ProfileMenu title="Support">{<Support />}</ProfileMenu>
    </div>
  );
};

export default SideBar;
