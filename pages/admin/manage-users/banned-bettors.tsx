import BannedBettors from "@/src/client/components/Admin/AdminDashboard/components/Manage User/Manage Bettors/Banned Bettors";
import type { NextPage } from "next";
import Head from "next/head";

const BannedBettor: NextPage = (props) => (
  <div>
      <Head><title>Banned Bettors</title></Head>
    <BannedBettors {...props} />
  </div>
);

export default BannedBettor;
