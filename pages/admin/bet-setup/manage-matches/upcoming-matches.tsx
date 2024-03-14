import RunningMatches from "@/src/client/components/Admin/AdminDashboard/components/Bet Setup/Manage Matches/RunningMatches";
import UpcomingMatches from "@/src/client/components/Admin/AdminDashboard/components/Bet Setup/Manage Matches/UpcomingMatches";
import type { NextPage } from "next";

const UpcomingMatch: NextPage = (props) => (
  <div>
    <UpcomingMatches {...props} />
  </div>
);

export default UpcomingMatch;
