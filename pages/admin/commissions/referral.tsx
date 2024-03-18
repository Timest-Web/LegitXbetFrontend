import AdminReferral from "@/src/client/components/Admin/AdminDashboard/components/Commision Setting/Referral/AdminReferral";
import type { NextPage } from "next";
import Head from "next/head";

const AdminReferrals: NextPage = (props) => (
  <div>
    <Head>
      <title>Referral - LegitXbet</title>
    </Head>
    <AdminReferral {...props} />
  </div>
);

export default AdminReferrals;
