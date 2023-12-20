import React, { useState } from "react";
import SupportComp from "./SupportComp";
import PlaceBetIcon from "@/src/client/shared/Svg/AllReceipt";
import SubmitButton from "../../Reusables/SubmitButton";
import LiveChat from "./LiveChat";
import DesktopModal from "@/src/client/shared/Modal/DesktopModal";

const SupportInactive = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <SupportComp
        supportContent={
          <div className="flex flex-col space-y-3 justify-center items-center mt-32 ">
            <PlaceBetIcon />
            <h2 className=" opacity-60 ">No tickets yet</h2>
           <div onClick={handleOpenModal}><SubmitButton buttonContent="Start a Chat" /></div>  
          </div>
        }
      />
      <DesktopModal
        openModal={isModalOpen}
        setOpenModal={setIsModalOpen}
        className="custom-modal-class"
        modalContent={<LiveChat />}
      />
    </div>
  );
};

export default SupportInactive;
