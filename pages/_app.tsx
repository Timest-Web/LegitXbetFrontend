import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BetProvider } from "@/src/client/shared/Context/BetContext/BetProvider";
import { UserProvider } from "@/src/client/shared/Context/UserContext/UserProvider";
import BalanceProvider from "@/src/client/shared/Context/BalanceContext/BalanceContext";
import { ProfileProvider } from "@/src/client/shared/Context/PersonalDetailsContext/ProfileContext";
import { useGetUser } from "@/src/client/shared/Hooks/useGetUser";
import AuthUser from "@/src/client/components/Auth/User/UserAuth/AuthUser";
import useRedirectIfNoAccessToken from "@/src/client/shared/Hooks/useRedirectIfNoAccessToken";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  // const { user } = useGetUser();
  // const router = useRouter();
  // const isUserDashboardPage = router.pathname.includes("user-dashboard");

  // useRedirectIfNoAccessToken(user, isUserDashboardPage);

  // if (!user?.accessToken && isUserDashboardPage) {
  //   return <AuthUser />;
  // }

  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <ProfileProvider>
          <BalanceProvider>
            <BetProvider>
              <Component {...pageProps} />
              <ReactQueryDevtools />
            </BetProvider>
          </BalanceProvider>
        </ProfileProvider>
      </UserProvider>
    </QueryClientProvider>
  );
}
