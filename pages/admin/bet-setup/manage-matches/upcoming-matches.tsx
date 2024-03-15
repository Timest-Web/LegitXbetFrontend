import RunningMatches from "@/src/client/components/Admin/AdminDashboard/components/Bet Setup/Manage Matches/RunningMatches";
import UpcomingMatches from "@/src/client/components/Admin/AdminDashboard/components/Bet Setup/Manage Matches/UpcomingMatches";
import type { NextPage } from "next";
import Head from "next/head";

const UpcomingMatch: NextPage = (props) => (
  <div>
      <Head><title>Upcoming Matches</title></Head>
    <UpcomingMatches {...props} />
  </div>
);

export default UpcomingMatch;
