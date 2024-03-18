import BettorPassword from "@/src/client/components/Admin/AdminDashboard/components/Manage User/Manage Bettors/Bettor Details/BettorPassword";
import type { NextPage } from "next";
import Head from "next/head";

const BettorPasswords: NextPage = (props) => (
  <div>
    <Head>
      <title>Password Setting - Bettor</title>
    </Head>
    <BettorPassword {...props} />
  </div>
);

export default BettorPasswords;
