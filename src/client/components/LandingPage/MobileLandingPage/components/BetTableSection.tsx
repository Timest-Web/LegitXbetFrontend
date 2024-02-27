import React from "react";
import { UpcomingBetTable } from "../../../components/Tables/MobileTable/UpcomingBetTable";
import { filterMatches } from "@/src/client/shared/Utils/FilterMatches";

const BetTableSection = (data: any) => {
	// console.log(data);
  return (
    <div className="mt-2 -mb-6 space-y-8">
      {/* <LiveBetTable/> */}
      <UpcomingBetTable
        data={filterMatches(data.data, 2)}
        viewFeatureMatches={2}
      />
    </div>
  );
};

export default BetTableSection;
