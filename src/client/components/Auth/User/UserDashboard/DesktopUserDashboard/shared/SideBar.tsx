import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ProfileMenu from "./ProfileMenu";
import menuList from "./MenuList";



const SideBar = () => {
  const menuItems = menuList()
  const router = useRouter();
 
  return (
    <div className="bg-white h-[100vh] md:w-[11rem] md:h-[31.25rem]  md:rounded-2xl p-6 flex flex-col space-y-9 ">
      {menuItems.map((item, index) => (
        <Link key={index} href={item.href}>
          <ProfileMenu
            title={item.title}
            isActive={router.pathname === item.href || (router.pathname.startsWith(item.href) && item.title != "Overview" )} 
          >
            {item.icon}
          </ProfileMenu>
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
