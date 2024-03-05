import React, { useMemo } from "react";
import BetHistoryPopUp from "./BetHistoryPopUp";
import BetStatusTab from "./BetStatusTab";
import useBetSlipQuery from "@/src/client/shared/Hooks/useBetSlip";
import useCapitalizeFirstLetter from "@/src/client/shared/Hooks/useCapitalizeFirstLetters";
import useFormatDate from "@/src/client/shared/Hooks/useFormatDate";

const BetHistoryUnsettled = () => {
  const { data: betSlipData = [] } = useBetSlipQuery();
  const capitalizeFirstLetter = useCapitalizeFirstLetter();
  const formatDate = useFormatDate();
  const formattedData = betSlipData.map((betslip: any, index: number) => ({
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
