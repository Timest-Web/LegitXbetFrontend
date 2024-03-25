import SportsAPI from "@/src/client/components/Admin/AdminDashboard/components/Settings/Sports API";
import type { NextPage } from "next";
import Head from "next/head";

const SportApi: NextPage = (props) => (
  <div>
    <Head>
      <title>Settings - LegitXbet</title>
    </Head>
    <SportsAPI {...props} />
  </div>
);

export default SportApi;
