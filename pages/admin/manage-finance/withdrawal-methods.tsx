import WithdrawalMethods from "@/src/client/components/Admin/AdminDashboard/components/Manage Finance/Withdraw/WithrawalMethods";
import type { NextPage } from "next";
import Head from "next/head";

const WithdrawMethod: NextPage = (props) => (
  <div>
    <Head>
      <title>Withdrawal Methods - LegitXbet</title>
    </Head>
    <WithdrawalMethods {...props} />
  </div>
);

export default WithdrawMethod;
