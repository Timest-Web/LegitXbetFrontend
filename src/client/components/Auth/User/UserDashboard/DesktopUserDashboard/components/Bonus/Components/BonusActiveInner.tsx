import React, { useMemo } from "react";
import BonusData from "../Constant/BonusData";
import BonusColumn from "./BonusColumn";
import TableComp from "../../../shared/ActiveTableComp";

const BonusActiveInner = () => {
  const data = useMemo(() => BonusData, []);

  const columns: any = BonusColumn();

  return (
    <TableComp
      data={data}
      columns={columns}
      searchField={false}
      filterField={false}
      tableTitle="Bonus & Promotions"
    />
  );
};

export default BonusActiveInner;
