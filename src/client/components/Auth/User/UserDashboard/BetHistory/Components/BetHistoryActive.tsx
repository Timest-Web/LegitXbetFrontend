import React, { useMemo, useState } from "react";
import LayoutDashboard from "../../shared/LayoutDashboard";
import TableComp from "../../shared/TableComp";
import BetHistoryPopUp from "./BetHistoryPopUp";
import DesktopModal from "@/src/client/shared/Modal/DesktopModal";
import { createColumnHelper } from "@tanstack/react-table";
import { TableProps } from "react-table";
import MoreIcon from "@/src/client/shared/Svg/MoreIcon";
import { Row } from "@tanstack/react-table";
import HistoryView from "./HistoryView";
import mData from "../Constant/data";
import ActionColumn from "../../shared/ActionColumn";
import { useVisibilityControl } from "@/src/client/shared/Hooks/useVisibilityControl";
import betHistoryColumns from "../Constant/betHistoryColumns";

const columnHelper = createColumnHelper<TableProps>();

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
          <DesktopModal
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
