import ClosedMatches from "@/src/client/components/Admin/AdminDashboard/components/Bet Setup/Manage Matches/ClosedMatches";
import type { NextPage } from "next";

const ClosedMatch: NextPage = (props) => (
  <div>
    <ClosedMatches {...props} />
  </div>
);

export default ClosedMatch;
