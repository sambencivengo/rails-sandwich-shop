import { colors } from '@/theme/theme';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
	IconButton,
	Flex,
	Box,
	useColorMode,
	Center,
	useColorModeValue,
	Heading,
} from '@chakra-ui/react';
import Link from 'next/link';

import React from 'react';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
	const { toggleColorMode } = useColorMode();

	// const [colorMode, setColorMode] = React.useState<'light' | 'dark'>('light');

	return (
		<Flex
			justifyContent={'space-between'}
			h={'50px'}
			borderBottom={useColorModeValue(
				`1px solid ${colors.whitish}`,
				`1px solid ${colors.darkPurple}`
			)}
			position="fixed"
			w={'100%'}
			bgColor={colors.white}
			zIndex={10}
		>
			<Center>
				<Link href={'/'}>
					<Heading
						textDecoration={'underline'}
						ml={5}
						size="lg"
						color={colors.orange}
					>
						{"Sammy's Sandwiches"}
					</Heading>
				</Link>
			</Center>

			<Center pr={2}>
				<IconButton
					variant={useColorModeValue('cta', 'solid')}
					aria-label="color mode switch"
					onClick={toggleColorMode}
					icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
				/>
			</Center>
		</Flex>
	);
};
