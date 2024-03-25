import PaymentLog from "@/src/client/components/Admin/AdminDashboard/components/Manage User/Manage Bettors/Bettor Details/PaymentLog";
import WithdrawLog from "@/src/client/components/Admin/AdminDashboard/components/Manage User/Manage Bettors/Bettor Details/WithdrawLog";
import type { NextPage } from "next";
import Head from "next/head";

const BettorWithdrawal: NextPage = (props) => (
  <div>
    <Head>
      <title>Withdrawal Log</title>
    </Head>
    <WithdrawLog {...props} />
  </div>
);

export default BettorWithdrawal;
