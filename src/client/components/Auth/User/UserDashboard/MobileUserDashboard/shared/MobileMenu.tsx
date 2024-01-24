import React from "react";
import { useRouter } from "next/router";
import { GenericBurgerRegular } from "@heathmont/moon-icons-tw";
import SideBar from "../../DesktopUserDashboard/shared/SideBar";
import { useVisibilityControl } from "@/src/client/shared/Hooks/useVisibilityControl";
import Modal from "@/src/client/shared/Modal";

const MobileMenu = () => {
  const { isOpen, setIsOpen, handleClick } = useVisibilityControl();
  const router = useRouter();
  return (
    <div>
      <GenericBurgerRegular onClick={handleClick} className=" text-moon-32 " />
      <Modal
        openModal={isOpen}
        setOpenModal={setIsOpen}
        className="custom-modal-class"
        modalContent={
          <div className=" absolute bottom-[-333px] right-7">
            <SideBar />
          </div>
        }
      />
    </div>
  );
};

export default MobileMenu;
