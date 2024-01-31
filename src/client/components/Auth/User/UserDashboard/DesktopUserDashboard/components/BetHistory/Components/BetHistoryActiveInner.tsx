import React, { useMemo} from "react";
import BetHistoryPopUp from "./BetHistoryPopUp";
import mData from "../Constant/data";
import { useVisibilityControl } from "@/src/client/shared/Hooks/useVisibilityControl";
import TableComp from "../../../shared/ActiveTableComp";
import betHistoryColumns from "./betHistoryColumns";
import BetStatusTab from "./BetStatusTab";
import Modal from "@/src/client/shared/Modal";

const BetHistoryActiveInner = () => {
  const { isOpen, setIsOpen, handleClick } = useVisibilityControl();

  const data = useMemo(() => mData, []);
  const columns = betHistoryColumns(handleClick);

  return (
        <div className="mt-6">
          <BetStatusTab isSettled/>
          <div className="mt-8 space-y-3">
          <BetHistoryPopUp/>
          <BetHistoryPopUp/>
          <BetHistoryPopUp/>
          <BetHistoryPopUp/>
          </div>
            
        </div>
  );
};

export default BetHistoryActiveInner;
