import SubmitButton from "../../../shared/SubmitButton";
import SupportComp from "./SupportComp";
import SupportTicket from "./SupportTicket";
import PlaceBetIcon from "@/src/client/shared/Svg/AllReceipt";
import { useState } from "react";
import { useVisibilityControl } from "@/src/client/shared/Hooks/useVisibilityControl";
import { Carousel } from "@heathmont/moon-core-tw";
import { CustomCarousel } from "@/src/client/shared/Carousel";
import SearchFilter from "../../../shared/SearchAndFilter";
import Modal from "@/src/client/shared/Modal";

const EmptySupportInner = () => {
  const { isOpen, setIsOpen, handleClick } = useVisibilityControl();
  const headers = [
    "Username",
    "Email",
    "Ticket Id",
    "Priority",
    "Call number",
    "Created",
    "Status",
    "Actions",
  ];

  const renderCarouselItems = () => {
    return headers.map((header, index) => (
      <Carousel.Item key={index}>
        <th>{header}</th>
      </Carousel.Item>
    ));
  };
  return (
    <div className="pb-24 md:pb-0">
      <div className="md:hidden">
        <SearchFilter />
      </div>
      <SupportComp
        isOpenTicket
        supportContent={
          <div>
            <table className="w-full mt-4">
              <tbody>
                <tr className="text-center hidden md:flex md:justify-evenly ">
                  {headers.map((header, index) => (
                    <th key={index}>{header}</th>
                  ))}
                </tr>
              </tbody>
            </table>
            <div className="flex flex-col space-y-3 justify-center items-center h-[50vh] ">
              <PlaceBetIcon />
              <h2 className=" opacity-60 ">No tickets yet</h2>
              <div onClick={handleClick}>
                <SubmitButton buttonContent="Create a Ticket" />
              </div>
            </div>
          </div>
        }
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

export default EmptySupportInner;
