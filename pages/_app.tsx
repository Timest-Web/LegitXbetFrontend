import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BetProvider } from "@/src/client/shared/Context/BetContext/BetProvider";
import { UserProvider } from "@/src/client/shared/Context/UserContext/UserProvider";
import BalanceProvider from "@/src/client/shared/Context/BalanceContext/BalanceContext";
import { ProfileProvider } from "@/src/client/shared/Context/PersonalDetailsContext/ProfileContext";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <ProfileProvider>
          <BalanceProvider>
            <BetProvider>
              <Component {...pageProps} />
              {/* <ReactQueryDevtools /> */}
            </BetProvider>
          </BalanceProvider>
        </ProfileProvider>
      </UserProvider>
    </QueryClientProvider>
  );
}
