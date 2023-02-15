import Head from 'next/head';
import { Inter } from '@next/font/google';
import React from 'react';
import { env } from '../env';
import { Box, Button, Heading } from '@chakra-ui/react';
import { colors } from '@/theme/theme';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	React.useEffect(() => {
		const getSandwiches = async () => {
			const res = await fetch(`${env.BASE_API_URL}/sandwiches`, {
				headers: {
					'Access-Control-Allow-Origin': '*',
				},
			});
			if (!res.ok) {
				console.log(`Unable to get sandwiches: ${await res.text()}`);
				return;
			}
			const data = await res.json();
			console.log(data);
		};
		getSandwiches();
	}, []);
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
			<Box>
				<Heading color={colors.orange} size={'lg'}>
					{"Sammy's Sandwiches"}
				</Heading>
				<Button variant={'cta'}>Order</Button>
				<Button variant={'solid'}>Order</Button>
				<Button variant={'outline'}>Order</Button>
			</Box>
		</>
	);
}
