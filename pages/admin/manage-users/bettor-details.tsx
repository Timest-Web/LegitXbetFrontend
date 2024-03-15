import AdminDashboard from "@/src/client/components/Admin/AdminDashboard/components";
import BettorDetails from "@/src/client/components/Admin/AdminDashboard/components/Manage User/Manage Bettors/Bettor Details";
import type { NextPage } from "next";
import Head from "next/head";

const BettorDetail: NextPage = (props) => (
  <div>
    <Head><title>Profile - Bettor</title></Head>
    <BettorDetails {...props} />
  </div>
);

export default BettorDetail;
