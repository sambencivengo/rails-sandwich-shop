import { Box, useBreakpointValue } from '@chakra-ui/react';
import { Header } from './Header';
import { SplashPageFooter } from './SplashPageFooter';

interface LayoutProps {
	children: React.ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
	const isMobile = useBreakpointValue({ base: true, sm: true, md: false });

	return (
		<>
			<Header />

			<Box px={20} pt={'70px'}>
				<main>{children}</main>
			</Box>
			<SplashPageFooter />
		</>
	);
};
