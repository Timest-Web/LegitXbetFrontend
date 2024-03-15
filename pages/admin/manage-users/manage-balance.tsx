import BettorBalance from "@/src/client/components/Admin/AdminDashboard/components/Manage User/Manage Bettors/Bettor Details/BettorBalance";
import type { NextPage } from "next";
import Head from "next/head";

const BettorBalances: NextPage = (props) => (
  <div>
    <Head>
      <title>Manage Balance - Bettor</title>
    </Head>
    <BettorBalance {...props} />
  </div>
);

export default BettorBalances;
