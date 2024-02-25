import type { NextPage } from "next";
import useUser from "@/src/client/shared/Context/UserContext/useUser";
import UserDashboard from "@/src/client/components/Auth/User/UserDashboard";

const UserDashboards: NextPage = (props) => {
  const { user } = useUser();

  if (user.id === 0) {
    <p className="text-red-500 text-2xl">{`You're not authorized to access this page`}</p>;
  }

  return (
    <div>
      <UserDashboard {...props} />
    </div>
  );
};

export default UserDashboards;
