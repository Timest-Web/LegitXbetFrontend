import React from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { TableProps } from "react-table";
import ActionColumn from "../../../shared/ActionColumn";
import ViewDelete from "./ViewDelete";
import { Row } from "@tanstack/react-table";

const columnHelper = createColumnHelper<TableProps>();

const UploadedColumn = ()=>
    [
        {
          header: "No",
          accessorKey: "no",
        },
        {
          header: "Doc.",
          accessorKey: "reference_id",
        },
        {
          header: "Date",
          accessorKey: "date",
        },
        {
          header: "Status",
          accessorKey: "status",
        },

        
      ];

    export default UploadedColumn;