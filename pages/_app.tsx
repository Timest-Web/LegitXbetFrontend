import "@/styles/globals.css";
import type { AppProps } from "next/app";
// import { useRouter } from "next/router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BetProvider } from "@/src/client/shared/Context/BetContext/BetProvider";
import { UserProvider } from "@/src/client/shared/Context/UserContext/UserProvider";
import BalanceProvider from "@/src/client/shared/Context/BalanceContext/BalanceContext";
import { ProfileProvider } from "@/src/client/shared/Context/PersonalDetailsContext/ProfileContext";
// import { useGetUser } from "@/src/client/shared/Hooks/useGetUser";
// import AuthUser from "@/src/client/components/Auth/User/UserAuth/AuthUser";
// import useRedirectIfNoAccessToken from "@/src/client/shared/Hooks/useRedirectIfNoAccessToken";
import { TransactionProvider } from "@/src/client/shared/Context/TransactionContext/TransactionContext";

const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   const { user } = useGetUser();
  //   const isUserDashboardPage = router.pathname.includes("user-dashboard");
  //   useRedirectIfNoAccessToken(user, isUserDashboardPage);

  //   if (!user?.accessToken && isUserDashboardPage) {
  //     router.replace("/auth/login"); // Redirect to login page if not authenticated
  //   }
  // }, [router.pathname]); 

  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <ProfileProvider>
          <BalanceProvider>
            <TransactionProvider>
              <BetProvider>
                <Component {...pageProps} />
                <ReactQueryDevtools />
              </BetProvider>
            </TransactionProvider>
          </BalanceProvider>
        </ProfileProvider>
      </UserProvider>
    </QueryClientProvider>
  );
}
