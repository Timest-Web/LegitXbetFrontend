import ClosedSupportTicket from "@/src/client/components/Admin/AdminDashboard/components/Support Tickets/Closed Tickets";
import type { NextPage } from "next";
import Head from "next/head";

const ClosedSupport: NextPage = (props) => (
  <div>
    <Head>
      <title>Support - LegitXbet</title>
    </Head>
    <ClosedSupportTicket {...props} />
  </div>
);

export default ClosedSupport;
