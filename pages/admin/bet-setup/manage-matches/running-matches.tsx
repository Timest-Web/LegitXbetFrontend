import RunningMatches from "@/src/client/components/Admin/AdminDashboard/components/Bet Setup/Manage Matches/RunningMatches";
import type { NextPage } from "next";
import Head from "next/head";

const RunningMatch: NextPage = (props) => (
  <div>
      <Head><title>Running Matches</title></Head>
    <RunningMatches {...props} />
  </div>
);

export default RunningMatch;
