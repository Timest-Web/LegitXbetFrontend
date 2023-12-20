import React, { useMemo, useState } from "react";
import LayoutDashboard from "../../Reusables/LayoutDashboard";
import TableComp from "../../Reusables/TableComp";
import BetHistoryPopUp from "./BetHistoryPopUp";
import DesktopModal from "@/src/client/shared/Modal/DesktopModal";
import { createColumnHelper } from "@tanstack/react-table";
import { TableProps } from "react-table";
import MoreIcon from "@/src/client/shared/Svg/MoreIcon";

const mData = [
  {
    no: 1,
    reference_id: "337914456",
    date: "11/27/2023",
    status: "success",
    amount: "400",
    pot_win: "20000",
    action: "actionicon",
  },
  {
    no: 2,
    reference_id: "46787856",
    date: "04/16/2023",
    status: "success",
    amount: "200",
    pot_win: "20000",
    action: "actionicon",
  },
];

const columnHelper = createColumnHelper<TableProps>();

const BetHistoryActive = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
      cell: () => (
        <div className="flex  justify-center items-center">
          <div onClick={handleOpenModal}>
            <MoreIcon />
          </div>
          
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
