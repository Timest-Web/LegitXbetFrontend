import DepositLog from "@/src/client/components/Admin/AdminDashboard/components/Manage Finance/Deposits Log";
import type { NextPage } from "next";
import Head from "next/head";

const DepositLogs: NextPage = (props) => (
  <div>
    <Head>
      <title>Deposit Log - LegitXbet</title>
    </Head>
    <DepositLog {...props} />
  </div>
);

export default DepositLogs;
