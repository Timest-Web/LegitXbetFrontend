import React from "react";
import AllBetTable from "../../../shared/InactiveTable";
import BetStatusTab from "./BetStatusTab";
import BetHistoryPopUp from "./BetHistoryPopUp";
import { useQuery } from "@tanstack/react-query";
import { getBetSlip } from "@/src/helper/apis/services/bookmaking/get-bet-slip-api";
import useFormattedDate from "@/src/client/shared/Hooks/useFormatDate";
import useCapitalizeFirstLetter from "@/src/client/shared/Hooks/useCapitalizeFirstLetters";
import useBetSlipQuery from "@/src/client/shared/Hooks/useBetSlip";
import useFormatDate from "@/src/client/shared/Hooks/useFormatDate";

const BetInnerComp = () => {
  const { data: betSlipData = [] } = useBetSlipQuery();
  const capitalizeFirstLetter = useCapitalizeFirstLetter();
  const formatDate = useFormatDate();
  const formattedData = Array.isArray(betSlipData) ? betSlipData.map((betslip: any, index: number) => ({
    ...betslip,
    serialNumber: index + 1,
    status: capitalizeFirstLetter(betslip.status),
    date: formatDate(betslip.createdAt),
    amount: betslip.possibleWin.toLocaleString(),
    type: betslip.bookedGames.length === 1 ? "Single" : "Multiple",
  })) : [];

  return (
    <div className="">
      <div>
        <BetStatusTab isAll />
        <div className="mt-4">
          {formattedData.map((bet: any, index: number) => (
            <BetHistoryPopUp
              key={index}
              type={bet.type}
              id={bet.id}
              stake={bet.stake}
              date={bet.date}
              status={bet.status}
              returnStake={bet.possibleWin}
              totalOdd={bet.totalOdd}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BetInnerComp;
