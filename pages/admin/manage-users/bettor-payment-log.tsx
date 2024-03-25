import PaymentLog from "@/src/client/components/Admin/AdminDashboard/components/Manage User/Manage Bettors/Bettor Details/PaymentLog";
import type { NextPage } from "next";
import Head from "next/head";

const PaymentLogs: NextPage = (props) => (
  <div>
    <Head>
      <title>Payment Log</title>
    </Head>
    <PaymentLog {...props} />
  </div>
);

export default PaymentLogs;
