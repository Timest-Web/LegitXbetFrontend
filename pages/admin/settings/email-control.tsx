import EmailControl from "@/src/client/components/Admin/AdminDashboard/components/Settings/Email Setting/Email Control";
import type { NextPage } from "next";
import Head from "next/head";

const EmailController: NextPage = (props) => (
  <div>
    <Head>
      <title>Email Control - LegitXbet</title>
    </Head>
    <EmailControl {...props} />
  </div>
);

export default EmailController;
