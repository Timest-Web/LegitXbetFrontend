import React, { useState } from "react";
import SupportComp from "./SupportComp";
import PlaceBetIcon from "@/src/client/shared/Svg/AllReceipt";
import LiveChat from "./LiveChat";
import SubmitButton from "../../../shared/SubmitButton";
import Modal from "@/src/client/shared/Modal";
import SearchFilter from "../../../shared/SearchAndFilter";

const SupportInactive = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="pb-24 md:pb-0">
      <div className="md:hidden">
        <SearchFilter />
      </div>
      <SupportComp
        isLiveChat
        supportContent={
          <div className="flex flex-col space-y-3 justify-center items-center h-[50vh]">
            <h2 className=" font-bold text-center ">Let us connect you to our available agents</h2>
            <div onClick={handleOpenModal}>
              <SubmitButton buttonContent="Start a Chat" />
            </div>
          </div>
        }
      />
      <Modal
        openModal={isModalOpen}
        setOpenModal={setIsModalOpen}
        className="custom-modal-class"
        modalContent={<LiveChat handleCloseModal={handleCloseModal} />}
      />
    </div>
  );
};

export default SupportInactive;
