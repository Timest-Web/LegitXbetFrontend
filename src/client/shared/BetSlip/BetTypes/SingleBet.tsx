import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ErrorToast } from "../../ToastBar";
import { saveTicket } from "@/src/helper/apis/services/ticket/save-ticket-api";
import PlaceBet from "../components/PlaceBet";
import DeleteBet from "../components/DeleteBet";
import { truncateText } from "@/src/client/shared/Utils/TruncateText";
import NoSelectionYet from "../components/NoSelectionYet";
import DeleteIcon from "@/src/client/shared/Svg/DeleteIcon";
import useBet from "@/src/client/shared/Context/BetContext/useBet";
import { BetItemProps, OddsValuesProps } from "../constant/data";
import apiMessageHelper from "@/src/helper/apiMessageHelper";
import { useLink } from "../../Hooks/useLink";
import { useVisibilityControl } from "../../Hooks/useVisibilityControl";
import Modal from "../../Modal";
import AuthContent from "@/src/client/components/Auth/User/UserAuth/Components/AuthContent";
import useUser from "../../Context/UserContext/useUser";
import { placeBet } from "@/src/helper/apis/services/ticket/place-bet-api";
import BetItem from "../components/BetItem";

const SingleBet: React.FC = () => {
  const { user } = useUser();
  const { bet, handleDelete, handleDeleteAll } = useBet();
  const [amount, setAmount] = useState("");
  const [ticketCode, setTicketCode] = useState("");
  const { link: click, handleClick: selectedHandle } = useLink("login");
  const {
    isOpen,
    setIsOpen,
    handleClick: onHandleClick,
  } = useVisibilityControl();

  const handleDeleteBet = (id: number, odd: number) => {
    if (id) {
      handleDelete({ id, odd });
    }
  };

  let odds = 0;
  bet.forEach((item: OddsValuesProps) => {
    odds += Number(item.odd);
  });

  const saveTicketArray = bet.map((value) => ({
    sport: value.sport,
    matchId: String(value.id),
    marketId: value.marketId,
    marketName: value.marketName,
    oddName: value.oddName,
    odd: String(value.odd),
  }));

  const { mutateAsync } = useMutation({ mutationFn: saveTicket });
  const { mutateAsync: placeBetMutateAsync } = useMutation({
    mutationFn: placeBet,
  });

  const handleGenerateCode = () => {
    const data = { games: saveTicketArray };
    if (user.id) {
      mutateAsync(data).then((res: any) => {
        apiMessageHelper({
          message: "",
          statusCode: res?.statusCode,
          onSuccessCallback: () => {
            setTicketCode(res?.code);
          },
        });
      });
    }

    if (!user.id) {
      ErrorToast({ text: "Kindly sign in 🚩" });
    }
  };

  const handlePlaceBet = () => {
    const data = { games: saveTicketArray, amount: Number(amount) };
    if (Number(amount) >= 100 && user.id && user.amount >= 100 ) {
      placeBetMutateAsync(data).then((res: any) => {
        apiMessageHelper({
          message: "",
          statusCode: res?.statusCode,
          onSuccessCallback: () => {
            handleDeleteAll;
            console.log(res.message);
          },
        });
      });
    }



    if (Number(amount) < 100 && user.id && user.amount < 100) {
      ErrorToast({ text: "Minimun stack:100 🚩" });
    }
  };

  return (
    <>
      <ToastContainer />
      {bet.length > 0 && (
        <div className="flex flex-col items-center justify-center h-full w-full py-3 px-5">
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
            <div className="flex items-center justify-between text-black font-bold">
              <p
                className="text-xs text-block cursor-pointer"
                onClick={() => {
                  handleGenerateCode();
                  onHandleClick();
                  selectedHandle("login");
                }}
              >
                Generate Ticket Code:
              </p>
              <p className="text-sm">{ticketCode}</p>
            </div>
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
    </>
  );
};
export default SingleBet;

