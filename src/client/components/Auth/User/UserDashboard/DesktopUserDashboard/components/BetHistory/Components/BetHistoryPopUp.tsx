import SubmitButton from "../../../shared/SubmitButton";
import { Accordion } from "@heathmont/moon-core-tw";
import { ControlsChevronDownSmall } from "@heathmont/moon-icons-tw";
import Link from "next/link";
import React from "react";

interface BetHistoryPopUpProps {
  date: string;
  status: string;
  stake: number;
  returnStake: number;
  totalOdd: number;
  id: number;
  type:string
}

const BetHistoryPopUp: React.FC<BetHistoryPopUpProps> = ({
  date,
  status,
  stake,
  returnStake,
  totalOdd,
  id,
  type
}) => {
  const queryParams = {
    date,
    status,
    stake,
    returnStake,
    totalOdd,
    id,
    type
  };
  return (
    <Link
      href={{
        pathname: "/user-dashboard/bet-history/ticket-details",
        query: queryParams,
      }}
      className="flex space-x-8 mb-4 md:space-x-20"
    >
      <section className="flex flex-col">
        <p className=" font-bold ">{date}</p>
      </section>
      <section className=" w-9/12 space-y-2 ">
        <div className="flex justify-between bg-gray-500 px-3 py-1 rounded-lg text-white">
          <p>{type}</p>
          <p>{status}</p>
        </div>
        <section className="flex justify-between text-sm">
          <p className="flex flex-col">
            Total Stake(NGN) <span>{stake}</span>
          </p>
          <p className="flex flex-col">
            Total Return(NGN) <span>{returnStake}</span>
          </p>
        </section>
        <section className="text-sm font-bold">
         click for details...
        </section>
      </section>
    </Link>
  );
};

export default BetHistoryPopUp;
