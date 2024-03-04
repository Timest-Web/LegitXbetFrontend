import TransactionView from "./TransactionView";
import { createColumnHelper } from "@tanstack/react-table";
import { TableProps } from "react-table";
import { Row } from "@tanstack/react-table";
import ActionColumn from "../../../shared/ActionColumn";

const columnHelper = createColumnHelper<TableProps>();

interface TabViewRows {
  [key: string]: boolean;
}

const TransactionColumn = () => [
  {
    header: "No",
    accessorKey: "serialNumber",
  },
  {
    header: "Reference ID",
    accessorKey: "reference",
  },
  {
    header: "Date",
    accessorKey: "createdAt",
  },
  {
    header: "Status",
    accessorKey: "status",
  },
  {
    header: "Amount (NGN)",
    accessorKey: "amount",
  },
  {
    header: "Type",
    accessorKey: "type",
  },

  {
    header: "Channel",
    accessorKey: "merchant",
  },
];

export default TransactionColumn;
