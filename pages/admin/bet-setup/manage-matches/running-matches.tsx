import RunningMatches from "@/src/client/components/Admin/AdminDashboard/components/Bet Setup/Manage Matches/RunningMatches";
import type { NextPage } from "next";

const RunningMatch: NextPage = (props) => (
  <div>
    <RunningMatches {...props} />
  </div>
);

export default RunningMatch;
