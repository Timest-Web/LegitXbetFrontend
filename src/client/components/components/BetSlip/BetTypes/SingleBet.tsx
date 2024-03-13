import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLink } from "../../../../shared/Hooks/useLink";
import Modal from "../../../../shared/Modal";
import { ErrorToast } from "../../../../shared/ToastBar";
import PlaceBet from "../components/PlaceBet";
import DeleteBet from "../components/DeleteBet";
import NoSelectionYet from "../components/NoSelectionYet";
import useBet from "@/src/client/shared/Context/BetContext/useBet";
import { OddsValuesProps } from "../constant/data";
import { useVisibilityControl } from "../../../../shared/Hooks/useVisibilityControl";
import AuthContent from "@/src/client/components/Auth/User/UserAuth/Components/AuthContent";
import useUser from "../../../../shared/Context/UserContext/useUser";
import BetItem from "../components/BetItem";
import SuccessfulResponse from "../components/SuccessfulResponse";

const SingleBet = () => {
  const { user } = useUser();
  const { bet, handleDelete, handleDeleteAll } = useBet();
  const [amount, setAmount] = useState("");
  const { link: click, handleClick: selectedHandle } = useLink("login");
  const {
    isOpen: isSuccessfulModal,
    setIsOpen: setIsSuccessfulModal,
    handleClick: onHandleSucessfulClick,
  } = useVisibilityControl();

  const {
    isOpen,
    setIsOpen,
    handleClick: onHandleClick,
  } = useVisibilityControl();

  const handleDeleteBet = (id: number, odd: string, oddName: string) => {
    if (id) {
      handleDelete({ id, odd, oddName });
    }
  };

  let odds = 0;
  bet.forEach((item: OddsValuesProps) => {
    odds += Number(item.odd);
  });

  const handlePlaceBet = () => {
    console.log(Number(amount), user.amount);

    if (Number(amount) < user.amount && user.id && Number(amount) < 500) {
      console.log(Number(amount), user.amount);
      ErrorToast({ text: "Minimun stake:500 🚩" });
    }
    if (user.id && user.amount >= Number(amount) && Number(amount) >= 500) {
      onHandleSucessfulClick();
    }
  };

  return (
    <>
      <ToastContainer />
      {bet.length > 0 && (
        <div className="flex flex-col items-start justify-start h-full w-full py-3 px-5">
          <DeleteBet />
          <div className="flex flex-col w-full pb-16 pt-6">
            {bet.map((value, index) => (
              <div key={index}>
                <BetItem
                  index={index}
                  value={value}
                  onDelete={handleDeleteBet}
                />
                <hr className="my-2" />
              </div>
            ))}
          </div>

          <PlaceBet
            odds={odds}
            amount={amount}
            setAmount={setAmount}
            placeBetHandle={handlePlaceBet}
          />
        </div>
      )}

      {bet.length === 0 && <NoSelectionYet />}
      {isOpen && !user.id && (
        <Modal
          openModal={isOpen}
          setOpenModal={setIsOpen}
          modalContent={<AuthContent selectedButton={click} />}
        />
      )}

      {isSuccessfulModal && (
        <Modal
          openModal={isSuccessfulModal}
          setOpenModal={setIsSuccessfulModal}
          modalContent={
            <SuccessfulResponse
              closeModal={setIsSuccessfulModal}
              amount={amount}
              setAmount={setAmount}
              totalStake={`${Number(amount).toLocaleString()}.00`}
              potentialWins={`${(Number(amount) * odds).toLocaleString()}.00`}
            />
          }
        />
      )}
    </>
  );
};
export default SingleBet;
