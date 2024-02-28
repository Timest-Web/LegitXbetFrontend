import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthUser } from "./_authenticateUser";
import { useGetUser } from "@/src/client/shared/Hooks/useGetUser";
import { BetProvider } from "@/src/client/shared/Context/BetContext/BetProvider";
import { UserProvider } from "@/src/client/shared/Context/UserContext/UserProvider";
import { ProfileProvider } from "@/src/client/shared/Context/PersonalDetailsContext/ProfileContext";
import BalanceProvider from "@/src/client/shared/Context/BalanceContext/BalanceContext";


const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  const { user } = useGetUser();
  return (
    <AuthUser user={user}>
      <QueryClientProvider client={queryClient}>
        <ProfileProvider>
          <BalanceProvider>
            <UserProvider>
              <BetProvider>
                <Component {...pageProps} />
              </BetProvider>
            </UserProvider>
          </BalanceProvider>
        </ProfileProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </AuthUser>
  );
}
