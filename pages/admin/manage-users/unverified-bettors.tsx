import UnverifiedBettors from "@/src/client/components/Admin/AdminDashboard/components/Manage User/Manage Bettors/Unverified Bettors";
import type { NextPage } from "next";
import Head from "next/head";

const UnverifiedBettor: NextPage = (props) => (
  <div>
      <Head><title>Unverified Bettors</title></Head>
    <UnverifiedBettors {...props} />
  </div>
);

export default UnverifiedBettor;
