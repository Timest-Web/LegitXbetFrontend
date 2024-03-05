import React, { useMemo } from "react";
import BetHistoryPopUp from "./BetHistoryPopUp";
import UnsettledData from "../Constant/unsettledData";
import { useVisibilityControl } from "@/src/client/shared/Hooks/useVisibilityControl";
import TableComp from "../../../shared/ActiveTableComp";
import Modal from "@/src/client/shared/Modal";
import betHistoryColumns from "./betHistoryColumns";
import BetStatusTab from "./BetStatusTab";
import { getBetSlip } from "@/src/helper/apis/services/bookmaking/get-bet-slip-api";
import { useQuery } from "@tanstack/react-query";

const BetHistoryUnsettled = () => {
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
    type: betslip.bookedGames.length === 1 ? "Single" : "Multiple",
  }));

  return (
    <div className="">
      <div>
        <BetStatusTab isUnsettled />
        <div className="mt-4">
          {formattedData.map(
            (bet: any, index: number) =>
              bet.status === "Pending" && (
                <BetHistoryPopUp
                  key={bet.id}
                  type={bet.type}
                  id={bet.id}
                  stake={bet.stake}
                  date={bet.date}
                  status={bet.status}
                  returnStake={bet.possibleWin}
                  totalOdd={bet.totalOdd}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default BetHistoryUnsettled;
