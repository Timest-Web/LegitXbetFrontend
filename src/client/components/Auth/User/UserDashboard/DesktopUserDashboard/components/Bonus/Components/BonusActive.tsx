import React, { useMemo } from "react";
import BonusData from "../Constant/BonusData";
import BonusColumn from "../Constant/BonusColumn";
import LayoutDashboard from "../../../shared/LayoutDashboard";
import TableComp from "../../../shared/ActiveTableComp";

const BonusActive = () => {
  const data = useMemo(() => BonusData, []);

  const columns: any = BonusColumn()

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
