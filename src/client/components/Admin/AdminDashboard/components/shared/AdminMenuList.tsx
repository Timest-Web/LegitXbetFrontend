import {
  GenericHome,
  SportEsoccer,
  SportOlympics,
  SportEsportGeneric,
  GenericMultiBet,
  GenericBet,
  OtherAgent,
  GenericUsers,
  ShopWallet,
  ShopCashback,
  ShopBank,
  ShopRebate,
  GenericPlus,
  GenericTicket,
  NotificationsError,
  GenericMinus,
  GenericCheckAlternative,
  GenericGlobe,
  GenericPartners,
  MailEnvelope,
  MailEmailStats,
  GenericHelp,
  OtherSun,
  GenericSettings,
} from "@heathmont/moon-icons-tw";

type MenuItemData = {
  icon: JSX.Element;
  title: string;
  content?: { title: string; href: string }[];
  asMenuItem?: boolean;
  href: string;
};

type MenuItemsData = {
  [key: string]: MenuItemData[];
};

const menuItemsData: MenuItemsData = {
  bet_Setup: [
    {
      icon: <SportEsoccer />,
      title: "Sport Categories",
      asMenuItem: true,
      href: "/admin/bet-setup/sport-categories",
    },
    {
      icon: <SportOlympics />,
      title: "Manage Leagues",
      asMenuItem: true,
      href: "/admin/bet-setup/manage-leagues",
    },
    {
      icon: <SportEsportGeneric />,
      title: "Manage Matches",
      content: [
        {
          title: "All Matches",
          href: "/admin/bet-setup/manage-matches/all-matches",
        },
        {
          title: "Running Matches",
          href: "/admin/bet-setup/manage-matches/running-matches",
        },
        {
          title: "Upcoming Matches",
          href: "/admin/bet-setup/manage-matches/upcoming-matches",
        },
        {
          title: "Close Matches(Highlights)",
          href: "/admin/bet-setup/manage-matches/closed-matches",
        },
      ],
      href: "",
    },
    {
      icon: <GenericBet />,
      title: "Manage Bets",
      href: "",
      content: [
        {
          title: "All Bets",
          href: "/admin/bet-setup/manage-bets/all-bets",
        },
        {
          title: "Won Bet",
          href: "/admin/bet-setup/manage-bets/won-bets",
        },
        {
          title: "Lost Bet",
          href: "/admin/bet-setup/manage-bets/lost-bets",
        },
        {
          title: "Refunded Bet",
          href: "/admin/bet-setup/manage-bets/refunded-bets",
        },
      ],
    },
    {
      icon: <GenericMultiBet />,
      title: "Results",
      href: "/admin/bet-setup",
      content: [
        {
          title: "Pending Results",
          href: "/admin/bet-setup/results/pending-results",
        },
        {
          title: "Declare Results",
          href: "/admin/bet-setup/results/declared-results",
        },
      ],
    },
  ],
  manage_Users: [
    {
      icon: <GenericUsers />,
      title: "Manage Bettors",
      href: "",
      content: [
        {
          title: "All Bettors",
          href: "/admin/manage-users/all-bettors",
        },
        {
          title: "Active Bettors",
          href: "/admin/manage-users/active-bettors",
        },
        {
          title: "Banned Bettors",
          href: "/admin/manage-users/banned-bettors",
        },
        {
          title: "Unverified Bettors",
          href: "/admin/manage-users/unverified-bettors",
        },
      ],
    },
    {
      icon: <OtherAgent />,
      title: "Administrator",
      href: "",
      content: [
        {
          title: "Manage User",
          href: "/admin/manage-users/manage-user",
        },
      ],
    },
  ],
  manage_Finance: [
    {
      icon: <ShopBank />,
      title: "Payment Gateway",
      href: "/admin/manage-finance/payment-gateway",
      asMenuItem: true,
    },
    {
      icon: <ShopWallet />,
      title: "Deposits Log",
      href: "/admin/manage-finance/deposit-log",
      asMenuItem: true,
    },
    {
      icon: <ShopCashback />,
      title: "Withdraw",
      href: "/admin/bet-setup",
      content: [
        {
          title: "Withdrawal Methods",
          href: "/admin/manage-finance/withdrawal-methods",
        },
        {
          title: "Withdrawal Log",
          href: "/admin/manage-finance/withdrawal-log",
        },
        {
          title: "Pending Withdrawals",
          href: "/admin/manage-finance/pending-withdrawals",
        },
        {
          title: "Approved Withdrawals",
          href: "/admin/manage-finance/approved-withdrawals",
        },
        {
          title: "Rejected Withdrawals",
          href: "/admin/manage-finance/rejected-withdrawals",
        },
      ],
    },
  ],
  commission: [
    {
      icon: <ShopRebate />,
      title: "Referral",
      href: "/admin/commissions/referral",
      asMenuItem: true,
    },
  ],
  support: [
    {
      icon: <GenericTicket />,
      title: "All Tickets",
      href: "/admin/support-tickets/all-tickets",
      asMenuItem: true,
    },
    {
      icon: <GenericPlus />,
      title: "Open Tickets",
      href: "/admin/support-tickets/open-tickets",
      asMenuItem: true,
    },
    {
      icon: <GenericMinus />,
      title: "Closed Ticket",
      href: "/admin/support-tickets/closed-tickets",
      asMenuItem: true,
    },
    {
      icon: <GenericCheckAlternative />,
      title: "Answered Ticket",
      href: "/admin/support-tickets/answered-tickets",
      asMenuItem: true,
    },
  ],
  settings: [
    {
      icon: <GenericGlobe />,
      title: "Sports API",
      href: "/admin/settings/sports-api",
      asMenuItem: true,
    },
    {
      icon: <GenericPartners />,
      title: "KYC Settings",
      href: "",
    },
    {
      icon: <MailEnvelope />,
      title: "Email Setting",
      href: "",
      content: [
        {
          title: "Email Templates",
          href: "/admin/settings/email-templates",
        },
        {
          title: "Email Control",
          href: "/admin/settings/email-control",
        },
      ],
    },
    {
      icon: <MailEmailStats />,
      title: "SMS Setting",
      href: "/admin/settings/sms-setting",
      asMenuItem: true,
    },
    {
      icon: <GenericHelp />,
      title: "Manage Section",
      href: "#",
      content: [
        {
          title: "",
          href: "",
        },
      ],
    },
    {
      icon: <GenericSettings />,
      title: "General Setting",
      href: "#",
      asMenuItem: true,
    },
    {
      icon: <OtherSun />,
      title: "System",
      href: "",
      content: [
        {
          title: "BackUp",
          href: "/admin/settings/backup",
        },
        {
          title: "Cache",
          href: "/admin/settings/backup",
        },
      ],
    },
  ],
};

export default menuItemsData;
