import AdminDashboard from "@/src/client/components/Admin/AdminDashboard/components";
import SportCategories from "@/src/client/components/Admin/AdminDashboard/components/Bet Setup/Sport Categories";
import type { NextPage } from "next";

const SportCategory: NextPage = (props) => (
  <div>
    <SportCategories {...props} />
  </div>
);

export default SportCategory;
