import React from "react";
import Modal from "../../Modal";
import { useLink } from "../../Hooks/useLink";
import useUser from "../../Context/UserContext/useUser";
import AuthContent from "@/src/client/components/Auth/User/UserAuth/Components/AuthContent";
import InsufficientBalance from "./InsufficientBalance";
import { useVisibilityControl } from "../../Hooks/useVisibilityControl";
import useDeviceType from "../../Hooks/useDeviceType";
import MobileTopDrawer from "../../Drawer/MobileTopDrawer";

const PlaceBet = ({
  odds,
  amount,
  setAmount,
  placeBetHandle,
}: {
  odds: number;
  amount: string;
  placeBetHandle: Function;
  setAmount: Function;
}) => {
  const { user } = useUser();
  const { isMobile } = useDeviceType();
  const { link: click, handleClick: selectedHandle } = useLink("login");

  const {
    isOpen,
    setIsOpen,
    handleClick: onHandleClick,
  } = useVisibilityControl();
  const {
    isOpen: openModal,
    setIsOpen: setIsOpenModal,
    handleClick,
  } = useVisibilityControl();

  return (
    <div className="flex flex-col items-center justify-center w-full space-y-2">
      <div className="flex flex-col items-center space-x-3 w-full text-sm"></div>
      <div className="flex items-center justify-center w-full border rounded-md p-2">
        <div className="text-xs w-full">
          <p className="font-bold text-[11px]">Total Stake</p>
          <p>
            <span className="font-bold text-xs">NGN</span>{" "}
            {`${Number(amount).toLocaleString()}.00`}
          </p>
        </div>
        <div className="text-xs w-full">
          <p className="font-bold text-[11px]">Potential Win</p>
          <p>
            <span className="font-bold text-xs">NGN</span>{" "}
            {`${(Number(amount) * odds).toLocaleString()}.00`}
          </p>
        </div>
      </div>

      <input
        type="text"
        onChange={(e) => setAmount(e.target.value)}
        className="h-9 w-full borderless-input bg-gray-200 rounded-md px-3 text-xs"
        placeholder="Enter stake Amt."
      />

      <button
        onClick={() => {
          handleClick();
          onHandleClick();
          placeBetHandle();
          selectedHandle("login");
        }}
        className="h-9 w-full borderless-input font-bold bg-black text-white rounded-md px-3 text-xs"
      >
        {`Place Bet`}
      </button>

      {!isMobile && isOpen && !user.id && (
        <Modal
          className=""
          openModal={isOpen}
          setOpenModal={setIsOpen}
          modalContent={<AuthContent selectedButton={click} />}
        />
      )}

      {!isMobile && openModal && user.amount < Number(amount) && (
        <Modal
          className=""
          openModal={openModal}
          setOpenModal={setIsOpenModal}
          modalContent={<InsufficientBalance />}
        />
      )}

      {isMobile && isOpen && !user.id && (
        <MobileTopDrawer
          isOpen={isOpen}
          closeDrawer={setIsOpen}
          drawerContent={<AuthContent selectedButton={click} />}
        />
      )}

      {isMobile && openModal && user.amount < Number(amount) && (
        <MobileTopDrawer
          isOpen={openModal}
          closeDrawer={setIsOpenModal}
          drawerContent={<InsufficientBalance />}
        />
      )}
    </div>
  );
};

export default PlaceBet;
