import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@/theme/theme';
import { SandwichProvider } from '@/components/SandwichProvider';
import { Layout } from '@/components/layout';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<SandwichProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</SandwichProvider>
		</ChakraProvider>
	);
}
