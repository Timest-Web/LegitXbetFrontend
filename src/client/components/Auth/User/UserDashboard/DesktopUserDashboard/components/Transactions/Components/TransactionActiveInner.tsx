import React, { useMemo } from "react";
import TransactionData from "../Constants/TransactionData";
import TransactionColumn from "./TransactionColumn";
import TableComp from "../../../shared/ActiveTableComp";

const TransactionActiveInner = () => {
  const data = useMemo(() => TransactionData, []);
  const columns: any = TransactionColumn();
  return (
        <TableComp
          data={data}
          columns={columns}
          searchField={false}
          filterField={false}
          tableTitle="Transaction History"
        />
  );
};

export default TransactionActiveInner;
