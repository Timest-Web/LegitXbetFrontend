import ClosedMatches from "@/src/client/components/Admin/AdminDashboard/components/Bet Setup/Manage Matches/ClosedMatches";
import type { NextPage } from "next";
import Head from "next/head";

const ClosedMatch: NextPage = (props) => (
  <div>
      <Head><title>Closed Matches</title></Head>
    <ClosedMatches {...props} />
  </div>
);

export default ClosedMatch;
