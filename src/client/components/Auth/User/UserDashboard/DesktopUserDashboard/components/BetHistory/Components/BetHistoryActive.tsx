import React, { useMemo, useState } from "react";
import BetHistoryPopUp from "./BetHistoryPopUp";
import mData from "../Constant/data";
import { useVisibilityControl } from "@/src/client/shared/Hooks/useVisibilityControl";
import LayoutDashboard from "../../../shared/LayoutDashboard";
import TableComp from "../../../shared/ActiveTableComp";
import Modal from "@/src/client/shared/Modal";
import betHistoryColumns from "./betHistoryColumns";

const BetHistoryActive = () => {
  const { isOpen, setIsOpen, handleClick } = useVisibilityControl();

  const data = useMemo(() => mData, []);
  const columns = betHistoryColumns(handleClick);

  return (
    <LayoutDashboard
      content={
        <div>
          <TableComp
            data={data}
            columns={columns}
            searchField={false}
            filterField={false}
            tableTitle="Bet History"
          />
          <Modal
            openModal={isOpen}
            setOpenModal={setIsOpen}
            className="custom-modal-class"
            modalContent={<BetHistoryPopUp />}
          />
        </div>
      }
    />
  );
};

export default BetHistoryActive;
