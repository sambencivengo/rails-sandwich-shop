import { colors } from '@/theme/theme';
import { Box } from '@chakra-ui/react';

import React from 'react';

interface SplashPageFooterProps {}

export const SplashPageFooter: React.FC<SplashPageFooterProps> = ({}) => {
	return <Box w={'100%'} bgColor={colors.greyPurple} h="300px"></Box>;
};
