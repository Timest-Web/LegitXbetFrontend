import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BetProvider } from '@/src/client/shared/Context/BetContext/BetContext';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
	return (
		<BetProvider>
			<QueryClientProvider client={queryClient}>
				<Component {...pageProps} />
				{/* <ReactQueryDevtools /> */}
			</QueryClientProvider>
		</BetProvider>
	);
}
