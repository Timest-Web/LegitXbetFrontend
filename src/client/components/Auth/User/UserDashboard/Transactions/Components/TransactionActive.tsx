import React, { useMemo } from "react";
import LayoutDashboard from "../../shared/LayoutDashboard";
import TableComp from "../../shared/ActiveTableComp";
import TransactionData from "../Constants/TransactionData";
import TransactionColumn from "../Constants/TransactionColumn";

const TransactionActive = () => {
  const data = useMemo(() => TransactionData, []);
  const columns: any = TransactionColumn();
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
