
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Logo from '../public/assets/logo1.png';


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
      <div className="flex flex-col items-center justify-center h-screen w-screen bg-black text-gray-400 lg:p-0 px-6">
        <Image src={Logo} alt="img alt" />
        <h1 className="lg:text-5xl font-bold lg:mt-0 mt-5">
          Oops! <span className="text-gold lg:text-8xl text-5xl"> 401 </span>{" "}
          User Not Found
        </h1>
        <p className="lg:text-2xl mt-2">
          you will be redirect to login page in a seconds
        </p>
      </div>
    );
  }

  return <div>{children}</div>;
};


