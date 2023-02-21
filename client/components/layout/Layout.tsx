import { Box } from '@chakra-ui/react';
import { Header } from './Header';
import { SplashPageFooter } from './SplashPageFooter';

interface LayoutProps {
	children: React.ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Header />

			<Box px={20} pb={20} pt={'70px'}>
				<main>{children}</main>
			</Box>
			<SplashPageFooter />
		</>
	);
};
