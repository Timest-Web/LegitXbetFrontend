import React, { useMemo, useState } from "react";
import LayoutDashboard from "../../Extras/LayoutDashboard";
import TableComp from "../../Extras/TableComp";
import TransactionView from "./TransactionView";
import { createColumnHelper } from "@tanstack/react-table";
import { TableProps } from "react-table";
import { Row } from "@tanstack/react-table";
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

interface TabViewRows {
  [key: string]: boolean;
}

const TransactionActive = () => {
  const [tabViewRows, setTabViewRows] = useState<TabViewRows>({});
  const toggleTabView = (row: { id: string | number }) => {
    setTabViewRows((prevState) => ({
      ...prevState,
      [row.id]: !prevState[row.id],
    }));
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

  return (
    <LayoutDashboard
      content={
        <TableComp
          data={data}
          columns={columns}
          searchField={false}
          filterField={false}
          tableTitle="Transaction History"
        />
      }
    />
  );
};

export default TransactionActive;
