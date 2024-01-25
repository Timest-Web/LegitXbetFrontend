import React from "react";
import { useRouter } from "next/router";
import { GenericBurgerRegular } from "@heathmont/moon-icons-tw";
import SideBar from "../../DesktopUserDashboard/shared/SideBar";
import { useVisibilityControl } from "@/src/client/shared/Hooks/useVisibilityControl";
import Modal from "@/src/client/shared/Modal";
import MobileLeftDrawer from "@/src/client/shared/Drawer/MobileLeftDrawer";

const MobileMenu = () => {
  const { isOpen, setIsOpen, handleClick } = useVisibilityControl();
  const router = useRouter();
  return (
    <div>
      <GenericBurgerRegular onClick={handleClick} className=" text-moon-32 " />
      <MobileLeftDrawer
      closeDrawer={setIsOpen}
      drawerContent={<SideBar/>}
      isOpen={isOpen}/>
    </div>
  );
};

export default MobileMenu;
