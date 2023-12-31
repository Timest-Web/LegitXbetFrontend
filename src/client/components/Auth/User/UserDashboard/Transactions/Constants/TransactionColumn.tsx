import { useState } from "react";
import TransactionView from "../Components/TransactionView";
import { createColumnHelper } from "@tanstack/react-table";
import { TableProps } from "react-table";
import { Row } from "@tanstack/react-table";
import MoreIcon from "@/src/client/shared/Svg/MoreIcon";

const columnHelper = createColumnHelper<TableProps>();

interface TabViewRows {
  [key: string]: boolean;
}


  const [tabViewRows, setTabViewRows] = useState<TabViewRows>({});
  const toggleTabView = (row: { id: string | number }) => {
    setTabViewRows((prevState) => ({
      ...prevState,
      [row.id]: !prevState[row.id],
    }));
  };


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
        <div className="flex  justify-center items-center relative">
          <button onClick={() => toggleTabView(row)}>
            <MoreIcon />
          </button>
          {tabViewRows[row.id] && <TransactionView />}
        </div>
      ),
    }),
  ];

  export default TransactionColumn;