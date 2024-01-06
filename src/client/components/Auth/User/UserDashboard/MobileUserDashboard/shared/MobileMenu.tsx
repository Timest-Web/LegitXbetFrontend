import React from "react";
import { Carousel } from "@heathmont/moon-core-tw";
import Link from "next/link";
import { CustomCarousel } from "@/src/client/shared/Carousel";
import menuList from "../../DesktopUserDashboard/shared/MenuItems";

const menuItems = menuList();

const renderCarouselItems = () => {
  return menuItems.map((item, index) => (
    <Carousel.Item key={index}>
      <Link href="#" className="text-[11px] text-black text-xs">
        <div className="flex space-x-3">
          <div className="">{item.icon}</div>
          <div>{item.title}</div>
        </div>
      </Link>
    </Carousel.Item>
  ));
};

const MobileMenu = () => {
  return (
    <div className=" bg-white w-full h-10 p-2 mb-3 rounded-3xl ">
      <CustomCarousel renderCarouselItems={renderCarouselItems} />
    </div>
  );
};

export default MobileMenu;
