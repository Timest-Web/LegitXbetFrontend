import React from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { TableProps } from "react-table";
import ActionColumn from "../../../shared/ActionColumn";
import ViewDelete from "./ViewDelete";
import { Row } from "@tanstack/react-table";

const columnHelper = createColumnHelper<TableProps>();

const NotificationColumn = (handleClick: () => void)=>[
    {
      header: "Messages",
      accessorKey: "messages",
    },
    {
      header: "Date",
      accessorKey: "date",
    },
    {
      header: "Time",
      accessorKey: "time",
    },
    columnHelper.accessor("action", {
      header: "Action",
      cell: ({ row }: { row: Row<TableProps> }) => (
        <ActionColumn row={row}  popUpElement={<ViewDelete handleOpenModal={handleClick}/>} />
      ),
    }),
  ];

  export default NotificationColumn