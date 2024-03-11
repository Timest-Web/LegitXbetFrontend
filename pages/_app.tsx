import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BetProvider } from "@/src/client/shared/Context/BetContext/BetProvider";
import { UserProvider } from "@/src/client/shared/Context/UserContext/UserProvider";
import BalanceProvider from "@/src/client/shared/Context/BalanceContext/BalanceContext";
import { ProfileProvider } from "@/src/client/shared/Context/PersonalDetailsContext/ProfileContext";
import { TransactionProvider } from "@/src/client/shared/Context/TransactionContext/TransactionContext";
import RedirectIfNoAccessToken from "@/src/client/shared/Utils/RedirectIfNotToken";

const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  RedirectIfNoAccessToken();
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
