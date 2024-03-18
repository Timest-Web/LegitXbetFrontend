import AllBettors from "@/src/client/components/Admin/AdminDashboard/components/Manage User/Manage Bettors/All Bettors";
import type { NextPage } from "next";
import Head from "next/head";

const AllBettor: NextPage = (props) => (
  <div>
      <Head><title>All Bettors</title></Head>
    <AllBettors {...props} />
  </div>
);

export default AllBettor;
