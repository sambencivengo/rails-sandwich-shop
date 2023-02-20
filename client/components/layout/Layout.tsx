import { Box, useBreakpointValue } from '@chakra-ui/react';
import { Header } from './Header';

interface LayoutProps {
	children: React.ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
	const isMobile = useBreakpointValue({ base: true, sm: true, md: false });

	return (
		<>
			<Header />

			<Box pt={isMobile ? '50px' : '10px'}>
				<main>{children}</main>
			</Box>
		</>
	);
};
