import { useState } from "react";
import TransactionView from "../Components/TransactionView";
import { createColumnHelper } from "@tanstack/react-table";
import { TableProps } from "react-table";
import { Row } from "@tanstack/react-table";
import MoreIcon from "@/src/client/shared/Svg/MoreIcon";
import ActionColumn from "../../../shared/ActionColumn";

const columnHelper = createColumnHelper<TableProps>();

interface TabViewRows {
  [key: string]: boolean;
}



const TransactionColumn = ()=> [
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
    { header: "Amount",
     accessorKey: "amount" },
    {
      header: "Pot. Win",
      accessorKey: "pot_win",
    },
    columnHelper.accessor("action", {
      header: "Action",
      cell: ({ row }: { row: Row<TableProps> }) => (
        <ActionColumn
        row={row}
        popUpElement={<TransactionView/>}/>
      ),
    }),
  ];

  export default TransactionColumn;