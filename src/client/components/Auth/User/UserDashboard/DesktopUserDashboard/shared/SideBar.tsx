import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ProfileMenu from "./ProfileMenu";
import menuList from "../../constant/MenuItems";



const SideBar = () => {
  const menuItems = menuList()
  const router = useRouter();

  return (
    <div className="bg-white w-[11rem] h-[31.25rem] rounded-2xl p-6 flex flex-col space-y-9 font-dmsans">
      {menuItems.map((item, index) => (
        <Link key={index} href={item.href}>
          <ProfileMenu
            title={item.title}
            isActive={router.pathname === item.href} 
          >
            {item.icon}
          </ProfileMenu>
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
