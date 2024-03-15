import AdminDashboard from "@/src/client/components/Admin/AdminDashboard/components";
import SportCategories from "@/src/client/components/Admin/AdminDashboard/components/Bet Setup/Sport Categories";
import type { NextPage } from "next";
import Head from "next/head";

const SportCategory: NextPage = (props) => (
  <div>
    <Head><title>Sport Categories</title></Head>
    <SportCategories {...props} />
  </div>
);

export default SportCategory;
