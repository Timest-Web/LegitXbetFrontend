import React from "react";
import AllBetTable from "../../../shared/InactiveTable";
import BetStatusTab from "./BetStatusTab";
import BetHistoryPopUp from "./BetHistoryPopUp";
import { useQuery } from "@tanstack/react-query";
import { getBetSlip } from "@/src/helper/apis/services/bookmaking/get-bet-slip-api";

const BetInnerComp = () => {
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      console.log("Date Parsing Failed:", dateString);
      return dateString;
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;
    console.log("Formatted Date:", formattedDate);
    return formattedDate;
  };

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const query = useQuery({ queryKey: ["betSlip"], queryFn: getBetSlip });
  const data = query.data || [];

  const formattedData = data.map((betslip: any, index: number) => ({
    ...betslip,
    serialNumber: index + 1,
    status: capitalizeFirstLetter(betslip.status),
    date: formatDate(betslip.createdAt),
    amount: betslip.possibleWin.toLocaleString(),
    type: betslip.bookedGames.length === 1 ? "Single": "Multiple"
  }));

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
