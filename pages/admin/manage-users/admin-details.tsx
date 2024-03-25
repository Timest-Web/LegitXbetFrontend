import AdminDetails from "@/src/client/components/Admin/AdminDashboard/components/Manage User/Administrator/AdminDetails";
import type { NextPage } from "next";
import Head from "next/head";

const AdminDetail: NextPage = (props) => (
  <div>
    <Head>
      <title>Admin Details</title>
    </Head>
    <AdminDetails {...props} />
  </div>
);

export default AdminDetail;
