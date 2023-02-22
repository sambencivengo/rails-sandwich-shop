import { useSandwich } from '@/components/SandwichProvider';
import { colors } from '@/theme/theme';
import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';

interface orderProps {}

export const Order: React.FC<orderProps> = ({}) => {
	const { ingredients } = useSandwich();
	return (
		<Flex
			align={'center'}
			justifyContent={'space-around'}
			direction={['column', 'column', 'row']}
			color={colors.black}
			h="90vh"
			gap={10}
		>
			<Box bgColor={colors.whitish} h={'full'} width={'100%'}></Box>
			<Box p={5} bgColor={colors.whitish} h={'full'} width={'100%'}>
				<Heading>Order</Heading>
				<Box border={`2px solid ${colors.black}`} />
			</Box>
		</Flex>
	);
};

export default Order;
