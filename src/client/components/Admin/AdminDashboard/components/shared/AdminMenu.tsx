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
import Link from "next/link";
import { useRouter } from "next/router";
import { GenericHome } from "@heathmont/moon-icons-tw";
import menuItemsData from "./AdminMenuList";



const AdminMenu = () => {
  const router = useRouter();
  const isSubmenuActive = (href: string) => router.pathname === (href);

  return (
    <div className="w-[25%] bg-black h-screen">
      <Sidebar
        className="h-screen w-fit "
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: "black",
            color: "white",
            width: "110%",
          },
        }}
      >
        <Image className="px-4" src={logo} alt="logo" />
        <Menu className="text-white mt-8">
          <AdminMenuItem
            icon={<GenericHome />}
            title="Dashboard"
            href="/admin"
          />
          {Object.entries(menuItemsData).map(([header, items], index) => (
            <AdminMenuMini
              key={index}
              header={header.toUpperCase().replace(/_/g, " ")}
              content={items.map((item, index) =>
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
                    defaultOpen={item.content?.some(subItem => isSubmenuActive(subItem.href))}
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
                          component={<Link href={subItem.href} />}
                          key={index}
                          className={`${
                            router.pathname === subItem.href
                              ? "bg-white text-black"
                              : "bg-black text-white hover:text-black"
                          }`}
                        >
                          {subItem.title}
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
