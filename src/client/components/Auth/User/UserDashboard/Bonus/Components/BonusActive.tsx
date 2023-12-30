import React, { useMemo } from "react";
import LayoutDashboard from "../../shared/LayoutDashboard";
import TableComp from "../../shared/TableComp";
import BonusData from "../Constant/BonusData";



const BonusActive = () => {
  const data = useMemo(() => BonusData, []);

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
