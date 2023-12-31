import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BetProvider } from '@/src/client/shared/Context/BetContext/BetProvider';
import { UserProvider } from '@/src/client/shared/Context/UserContext/UserProvider';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
	return (
		<UserProvider>
			<BetProvider>
				<QueryClientProvider client={queryClient}>
					<Component {...pageProps} />
					{/* <ReactQueryDevtools /> */}
				</QueryClientProvider>
			</BetProvider>
		</UserProvider>
	);
}
