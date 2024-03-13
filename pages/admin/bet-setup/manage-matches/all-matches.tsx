import AdminDashboard from "@/src/client/components/Admin/AdminDashboard/components";
import AllMatches from "@/src/client/components/Admin/AdminDashboard/components/Bet Setup/Manage Matches/AllMatches";
import SportCategories from "@/src/client/components/Admin/AdminDashboard/components/Bet Setup/Sport Categories";
import type { NextPage } from "next";

const AllMatch: NextPage = (props) => (
  <div>
    <AllMatches {...props} />
  </div>
);

export default AllMatch;
