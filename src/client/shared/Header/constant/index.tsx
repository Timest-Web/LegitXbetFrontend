import useUser from "../../Context/UserContext/useUser";
import Logout from "../../Svg/Logout";
import ReceiptSearch from "../../Svg/ReceiptSearch";
import Repeat from "../../Svg/Repeat";
import User from "../../Svg/User";
import UserTage from "../../Svg/UserTage";



export const LINK_CATEGORY_TYPES = [
  "Sports",
  "Games",
  "Spaceship",
  "Jackpot",
  "Results",
];

export const LINK_GAME_TYPES = [
  {
    page: "Home",
    href: "/",
  },
  {
    page: "Football",
    href: "/football",
  },
  {
    page: "Basketball",
    href: "/basketball",
  },
  {
    page: "Table Tennis",
    href: "/table-tennis",
  },
  {
    page: "Ice Hockey",
    href: "/icehockey",
  },
  {
    page: "Volleyball",
    href: "/volleyball",
  },
  {
    page: "Darts",
    href: "/darts",
  },
  {
    page: "Handball",
    href: "/handball",
  },
];

export const USER_HEADER_DATA = [
  {
    icon: <Repeat />,
    title: `NGN26.24`,
  },
  {
    icon: <UserTage />,
    title: "My Account",
    data: [
      {
        icon: <User />,
        title: "Profile",
        link: "/user-dashboard/profile/profile_update",
      },
      {
        icon: <ReceiptSearch />,
        title: "Bet History",
        link: "/user-dashboard/bet_history",
      },
      {
        icon: <Logout />,
        title: "Log Out",
        link: "",
      },
    ],
  },
  {
    icon: <Logout />,
    title: "Deposit",
  },
];

export const DATA = [
  {
    icon: <User />,
    title: "Profile",
    link: "/user-dashboard/profile/profile_update",
  },
  {
    icon: <ReceiptSearch />,
    title: "Bet History",
    link: "/user-dashboard/bet_history",
  },
  {
    icon: <Logout />,
    title: "Log Out",
    link: "",
  },
];
