import AddUser from "@/src/client/components/Admin/AdminDashboard/components/Manage User/Administrator/AddUser";
import type { NextPage } from "next";
import Head from "next/head";

const AddUsersAdmin: NextPage = (props) => (
  <div>
    <Head>
      <title>Add Users</title>
    </Head>
    <AddUser {...props} />
  </div>
);

export default AddUsersAdmin;
