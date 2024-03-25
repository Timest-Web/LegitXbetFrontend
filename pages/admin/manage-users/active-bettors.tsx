import ActiveBettors from "@/src/client/components/Admin/AdminDashboard/components/Manage User/Manage Bettors/Active Bettors";
import type { NextPage } from "next";
import Head from "next/head";

const ActiveBettor: NextPage = (props) => (
  <div>
      <Head><title>Active Bettors</title></Head>
    <ActiveBettors {...props} />
  </div>
);

export default ActiveBettor;
