import React, { useMemo } from "react";
import LayoutDashboard from "../../Extras/LayoutDashboard";
import TableComp from "../../Extras/TableComp";

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

const BonusActive = () => {
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
    {
      header: "Action",
      accessorKey: "action",
    },
  ];

  return (
    <LayoutDashboard
      content={
        <TableComp
          data={data}
          columns={columns}
          searchField={false}
          filterField={false}
          tableTitle="Bonus & Promotions"
        />
      }
    />
  );
};

export default BonusActive;
