import ManageAdmminUser from "@/src/client/components/Admin/AdminDashboard/components/Manage User/Administrator/ManageAdminUser";
import type { NextPage } from "next";
import Head from "next/head";

const ManageAdmin: NextPage = (props) => (
  <div>
    <Head>
      <title>Manage Users</title>
    </Head>
    <ManageAdmminUser {...props} />
  </div>
);

export default ManageAdmin;
