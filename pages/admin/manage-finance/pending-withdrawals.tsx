
import PendingWithdrawal from "@/src/client/components/Admin/AdminDashboard/components/Manage Finance/Withdraw/PendingWithdrawals";
import type { NextPage } from "next";
import Head from "next/head";

const PendingWithdraw: NextPage = (props) => (
  <div>
    <Head>
      <title>Pending Withdrawal - LegitXbet</title>
    </Head>
    <PendingWithdrawal {...props} />
  </div>
);

export default PendingWithdraw;
