import Head from 'next/head';
import { Inter } from '@next/font/google';
import React from 'react';
import {
	Image,
	Button,
	Heading,
	useBreakpointValue,
	Flex,
	Center,
	VStack,
} from '@chakra-ui/react';
import { colors } from '@/theme/theme';
import { useSandwich } from '@/components/SandwichProvider';
import { SplashPageFooter } from '@/components/SplashPageFooter';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	const { ingredients } = useSandwich();
	const isMobile = useBreakpointValue({ base: true, sm: true, md: false });

	return (
		<>
			<Head>
				<title>{"Sammy's Sandwiches"}</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Flex
				direction={['column', 'column', 'row']}
				justifyContent={'space-between'}
			>
				<Center p={5} w={isMobile ? '100vw' : '50vw'}>
					<Image
						rounded={'md'}
						h={'80%'}
						fit="cover"
						alt="sandwich"
						src="2sandiwches.jpg"
						boxShadow="dark-lg"
					/>
				</Center>
				<Center p={5} w={isMobile ? '100vw' : '50vw'}>
					<VStack p={5} rounded="md">
						<Heading size={['lg']} color={colors.black}>
							{"Click to begin ordering a Sammy's Sandwich"}
						</Heading>
						<Button size={'lg'}>Order</Button>
					</VStack>
				</Center>
			</Flex>
			<SplashPageFooter />
		</>
	);
}
