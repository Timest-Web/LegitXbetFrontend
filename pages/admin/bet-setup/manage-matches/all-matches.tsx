import AdminDashboard from "@/src/client/components/Admin/AdminDashboard/components";
import AllMatches from "@/src/client/components/Admin/AdminDashboard/components/Bet Setup/Manage Matches/AllMatches";
import SportCategories from "@/src/client/components/Admin/AdminDashboard/components/Bet Setup/Sport Categories";
import type { NextPage } from "next";
import Head from "next/head";

const AllMatch: NextPage = (props) => (
  <div>
    <Head><title>All Matches</title></Head>
    <AllMatches {...props} />
  </div>
);

export default AllMatch;
