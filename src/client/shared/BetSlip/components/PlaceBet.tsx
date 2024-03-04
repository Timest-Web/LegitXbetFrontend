import React from "react";
import Modal from "../../Modal";
import { useLink } from "../../Hooks/useLink";
import useUser from "../../Context/UserContext/useUser";
import AuthContent from "@/src/client/components/Auth/User/UserAuth/Components/AuthContent";
import InsufficientBalance from "./InsufficientBalance";
import { useVisibilityControl } from "../../Hooks/useVisibilityControl";

const PlaceBet = ({
  odds,
  amount,
  setAmount,
  placeBetHandle
}: {
  odds: number;
  amount: string;
  placeBetHandle: Function;
  setAmount: Function;
}) => {
  const { user } = useUser();
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
      <div className="flex items-center space-x-3 w-full text-sm">
        <input
          type="text"
          onChange={(e) => setAmount(e.target.value)}
          className="h-9 w-32 borderless-input bg-gray-200 rounded-md px-3 text-xs"
          placeholder="Enter stake Amt."
        />
        <div className="text-xs">
          <p className="font-bold text-[11px]">Potential Win</p>
          <p>
            <span className="font-bold text-xs">NGN</span>{" "}
            {`${(Number(amount) * odds).toLocaleString()}`}
          </p>
        </div>
      </div>

      <button
        onClick={() => {
          handleClick();
          onHandleClick();
          placeBetHandle();
          selectedHandle("login");
        }}
        className="h-9 w-full borderless-input font-bold bg-black text-white rounded-md px-3 text-xs"
      >
        {`Place Best`}
      </button>

      {isOpen && !user.id && (
        <Modal
          className=""
          openModal={isOpen}
          setOpenModal={setIsOpen}
          modalContent={<AuthContent selectedButton={click} />}
        />
      )}

      {openModal && user.amount < Number(amount) && (
        <Modal
          className=""
          openModal={openModal}
          setOpenModal={setIsOpenModal}
          modalContent={<InsufficientBalance />}
        />
      )}
    </div>
  );
};

export default PlaceBet;
