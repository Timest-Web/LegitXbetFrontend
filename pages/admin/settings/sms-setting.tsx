import SMSSettings from "@/src/client/components/Admin/AdminDashboard/components/Settings/SMS Setting";
import type { NextPage } from "next";
import Head from "next/head";

const SMSController: NextPage = (props) => (
  <div>
    <Head>
      <title>SMS Settings - LegitXbet</title>
    </Head>
    <SMSSettings {...props} />
  </div>
);

export default SMSController;
