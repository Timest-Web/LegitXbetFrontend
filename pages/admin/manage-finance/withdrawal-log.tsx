
import WithdrawalLog from "@/src/client/components/Admin/AdminDashboard/components/Manage Finance/Withdraw/WithdrawalLog";
import type { NextPage } from "next";
import Head from "next/head";

const WithdrawLogs: NextPage = (props) => (
  <div>
    <Head>
      <title>All Withdrawal - LegitXbet</title>
    </Head>
    <WithdrawalLog {...props} />
  </div>
);

export default WithdrawLogs;
