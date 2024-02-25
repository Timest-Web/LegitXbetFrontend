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
    accessorKey: "no",
  },
  {
    header: "Reference ID",
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
  {
    header: "Amount",
    accessorKey: "amount",
  },
  {
    header: "Channel",
    accessorKey: "channel",
  },
];

export default TransactionColumn;
