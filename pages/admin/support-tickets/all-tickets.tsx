import AllSupportTicket from "@/src/client/components/Admin/AdminDashboard/components/Support Tickets/All Tickets";
import type { NextPage } from "next";
import Head from "next/head";

const AllSupport: NextPage = (props) => (
  <div>
    <Head>
      <title>Support - LegitXbet</title>
    </Head>
    <AllSupportTicket {...props} />
  </div>
);

export default AllSupport;
