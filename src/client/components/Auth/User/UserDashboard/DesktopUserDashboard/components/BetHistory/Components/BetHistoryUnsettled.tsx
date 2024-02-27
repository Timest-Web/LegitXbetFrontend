import React, { useMemo } from "react";
import BetHistoryPopUp from "./BetHistoryPopUp";
import UnsettledData from "../Constant/unsettledData";
import { useVisibilityControl } from "@/src/client/shared/Hooks/useVisibilityControl";
import TableComp from "../../../shared/ActiveTableComp";
import Modal from "@/src/client/shared/Modal";
import betHistoryColumns from "./betHistoryColumns";
import BetStatusTab from "./BetStatusTab";

const BetHistoryUnsettled = () => {
  const { isOpen, setIsOpen, handleClick } = useVisibilityControl();

  const data = useMemo(() => UnsettledData, []);
  const columns = betHistoryColumns(handleClick);

  return (
    <div className="mt-6">
      <BetStatusTab isUnsettled />
      <div className="mt-8 space-y-3">
        <BetHistoryPopUp />
        <BetHistoryPopUp />
        <BetHistoryPopUp />
        <BetHistoryPopUp />
      </div>
    </div>
  );
};

export default BetHistoryUnsettled;
