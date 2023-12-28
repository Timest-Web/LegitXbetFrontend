import React, { useState } from "react";
import SupportComp from "./SupportComp";
import LayoutDashboard from "../../Extras/LayoutDashboard";
import DesktopModal from "@/src/client/shared/Modal/DesktopModal";
import SupportTicket from "./SupportTicket";
import PlaceBetIcon from "@/src/client/shared/Svg/AllReceipt";
import SubmitButton from "../../Extras/SubmitButton";

const EmptySupportTicket = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal:()=>void = () => {
    setIsModalOpen(true);
  };

  return (
    <LayoutDashboard
      content={
        <div>
          <SupportComp
            isOpenTicket
            supportContent={
              <div>
                <table className="w-full mt-4">
                  <tbody>
                    <tr className="text-center ">
                      <th>Username</th>
                      <th>Email</th>
                      <th>Ticket Id</th>
                      <th>Priority</th>
                      <th>Call number</th>
                      <th>Created</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </tbody>
                </table>
                <div className="flex flex-col space-y-3 justify-center items-center mt-32 ">
                  <PlaceBetIcon />
                  <h2 className=" opacity-60 ">No tickets yet</h2>
                  <div onClick={handleOpenModal}>
                    <SubmitButton buttonContent="Create a Ticket" />
                  </div>
                </div>
              </div>
            }
          />
          <DesktopModal
            openModal={isModalOpen}
            setOpenModal={setIsModalOpen}
            className="custom-modal-class"
            modalContent={<SupportTicket />}
          />
        </div>
      }
    />
  );
};

export default EmptySupportTicket;
