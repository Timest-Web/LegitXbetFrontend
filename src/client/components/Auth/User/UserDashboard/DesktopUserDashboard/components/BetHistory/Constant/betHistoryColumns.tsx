import React from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { TableProps } from "react-table";
import ActionColumn from "../../shared/ActionColumn";
import HistoryView from "../Components/HistoryView";
import { Row } from "@tanstack/react-table";

const columnHelper = createColumnHelper<TableProps>();

const betHistoryColumns = (handleClick: () => void) => [
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
      <ActionColumn
        row={row}
        popUpElement={<HistoryView handleOpenModal={handleClick} />}
      />
    ),
  }),
];

export default betHistoryColumns;
