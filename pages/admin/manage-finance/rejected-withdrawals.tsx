
import RejectedWithdrawal from "@/src/client/components/Admin/AdminDashboard/components/Manage Finance/Withdraw/RejectedWithdrawal";
import type { NextPage } from "next";
import Head from "next/head";

const RejectedWithdraw: NextPage = (props) => (
  <div>
    <Head>
      <title>Rejected Withdrawal - LegitXbet</title>
    </Head>
    <RejectedWithdrawal {...props} />
  </div>
);

export default RejectedWithdraw;
