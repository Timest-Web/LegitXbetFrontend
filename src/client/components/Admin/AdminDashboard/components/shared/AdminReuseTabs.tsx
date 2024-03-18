import React from "react";
import {
  TimeSandglass,
  GenericMultiBet,
  GenericBookmark,
  GenericTicket,
} from "@heathmont/moon-icons-tw"; // Import your icon components
import AdminReuseTab from "./AdminReuseTab";

const tabsData = [
  {
    href: "user-dashboard/bet-history/unsettled",
    icon: <TimeSandglass className="text-moon-32" />,
    figure: 1500,
    description: "Total Bettors",
  },
  {
    href: "user-dashboard/bet-history",
    icon: <GenericMultiBet className="text-moon-32" />,
    figure: 3400,
    description: "Active Bettors",
  },
  {
    href: "user-dashboard/transaction",
    icon: <GenericBookmark className="text-moon-32" />,
    figure: 4000,
    description: "Email Unverified Bettors",
  },
  {
    href: "user-dashboard/user-support/support-ticket",
    icon: <GenericTicket className="text-moon-32" />,
    figure: 0,
    description: "Mobile Unverified Bettors",
  },
  {
    href: "user-dashboard/transaction",
    icon: <GenericBookmark className="text-moon-32" />,
    figure: 4000,
    description: "Pending Bet",
  },
  {
    href: "user-dashboard/transaction",
    icon: <GenericBookmark className="text-moon-32" />,
    figure: 4000,
    description: "Pending Deposits",
  },
  {
    href: "user-dashboard/transaction",
    icon: <GenericBookmark className="text-moon-32" />,
    figure: 4000,
    description: "Pending Withdrawal",
  },

  {
    href: "user-dashboard/transaction",
    icon: <GenericBookmark className="text-moon-32" />,
    figure: 4000,
    description: "Pending Tickets",
  },
  {
    href: "user-dashboard/transaction",
    icon: <GenericBookmark className="text-moon-32" />,
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
    icon: <GenericBookmark className="text-moon-32" />,
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
