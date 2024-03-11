import Image from "next/image";
import logo from "../../../../../../assets/logo1.png"
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
  menuClasses,
} from "react-pro-sidebar";
import { GenericHome } from "@heathmont/moon-icons-tw";

const AdminMainMenu = () => {
  return (
    <Sidebar
      className="h-screen"
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: "black",
          color: "white",
        },
      }}
    >
        <div><Image className="p-2" src={logo} alt="logo"/></div>
      <Menu
        rootStyles={{
          [`.${menuClasses.subMenuContent}`]: {
            backgroundColor: "black",
            color: "white",
          },
          [`.${menuClasses.subMenuRoot}`]: {
            backgroundColor: "black",
            color: "white",
          },
        }}
      >
        <MenuItem className="text-sm mt-6" icon={<GenericHome className="text-moon-24"/>}>Dashboard</MenuItem>
        <SubMenu
          rootStyles={{
            ["& > ." + menuClasses.button]: {
              backgroundColor: "black",
              color: "red",
              "&:hover": {
                backgroundColor: "green",
                color: "black",
              },
            },
            ["." + menuClasses.subMenuContent]: {
              backgroundColor: "#fbedff",
            },
          }}
          label="Charts"
        >
          <MenuItem className="hover:text-black"> Pie charts </MenuItem>
          <MenuItem className="hover:text-black"> Line charts </MenuItem>
        </SubMenu>
        <MenuItem className="hover:text-black"> Documentation </MenuItem>
        <MenuItem className="hover:text-black"> Calendar </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default AdminMainMenu;
