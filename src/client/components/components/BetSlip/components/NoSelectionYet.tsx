import React, { useState } from "react";
import { ErrorToast } from "../../../../shared/ToastBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader } from "@heathmont/moon-core-tw";
import { betTicket } from "@/src/helper/apis/services/ticket/get-ticket-api";
import { useMutation } from "@tanstack/react-query";
import apiMessageHelper from "@/src/helper/apiMessageHelper";
import BetItem from "./BetItem";

type BetTicketValuesProps = {
  id: number;
  homeTeam: string;
  awayTeam: string;
  oddName: string;
  odd: string;
};

const NoSelectionYet = () => {
  const [inputField, setInputField] = useState("");
  const { mutateAsync, data, isPending } = useMutation({
    mutationFn: betTicket,
  });

  const handleSubmit = async () => {
    if (inputField.length !== 7) {
      ErrorToast({ text: "Cross check code length!" });
    }

    if (inputField.length === 7) {
      mutateAsync({ payload: inputField }).then((res: any) => {
        apiMessageHelper({
          message: res?.message,
          statusCode: res?.statusCode,
        });
      });
    }
  };

  const extractedTicketValues = () => {
    const ticketItems: any = [];

    if (Array.isArray(data?.games)) {
      data?.games?.forEach((value: BetTicketValuesProps) => {
        ticketItems.push({
          id: String(value.id),
          odd: value.odd,
          oddName: value.oddName,
          teamOne: "ManU",
          teamTwo: "Chelsea",
        });
      });
    }

    return ticketItems;
  };

  const ticketDatas = extractedTicketValues();

  return (
    <>
      {!data?.id ? (
        <div className="flex items-center justify-center w-full m-auto">
          <ToastContainer />
          <div className="flex flex-col items-start justify-center p-4 space-y-4">
            <p className="text-gray-800 text-xs">
              To place a bet, click on the odds. Or insert a booking code
            </p>
            <input
              placeholder="Booking Code"
              onChange={(e) => setInputField(e.target.value)}
              className="h-9 px-2 rounded w-full border borderless-input text-xs"
            />
            <button
              onClick={handleSubmit}
              className={
                "flex items-center justify-center text-center h-9 w-full borderless-input font-bold text-white rounded-md px-3 text-xs bg-black"
              }
            >
              {isPending ? <Loader size="xs" /> : "View Ticket"}
            </button>
          </div>
        </div>
      ) : (
        <div className="px-5">
          <div className="mt-5"></div>
          {ticketDatas.map((value: any, index: number) => (
            <div key={index}>
              <BetItem index={index} value={value} onDelete={undefined} />
              <hr className="my-2" />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default NoSelectionYet;
