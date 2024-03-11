import Image from "next/image";
import logo from "../../../../../../assets/LegitxLogo.jpg";
import AdminMenuItem from "./AdminMenuItem";
import AdminMenuMini from "./AdminMenuMini";
import {
  Menu,
  MenuItem,
  Sidebar,
  SubMenu,
  menuClasses,
  sidebarClasses,
} from "react-pro-sidebar";
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
  content?: string[];
  asMenuItem?: boolean;
  href: string
};

type MenuItemsData = {
  [key: string]: MenuItemData[];
};

const menuItemsData: MenuItemsData = {
  betSetUp: [
    { icon: <SportEsoccer />, title: "Sport Categories", asMenuItem: true, href:'/admin/bet-setup/sport-categories' },
    { icon: <SportOlympics />, title: "Manage Leagues", asMenuItem: true, href:'/admin/bet-setup' },
    {
      icon: <SportEsportGeneric />,
      title: "Manage Matches",
      content: [
        "All Matches",
        "Running Matches",
        "Upcoming Matches",
        "Close Matches (Highlights)",
      ], href:'/admin/bet-setup'
    },
    { icon: <GenericBet />, title: "Manage Bets" , href:'/admin/bet-setup'  },
    { icon: <GenericMultiBet />, title: "Results" , href:'/admin/bet-setup' },
  ],
  manageUsers: [
    {
      icon: <GenericUsers />,
      title: "Manage Bettors",
      content: ["Alaba", "Active"] , href:'/admin/bet-setup'
    },
    { icon: <OtherAgent />, title: "Administrator" , href:'/admin/bet-setup' },
  ],
  manageFinance: [
    { icon: <ShopBank />, title: "Payment Gateway" , href:'/admin/bet-setup' },
    { icon: <ShopWallet />, title: "Deposits Log" , href:'/admin/bet-setup' },
    { icon: <ShopCashback />, title: "Withdraw" , href:'/admin/bet-setup'},
  ],
  commission: [{ icon: <ShopRebate />, title: "Referral" , href:'/admin/bet-setup'}],
  support: [
    { icon: <GenericTicket />, title: "All Tickets" , href:'/admin/bet-setup'},
    { icon: <GenericPlus />, title: "Open Tickets" , href:'/admin/bet-setup' },
    { icon: <GenericMinus />, title: "Closed Ticket" , href:'/admin/bet-setup'},
    { icon: <GenericCheckAlternative />, title: "Answered Ticket" , href:'/admin/bet-setup'},
  ],
  settings: [
    { icon: <GenericGlobe />, title: "Sports API" , href:'/admin/bet-setup'},
    { icon: <GenericPartners />, title: "KYC Settings" , href:'/admin/bet-setup' },
    { icon: <MailEnvelope />, title: "Email Setting" , href:'/admin/bet-setup'},
    { icon: <MailEmailStats />, title: "SMS Setting" , href:'/admin/bet-setup'},
    { icon: <GenericHelp />, title: "Manage Section" , href:'/admin/bet-setup'},
    { icon: <GenericSettings />, title: "General Setting" , href:'/admin/bet-setup'},
    { icon: <OtherSun />, title: "System" , href:'/admin/bet-setup'},
  ],
};

const AdminMenu = () => {
  return (
    <div className="w-[25%] bg-black">
      <Sidebar
        className="h-screen w-fit "
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: 'black',
            color: "white",
            width:'110%'
          },
        }}
      >
        <Image className="px-4" src={logo} alt="logo" />
        <Menu className="text-white mt-8">
          <AdminMenuItem icon={<GenericHome />} title="Dashboard" />
          {Object.entries(menuItemsData).map(([header, items], index) => (
            <AdminMenuMini
              key={index}
              header={header.toUpperCase().replace(/_/g, " ")}
              content={items.map((item, index) =>
                // Check if the item should be rendered as a MenuItem or SubMenu
                item.asMenuItem ? (
                  <MenuItem
                  href={item.href}
                    key={index}
                    icon={item.icon}
                    rootStyles={{
                      ["& > ." + menuClasses.button]: {
                        backgroundColor: "black",
                        color: "red",
                        "&:hover": {
                          backgroundColor: "white",
                          color: "black",
                        },
                        fontWeight: "700",
                      },
                      ["." + menuClasses.label]: {
                        fontSize: "0.75rem",
                      },
                    }}
                  >
                    {item.title}
                  </MenuItem>
                ) : (
                  <SubMenu
                    key={index}
                    label={item.title}
                    icon={item.icon}
                    rootStyles={{
                      ["& > ." + menuClasses.button]: {
                        backgroundColor: "black",
                        color: "red",
                        "&:hover": {
                          backgroundColor: "white",
                          color: "black",
                        },
                        fontWeight: "700",
                      },
                      ["." + menuClasses.subMenuContent]: {
                        backgroundColor: "white",
                      },
                      ["." + menuClasses.icon]: {
                        fontSize: "24px",
                      },
                      ["." + menuClasses.label]: {
                        fontSize: "0.75rem",
                      },
                    }}
                  >
                    {item.content &&
                      item.content.map((subItem, index) => (
                        <MenuItem
                          key={index}
                          className="bg-black text-white hover:text-black hover:bg-white"
                        >
                          {subItem}
                        </MenuItem>
                      ))}
                  </SubMenu>
                )
              )}
            />
          ))}
        </Menu>
      </Sidebar>
    </div>
  );
};

export default AdminMenu;
