
import { useRouter } from "next/router";
import { useEffect } from "react";


export const AuthUser = ({
  children,
  user,
}: {
  children: React.JSX.Element;
  user: any;
}) => {
  const router = useRouter();
  const isUserDashboardPage = router.pathname.includes("user-dashboard");

  useEffect(() => {
    if (!user.accessToken && isUserDashboardPage) {
      const timeout = setTimeout(() => {
        router.push("/");
      }, 4000);
      return () => clearTimeout(timeout);
    }
  }, [user, router, isUserDashboardPage]);

  if (!user.accessToken && isUserDashboardPage) {
    return (
      <div className="flex items-center justify-center h-screen w-screen bg-black">
          <p className="lg:text-5xl text-gold text-3xl font-bold">{`You're not sign in!!`}</p>
      </div>
    );
  }

  return <div>{children}</div>;
};


