import React from "react";
import { filterMatches } from "@/src/client/shared/Utils/FilterMatches";
import { CustomBetTable } from "../../../components/Tables/MobileTable/UpcomingBetTable";

const BetTableSection = (data: any) => {
  // console.log(data);
  return (
    <div className="mt-2 -mb-6 space-y-8">
      {/* <LiveBetTable/> */}
      <CustomBetTable
        data={filterMatches(data.data, 2)}
        viewFeatureMatches={2}
      />
    </div>
  );
};

export default BetTableSection;
