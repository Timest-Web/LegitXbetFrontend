import type { NextPage } from "next";
import UserDashboard from "@/src/client/components/Auth/User/UserDashboard";
import { useRouter } from "next/router";

const UserDashboards: NextPage = (props) => {
    const router = useRouter();
    const isUserDashboardPage = router.pathname.includes("user-dashboard");

    console.log(isUserDashboardPage);
  return (
    <div>
      <UserDashboard {...props} />
    </div>
  );
};

export default UserDashboards;
