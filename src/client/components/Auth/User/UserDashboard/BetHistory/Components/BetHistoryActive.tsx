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

const columnHelper = createColumnHelper<TableProps>();
interface TabViewRows {
  [key: string]: boolean;
}

const BetHistoryActive = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tabViewRows, setTabViewRows] = useState<TabViewRows>({});

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const toggleTabView = (row: { id: string | number }) => {
    setTabViewRows((prevState) => ({
      ...prevState,
      [row.id]: !prevState[row.id],
    }));
  };

  const data = useMemo(() => mData, []);

  const columns: any = [
    {
      header: "No",
      accessorKey: "no",
    },
    {
      header: "Bet Id",
      accessorKey: "reference_id",
    },
    {
      header: "Date Placed",
      accessorKey: "date",
    },
    {
      header: "Status",
      accessorKey: "status",
    },
    { header: "Amount", accessorKey: "amount" },
    {
      header: "Pot. Win",
      accessorKey: "pot_win",
    },
    columnHelper.accessor("action", {
      header: "Action",
      cell: ({ row }: { row: Row<TableProps> }) => (
        <div className="flex  justify-center items-center relative">
          <button onClick={() => toggleTabView(row)}>
            <MoreIcon />
          </button>
          {tabViewRows[row.id] && (
            <HistoryView handleOpenModal={handleOpenModal} />
          )}
        </div>
      ),
    }),
  ];

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
            openModal={isModalOpen}
            setOpenModal={setIsModalOpen}
            className="custom-modal-class"
            modalContent={<BetHistoryPopUp />}
          />
        </div>
      }
    />
  );
};

export default BetHistoryActive;
