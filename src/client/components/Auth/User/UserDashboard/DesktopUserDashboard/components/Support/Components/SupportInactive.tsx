import React, { useState } from "react";
import SupportComp from "./SupportComp";
import PlaceBetIcon from "@/src/client/shared/Svg/AllReceipt";
import LiveChat from "./LiveChat";
import SubmitButton from "../../../shared/SubmitButton";
import Modal from "@/src/client/shared/Modal";
import SearchFilter from "../../../shared/SearchAndFilter";
import { useVisibilityControl } from "@/src/client/shared/Hooks/useVisibilityControl";
import SupportTicket from "./SupportTicket";

const SupportInactive = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isOpen, setIsOpen, handleClick } = useVisibilityControl();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="pb-24 md:pb-0 flex justify-center items-center flex-col space-y-3 md:flex-row md:space-x-4 md:space-y-0 ">
      <section>
        <p className="mb-2 font-bold">Live Chat</p>
        <div className="flex justify-center items-center w-72 h-32 md:h-96 rounded-lg bg-white">
          <div onClick={handleOpenModal}>
            <SubmitButton buttonContent="Start a Chat" />
          </div>
        </div>
      </section>
      <section>
        <p className="mb-2 font-bold">Create a Ticket</p>
        <div className="flex justify-center items-center w-72 h-32 md:h-96 rounded-lg bg-white">
          <div onClick={handleClick}>
            <SubmitButton buttonContent="Open a Ticket" />
          </div>
        </div>
      </section>
      <Modal
        openModal={isModalOpen}
        setOpenModal={setIsModalOpen}
        className="custom-modal-class"
        modalContent={<LiveChat handleCloseModal={handleCloseModal} />}
      />
            <Modal
        openModal={isOpen}
        setOpenModal={setIsOpen}
        className="custom-modal-class"
        modalContent={<SupportTicket />}
      />
    </div>
  );
};

export default SupportInactive;
