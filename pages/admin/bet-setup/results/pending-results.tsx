import PendingResults from "@/src/client/components/Admin/AdminDashboard/components/Bet Setup/Results/PendingResults";
import type { NextPage } from "next";

const PendingResult: NextPage = (props) => (
  <div>
    <PendingResults {...props} />
  </div>
);

export default PendingResult;
