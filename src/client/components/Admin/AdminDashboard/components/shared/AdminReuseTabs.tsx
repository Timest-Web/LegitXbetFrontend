import React from "react";
import {
  TimeSandglass,
  GenericMultiBet,
  GenericBookmark,
  GenericTicket,
  GenericUsers,
} from "@heathmont/moon-icons-tw"; // Import your icon components
import AdminReuseTab from "./AdminReuseTab";
import { FaEnvelope, FaHourglass, FaHourglassHalf, FaPhoneSlash, FaUserCheck, FaUsers } from "react-icons/fa";
import { MdMotionPhotosPause, MdOutlineMotionPhotosPause, MdPendingActions } from "react-icons/md";
import { GiWallet } from "react-icons/gi";
import { BiMoneyWithdraw } from "react-icons/bi";

const tabsData = [
  {
    href: "user-dashboard/bet-history/unsettled",
    icon: <FaUsers className="text-moon-32" />,
    figure: 1500,
    description: "Total Bettors",
  },
  {
    href: "user-dashboard/bet-history",
    icon: <FaUserCheck className="text-moon-32" />,
    figure: 3400,
    description: "Active Bettors",
  },
  {
    href: "user-dashboard/transaction",
    icon: <FaEnvelope className="text-moon-32" />,
    figure: 4000,
    description: "Email Unverified Bettors",
  },
  {
    href: "user-dashboard/user-support/support-ticket",
    icon: <FaPhoneSlash className="text-moon-32" />,
    figure: 0,
    description: "Mobile Unverified Bettors",
  },
  {
    href: "user-dashboard/transaction",
    icon: <FaHourglassHalf className="text-moon-32" />,
    figure: 4000,
    description: "Pending Bet",
  },
  {
    href: "user-dashboard/transaction",
    icon: <MdMotionPhotosPause className="text-moon-32" />,
    figure: 4000,
    description: "Pending Deposits",
  },
  {
    href: "user-dashboard/transaction",
    icon: <MdOutlineMotionPhotosPause className="text-moon-32" />,
    figure: 4000,
    description: "Pending Withdrawal",
  },

  {
    href: "user-dashboard/transaction",
    icon: <MdPendingActions className="text-moon-32" />,
    figure: 4000,
    description: "Pending Tickets",
  },
  {
    href: "user-dashboard/transaction",
    icon: <GiWallet className="text-moon-32" />,
    figure: 4000,
    description: "Total Deposited",
  },
  {
    href: "user-dashboard/transaction",
    icon: <GenericBookmark className="text-moon-32" />,
    figure: 4000,
    description: "Deposited Charge",
  },
  {
    href: "user-dashboard/transaction",
    icon: <BiMoneyWithdraw className="text-moon-32" />,
    figure: 4000,
    description: "Total Withdrawn",
  },
  {
    href: "user-dashboard/transaction",
    icon: <GenericBookmark className="text-moon-32" />,
    figure: 4000,
    description: "Withdrawal Charge",
  },
];

const AdminReuseTabs = () => {
  return (
    <section className="grid grid-rows-6 gap-3 md:grid-cols-3 md:grid-rows-2 md:gap-x-2">
      {tabsData.map((tab, index) => (
        <AdminReuseTab
          key={index} // You should use a unique key, here I'm just using the index as an example
          href={tab.href}
          icon={tab.icon}
          figure={tab.figure}
          description={tab.description}
        />
      ))}
    </section>
  );
};

export default AdminReuseTabs;
