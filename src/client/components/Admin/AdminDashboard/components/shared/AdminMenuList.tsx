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
    betSetUp: [
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
            href: "/admin/bet-setup/manage-bets/all-bets"
          },
          {
            title: "Won Bet",
            href: "bbb",
          },
          {
            title: "Lost Bet",
            href: "bbb",
          },
          {
            title: "Refunded Bet",
            href: "bbbb",
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
            href: "/",
          },
          {
            title: "Declare Results",
            href: "/",
          },
        ],
      },
    ],
    manageUsers: [
      {
        icon: <GenericUsers />,
        title: "Manage Bettors",
        href: "",
      },
      { icon: <OtherAgent />, title: "Administrator", href: "" },
    ],
    manageFinance: [
      { icon: <ShopBank />, title: "Payment Gateway", href: "" },
      { icon: <ShopWallet />, title: "Deposits Log", href: "/admin/bet-setup" },
      { icon: <ShopCashback />, title: "Withdraw", href: "/admin/bet-setup" },
    ],
    commission: [{ icon: <ShopRebate />, title: "Referral", href: "" }],
    support: [
      { icon: <GenericTicket />, title: "All Tickets", href: "" },
      { icon: <GenericPlus />, title: "Open Tickets", href: "" },
      {
        icon: <GenericMinus />,
        title: "Closed Ticket",
        href: "",
      },
      {
        icon: <GenericCheckAlternative />,
        title: "Answered Ticket",
        href: "",
      },
    ],
    settings: [
      { icon: <GenericGlobe />, title: "Sports API", href: "" },
      {
        icon: <GenericPartners />,
        title: "KYC Settings",
        href: "",
      },
      {
        icon: <MailEnvelope />,
        title: "Email Setting",
        href: "",
      },
      {
        icon: <MailEmailStats />,
        title: "SMS Setting",
        href: "",
      },
      {
        icon: <GenericHelp />,
        title: "Manage Section",
        href: "#",
      },
      {
        icon: <GenericSettings />,
        title: "General Setting",
        href: "#",
      },
      { icon: <OtherSun />, title: "System", href: "" },
    ],
  };

  export default menuItemsData