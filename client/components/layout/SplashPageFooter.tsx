import { colors } from '@/theme/theme';
import { Box, Text, SimpleGrid } from '@chakra-ui/react';

import React from 'react';

interface SplashPageFooterProps {}

export const SplashPageFooter: React.FC<SplashPageFooterProps> = ({}) => {
	return (
		// TODO: add a header to the footer like on Mural
		<SimpleGrid
			p={10}
			bgColor={colors.greyPurple}
			h="300px"
			minChildWidth="200px"
			spacing="40px"
		>
			<Box height="auto">
				<Text>Place holder</Text>
				<Text>Place holder</Text>
				<Text>Place holder</Text>
				<Text>Place holder</Text>
				<Text>Place holder</Text>
			</Box>
			<Box height="auto">
				<Text>Place holder</Text>
				<Text>Place holder</Text>
				<Text>Place holder</Text>
				<Text>Place holder</Text>
				<Text>Place holder</Text>
			</Box>
			<Box height="auto">
				<Text>Place holder</Text>
				<Text>Place holder</Text>
				<Text>Place holder</Text>
				<Text>Place holder</Text>
				<Text>Place holder</Text>
			</Box>
			<Box height="auto">
				<Text>Place holder</Text>
				<Text>Place holder</Text>
				<Text>Place holder</Text>
				<Text>Place holder</Text>
				<Text>Place holder</Text>
			</Box>
			<Box height="auto">
				<Text>Place holder</Text>
				<Text>Place holder</Text>
				<Text>Place holder</Text>
				<Text>Place holder</Text>
				<Text>Place holder</Text>
			</Box>
		</SimpleGrid>
	);
};
