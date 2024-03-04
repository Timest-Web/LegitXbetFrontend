import React from "react";
import BetItem from "../components/BetItem";
import useBet from "../../Context/BetContext/useBet";
import Link from "next/link";
import { Loader } from "@heathmont/moon-core-tw";
import useGetBetSlip from "@/src/helper/apis/services/ticket/get-bet-slips-api";



const MyBet = () => {
  const { bet, handleDelete } = useBet();
  const { data } = useGetBetSlip();

  const handleDeleteBet = (id: number, odd: number) => {
    if (id) {
      handleDelete({ id, odd });
    }
  };

  if(!data){
    return (
        <div className="flex items-center justify-center p-20">
            <Loader size='xs' />
        </div>
    )
  }

  return (
    <div className="p-4">
      {data?.slice(0, 3).map((value: any, index: number) => (
        <div key={index}>
          {/* {bet.map((val, index) => (
            <div key={index}>
              <BetItem index={index} value={value} onDelete={handleDeleteBet} />
              <hr className="my-2" />
            </div>
          ))} */}
          <div className="mt-2 w-full">
            <div className="flex items-center justify-between text-[12px] w-full">
              <p className="text-gray-800">Stack:</p>
              <p className="text-black font-bold underline">{`N${value.stake}`}</p>
            </div>
            <div className="flex items-center justify-between text-[12px] w-full">
              <p className="text-gray-800">Possible Win:</p>
              <p className="text-black font-bold underline">{`N${value.possibleWin}`}</p>
            </div>
            <div className="flex items-center justify-between text-[12px] w-full">
              <p className="text-gray-800">Status:</p>
              <p className="text-black font-bold">{value.status}</p>
            </div>
            <div className="flex items-center justify-between text-[12px] w-full">
              <p className="text-gray-800">Date:</p>
              <p className="text-black font-bold">Feb 2</p>
            </div>
          </div>

          {/* <hr className="border-b mt-2"/> */}
        </div>
      ))}

      {data && data.length > 2 && (
        <Link href="user-dashboard/bet-history">
          <button className="bg-gray-200 text-black font-bold py-1 w-full rounded-lg text-[11px] mt-3">
            View More
          </button>
        </Link>
      )}
    </div>
  );
};

export default MyBet;
