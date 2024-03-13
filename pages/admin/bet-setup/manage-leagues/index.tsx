import ManageLeagues from "@/src/client/components/Admin/AdminDashboard/components/Bet Setup/Manage Leagues";
import type { NextPage } from "next";

const ManageLeague: NextPage = (props) => (
  <div>
    <ManageLeagues {...props} />
  </div>
);

export default ManageLeague;
