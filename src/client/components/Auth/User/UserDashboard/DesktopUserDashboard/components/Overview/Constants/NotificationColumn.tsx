import React from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { TableProps } from "react-table";
import ViewDelete from "../Components/ViewDelete";
import { Row } from "@tanstack/react-table";
import ActionColumn from "../../../shared/ActionColumn";

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