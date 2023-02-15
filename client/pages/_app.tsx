import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@/theme/theme';
import { SandwichProvider } from '@/components/SandwichProvider';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<SandwichProvider>
				<Component {...pageProps} />
			</SandwichProvider>
		</ChakraProvider>
	);
}
