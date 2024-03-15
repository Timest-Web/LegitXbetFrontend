import BettorPassword from "@/src/client/components/Admin/AdminDashboard/components/Manage User/Manage Bettors/Bettor Details/BettorPassword";
import SendEmail from "@/src/client/components/Admin/AdminDashboard/components/Manage User/Manage Bettors/Bettor Details/SendEmail";
import type { NextPage } from "next";
import Head from "next/head";

const SendMails: NextPage = (props) => (
  <div>
    <Head>
      <title>Send Mail - Bettor</title>
    </Head>
    <SendEmail {...props} />
  </div>
);

export default SendMails;
