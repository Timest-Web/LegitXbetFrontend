import AdminDashboard from "@/src/client/components/Admin/AdminDashboard/components";
import type { NextPage } from "next";

const Admins: NextPage = (props) => (
  <div>
    <AdminDashboard {...props} />
  </div>
);

export default Admins;
