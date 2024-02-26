import React from "react";
import { useLink } from "@/src/client/shared/Hooks/useLink";
import RenderBetSlipType from "./components/RenderBetSlipType";
import useBet from "../Context/BetContext/useBet";

const BetSlip = () => {
  const betSlipTitle = ["Bet Slip", "My Bets"];
//   const BetSlipType = ["Single", "Multiple", "System"];
  const { link, handleClick } = useLink("Bet Slip");
  const { link: betSlipTypeLink, handleClick: betSlipTypeHandleClick } = useLink("Single");
  const { bet } = useBet();

  // console.log(bet);

  const checkDifferentIds = (array: any) => {
    const idSet = new Set();

    for (const obj of array) {
      idSet.add(obj.id);
      if (idSet.size >= 2) {
        return true;
      }
    }

    return false;
  };

  const checkDifferentOddsId = checkDifferentIds(bet);

  return (
    <div className="w-[283px] h-max rounded-lg shadow-lg border bg-white pb-2">
      <div className="flex items-center justify-between py-4 px-3">
        {betSlipTitle.map((value, index) => (
          <div
            key={index}
            onClick={() => handleClick(value)}
            className={`${
              value === link ? "bg-black text-white" : "text-black"
            } flex h-[32px] w-[116px] items-center font-bold justify-center transition transform duration-1000 transition-x m-auto rounded-md text-xs cursor-pointer`}
          >
            <p className="text-center">{value}</p>
          </div>
        ))}
      </div>

      <hr />

      <div className="flex items-center justify-between px-12 text-xs py-3 font-bold">
        <p
          className={`${
            bet.length > 0 ? "text-black" : "text-gray-400"
          } cursor-pointer`}
        >
          Single
        </p>
        <p
          className={`${
            checkDifferentOddsId === true ? "text-black" : "text-gray-400"
          } cursor-pointer`}
        >
          Multiple
        </p>
        <p
          className={`${
            checkDifferentOddsId === true ? "text-black" : "text-gray-400"
          } cursor-pointer`}
        >
          System
        </p>
      </div>

      <hr />

      <RenderBetSlipType betSlipTypeLink={betSlipTypeLink} />
    </div>
  );
};

export default BetSlip;
