import React from "react";
import { Carousel } from "@heathmont/moon-core-tw";
import Link from "next/link";
import { CustomCarousel } from "@/src/client/shared/Carousel";
import menuList from "../../DesktopUserDashboard/shared/MenuItems";
import ProfileMenu from "../../DesktopUserDashboard/shared/ProfileMenu";
import { useRouter } from "next/router";

const menuItems = menuList();

const renderCarouselItems = () => {
  return <Carousel.Item ><Nav></Nav></Carousel.Item>;
};

const Nav = () => {
  const router = useRouter();
  return (
    <div className="flex space-x-3 ">
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

const MobileMenu = () => {
  return (
    <div className=" bg-white w-full h-10 p-2 mb-3 rounded-3xl ">
      <CustomCarousel renderCarouselItems={renderCarouselItems} />
    </div>
  );
};

export default MobileMenu;
