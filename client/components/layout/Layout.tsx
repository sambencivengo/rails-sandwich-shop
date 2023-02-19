import { Box, Center, Container } from '@chakra-ui/react';
import { Header } from './Header';

interface LayoutProps {
	children: React.ReactNode;
}
export const Layout = ({ children }: LayoutProps) => (
	<>
		<Header />

		<Box>
			<main>{children}</main>
		</Box>
	</>
);
