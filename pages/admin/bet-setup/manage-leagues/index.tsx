import ManageLeagues from "@/src/client/components/Admin/AdminDashboard/components/Bet Setup/Manage Leagues";
import type { NextPage } from "next";
import Head from "next/head";

const ManageLeague: NextPage = (props) => (
  <div>
    <Head><title>Manage Leagues</title></Head>
    <ManageLeagues {...props} />
  </div>
);

export default ManageLeague;
