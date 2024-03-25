import OpenSupportTicket from "@/src/client/components/Admin/AdminDashboard/components/Support Tickets/Open Tickets";
import type { NextPage } from "next";
import Head from "next/head";

const OpenSupport: NextPage = (props) => (
  <div>
    <Head>
      <title>Support - LegitXbet</title>
    </Head>
    <OpenSupportTicket {...props} />
  </div>
);

export default OpenSupport;
