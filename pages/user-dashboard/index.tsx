"use client"

import type { NextPage } from "next";
import useUser from "@/src/client/shared/Context/UserContext/useUser";
import UserDashboard from "@/src/client/components/Auth/User/UserDashboard";
import { useRouter } from "next/router";
import { useEffect } from "react";

const UserDashboards: NextPage = (props) => {

  return (
    <div>
      <UserDashboard {...props} />
    </div>
  );
};

export default UserDashboards;
