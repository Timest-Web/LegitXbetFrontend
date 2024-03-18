import ApprovedWithdrawal from "@/src/client/components/Admin/AdminDashboard/components/Manage Finance/Withdraw/ApprovedWithdrawal";
import type { NextPage } from "next";
import Head from "next/head";

const ApprovedWithdraw: NextPage = (props) => (
  <div>
    <Head>
      <title>Admin - LegitXbet</title>
    </Head>
    <ApprovedWithdrawal {...props} />
  </div>
);

export default ApprovedWithdraw;
