
import AnsweredSupportTicket from "@/src/client/components/Admin/AdminDashboard/components/Support Tickets/Answered Ticket";
import type { NextPage } from "next";
import Head from "next/head";

const AnsweredSupport: NextPage = (props) => (
  <div>
    <Head>
      <title>Support - LegitXbet</title>
    </Head>
    <AnsweredSupportTicket {...props} />
  </div>
);

export default AnsweredSupport;
