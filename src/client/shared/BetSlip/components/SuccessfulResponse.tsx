import React, { useState } from "react";
import {
  FilesCopy,
  GenericShareAndroid,
  GenericCheckAlternative,
  NotificationsAlert,
} from "@heathmont/moon-icons-tw";
import { useRouter } from "next/router";
import { placeBet } from "@/src/helper/apis/services/ticket/place-bet-api";
import { useMutation } from "@tanstack/react-query";
import apiMessageHelper from "@/src/helper/apiMessageHelper";
import { saveTicket } from "@/src/helper/apis/services/ticket/save-ticket-api";
import useUser from "../../Context/UserContext/useUser";
import useBet from "../../Context/BetContext/useBet";

const SuccessfulResponse = ({
  amount,
  totalStake,
  potentialWins,
  closeModal
}: {
  closeModal: Function,
  amount: string;
  totalStake: string;
  potentialWins: string;
}) => {
  const { user } = useUser();
  const { bet } = useBet();
  const router = useRouter();
  const [ticketCode, setTicketCode] = useState("");
  const [isBetPlace, setIsBetPlace] = useState(false);
  const handleClick = () => {
    router.reload();
  };

  const { mutateAsync: placeBetMutateAsync } = useMutation({
    mutationFn: placeBet,
  });
  const { mutateAsync, isPending } = useMutation({ mutationFn: saveTicket });

  const saveTicketArray = bet.map((value) => ({
    sport: value.sport.toLocaleLowerCase(),
    matchId: String(value.id),
    marketId: value.marketId,
    oddName: value.oddName,
    odd: String(value.odd),
  }));

  const data = { games: saveTicketArray, amount: Number(amount) };

  const handleSubmit = () => {
    placeBetMutateAsync(data).then((res: any) => {
      apiMessageHelper({
        message: res.message,
        statusCode: res?.statusCode,
        onSuccessCallback: () => {
          setIsBetPlace(true);
        },
      });
    });
  };


    const handleGenerateCode = () => {
      const data = { games: saveTicketArray };
      if (user.id) {
        mutateAsync(data).then((res: any) => {
          apiMessageHelper({
            message: res.message,
            statusCode: res?.statusCode,
            onSuccessCallback: () => {
              setTicketCode(res?.code);
              handleSubmit();
            },
          });
        });
      }
    };

  return (
    <>
      {ticketCode && isBetPlace ? (
        <div className="flex flex-col items-center justify-center p-10">
          <div className="bg-gold p-2 rounded-full">
            <GenericCheckAlternative height={40} width={40} />
          </div>

          <p className="font-bold mt-3 text-[18px]">Submission Successful</p>
          <div className="mt-5 w-[300px]">
            <div className="flex items-center justify-between w-full">
              <p>Total Stake</p>
              <p className="font-semibold">{totalStake}</p>
            </div>
            <div className="flex items-center justify-between w-full">
              <p>Potential Win</p>
              <p className="font-semibold">{`${potentialWins}`}</p>
            </div>
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center justify-center">
                <p>Booking Code</p>
                <NotificationsAlert height={26} width={26} />
              </div>
              <div className="flex items-center space-x-2">
                <GenericShareAndroid height={26} width={26} />
                <FilesCopy height={26} width={26} />
                <p className="font-semibold">{ticketCode}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-6 w-full space-y-4 px-8">
            <button
              className="text-white bg-gold py-2 px-6 w-full"
              onClick={handleClick}
            >
              ok
            </button>
            <button
              className="border border-gold font-bold w-full py-2 px-6 text-gold"
              onClick={() => closeModal()}
            >
              Rebet
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-5">
          <p>{`You're about to place bet`}</p>
          <div className="mt-5 w-[200px]">
            <div className="flex items-center justify-between w-full text-[12px]">
              <p>Total Stake</p>
              <p className="font-semibold">{totalStake}</p>
            </div>
            <div className="flex items-center justify-between w-full text-[12px]">
              <p>Potential Win</p>
              <p className="font-semibold">{`${potentialWins}`}</p>
            </div>
          </div>

          <div className="flex items-center justify-center mt-6 w-full space-x-1 px-8">
            <button
              className="text-white bg-gold py-2 px-6 w-full"
              onClick={handleGenerateCode}
            >
              {isPending && !isBetPlace ? "Submiting..." : "Continue"}
            </button>
            <button
              className="border border-gold font-bold w-full py-2 px-6 text-gold"
              onClick={() => closeModal()}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};



export default SuccessfulResponse;
