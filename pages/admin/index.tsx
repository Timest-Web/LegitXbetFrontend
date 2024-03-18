import AdminDashboard from "@/src/client/components/Admin/AdminDashboard/components";
import type { NextPage } from "next";
import Head from "next/head";

const Admins: NextPage = (props) => (
  <div>
    <Head><title>Admin - LegitXbet</title></Head>
    <AdminDashboard {...props} />
  </div>
);

export default Admins;
