import React from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { TableProps } from "react-table";
import { Row } from "@tanstack/react-table";
import SubmitButton from "../../../shared/SubmitButton";

const columnHelper = createColumnHelper<TableProps>();

const BonusColumn = () => 
     [
        {
          header: "No",
          accessorKey: "no",
        },
        {
          header: "Bonus Id",
          accessorKey: "bonus_Id",
        },
        {
          header: "Start date",
          accessorKey: "start_date",
        },
        {
          header: "Exp. date",
          accessorKey: "exp_date",
        },
        { header: "Type",
         accessorKey: "type" },
        {
          header: "Percentage",
          accessorKey: "percentage",
        },
        columnHelper.accessor("action", {
            header: "Action",
            cell: ({ row }: { row: Row<TableProps> }) => (
              <SubmitButton buttonContent="Deposit"/>
            ),
          }),
      ]; 
 
export default BonusColumn;