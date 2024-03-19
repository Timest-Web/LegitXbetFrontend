import { useRouter } from "next/router";
import { useGetUser } from "../Hooks/useGetUser";
import { useEffect } from "react";

const RedirectIfNoAccessToken = () => {
  const { user } = useGetUser();
  const router = useRouter();
  const isUserDashboardPage = router.pathname.includes("user-dashboard");
  useEffect(() => {
    if (!user?.accessToken && isUserDashboardPage) {
      router.push("/");
    }
  }, [router, user, isUserDashboardPage]);
}

export default RedirectIfNoAccessToken;
