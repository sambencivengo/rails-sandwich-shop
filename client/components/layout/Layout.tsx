import { Center } from '@chakra-ui/react';
import { Header } from './Header';

interface LayoutProps {
	children: React.ReactNode;
}
export const Layout = ({ children }: LayoutProps) => (
	<>
		<Header />
		<Center>
			<main>{children}</main>
		</Center>
	</>
);
