import React from "react";
import { Carousel } from "@heathmont/moon-core-tw";
import Link from "next/link";
import { CustomCarousel } from "@/src/client/shared/Carousel";
import menuList from "../../DesktopUserDashboard/shared/MenuList";
import ProfileMenu from "../../DesktopUserDashboard/shared/ProfileMenu";
import { useRouter } from "next/router";
import { GenericBurgerRegular } from "@heathmont/moon-icons-tw";
import SideBar from "../../DesktopUserDashboard/shared/SideBar";
import { useVisibilityControl } from "@/src/client/shared/Hooks/useVisibilityControl";
import Modal from "@/src/client/shared/Modal";

const menuItems = menuList();

// const renderCarouselItems = () => {
//   return <Carousel.Item ><Nav></Nav></Carousel.Item>;
// };

const Nav = () => {
  // const router = useRouter();
  // return (
  //   <div className="flex space-x-3 ">
  //     {menuItems.map((item, index) => (
  //       <Link key={index} href={item.href}>
  //         <ProfileMenu
  //           title={item.title}
  //           isActive={router.pathname === item.href}
  //         >
  //           {item.icon}
  //         </ProfileMenu>
  //       </Link>
  //     ))}
  //   </div>
  // );
};

const MobileMenu = () => {
  const { isOpen, setIsOpen, handleClick } = useVisibilityControl();
  const router = useRouter()
  return (
    // <div className=" bg-white w-full h-10 p-2 mb-3 rounded-3xl ">
    //   <CustomCarousel renderCarouselItems={renderCarouselItems} />
    // </div>
    <div>
      <GenericBurgerRegular onClick={handleClick} className=" text-moon-32 "/>
      <Modal
          openModal={isOpen}
          setOpenModal={setIsOpen}
          className="custom-modal-class"
          modalContent={<div className=" absolute bottom-[-333px] right-7"><SideBar /></div>}
        />
    </div>
  );
};

export default MobileMenu;
