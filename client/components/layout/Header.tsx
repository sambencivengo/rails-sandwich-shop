import { colors } from '@/theme/theme';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
	IconButton,
	Flex,
	Box,
	useColorMode,
	Center,
	useColorModeValue,
} from '@chakra-ui/react';

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
				`2px solid ${colors.whitish}`,
				`2px solid ${colors.darkPurple}`
			)}
		>
			<Box></Box>
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
